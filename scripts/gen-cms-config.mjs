/**
 * Generates public/admin/config.yml (the Decap CMS form) from the data files, so
 * every person, club, event, etc. gets an upload field with its real name.
 * Run after adding or renaming records:  npm run cms:config
 */
import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { createRequire } from 'module';
import ts from 'typescript';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const nodeRequire = createRequire(import.meta.url);
const cache = new Map();

function resolve(spec, from) {
  const base = spec.startsWith('@/') ? path.join(ROOT, spec.slice(2)) : path.resolve(path.dirname(from), spec);
  for (const c of [base, base + '.ts', base + '.json', path.join(base, 'index.ts')]) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  throw new Error(`Cannot resolve ${spec} from ${from}`);
}
function load(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const mod = { exports: {} };
  cache.set(file, mod);
  if (file.endsWith('.json')) { mod.exports = JSON.parse(fs.readFileSync(file, 'utf8')); return mod.exports; }
  const out = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText;
  const req = (s) => (s.startsWith('.') || s.startsWith('@/') ? load(resolve(s, file)) : nodeRequire(s));
  vm.runInThisContext(`(function(exports, require, module){${out}\n})`)(mod.exports, req, mod);
  return mod.exports;
}
const data = (f) => load(path.join(ROOT, 'data', f));

// Only offer slots the site actually renders: a field with no effect just confuses editors.
const siteSource = (function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const f = path.join(dir, d.name);
    return d.isDirectory() ? walk(f) : /\.tsx?$/.test(d.name) ? [fs.readFileSync(f, 'utf8')] : [];
  });
})(path.join(ROOT, 'app')).concat((function walk(dir) {
  return fs.readdirSync(dir).filter((n) => /\.tsx$/.test(n)).map((n) => fs.readFileSync(path.join(dir, n), 'utf8'));
})(path.join(ROOT, 'components'))).join('\n');
const used = (rec, re) => Object.fromEntries(Object.entries(rec).filter(([k]) => re(k).test(siteSource)));

const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const q = (s) => JSON.stringify(String(s)); // JSON strings are valid YAML scalars

const image = (name, label, hint, indent, multiple = false) =>
  `${indent}- { label: ${q(label)}, name: ${q(name)}, widget: image, required: false, ` +
  `${multiple ? 'allow_multiple: true, ' : ''}hint: ${q(hint)} }\n`;

function fileEntry({ name, label, file, folder, fields }) {
  return (
    `      - label: ${q(label)}\n        name: ${q(name)}\n        file: ${q(file)}\n` +
    `        media_folder: ${q('/public/photos/' + folder)}\n        public_folder: ${q('/photos/' + folder)}\n` +
    `        fields:\n${fields}`
  );
}
const collection = (name, label, entries) =>
  `  - name: ${q(name)}\n    label: ${q(label)}\n    files:\n${entries}`;

const { PEOPLE } = data('people.ts');
const { CLUBS, EVENTS } = data('campus.ts');
const { SPECIALIZATIONS } = data('programs.ts');
const { PLACED, TESTIMONIALS } = data('site.ts');
const { HERO, SECTION, FACILITIES, CAMPUS_PHOTOS, BUILDING_PHOTOS } = data('photos.ts');

const F = '        ';
const flat = (rows) => rows.map(([n, l, h]) => image(n, l, h, F)).join('');

const people = flat(PEOPLE.map((p) => [p.slug, `${p.name}, ${p.role}`, 'Portrait, 4:5, eyes in the upper third. 1200px on the long edge.']));
const clubs = flat(CLUBS.map((c) => [c.slug, c.name, '16:10 landscape. 1600px on the long edge.']));
const specs = flat(SPECIALIZATIONS.map((s) => [s.slug, s.name, '16:7 banner. 1900px on the long edge.']));
const students =
  flat(PLACED.map((p) => [`placed-${slugify(p.name)}`, `Placed: ${p.name}, ${p.company}`, 'Square or 4:5. 800px on the long edge.'])) +
  flat(TESTIMONIALS.map((t) => [`testimonial-${slugify(t.name)}`, `Testimonial: ${t.name}, ${t.batch}`, 'Square or 4:5. 800px on the long edge.']));

const events = EVENTS.map(
  (e) =>
    `${F}- label: ${q(e.title)}\n${F}  name: ${q(e.slug)}\n${F}  widget: object\n${F}  collapsed: true\n${F}  fields:\n` +
    image('photo', 'Cover photo', '16:10 landscape. 1600px on the long edge.', F + '    ') +
    image('gallery', 'Gallery photos (added after any built-in ones)', 'Select several at once. 16:10 preferred.', F + '    ', true),
).join('');

const group = (name, label, rows) =>
  `${F}- label: ${q(label)}\n${F}  name: ${q(name)}\n${F}  widget: object\n${F}  collapsed: true\n${F}  fields:\n` +
  rows.map(([n, l, h]) => image(n, l, h, F + '    ')).join('');
const slotRows = (rec, size) => Object.entries(rec).map(([k, s]) => [k, `${k}: ${s.alt}`, s.brief ? `${s.brief} ${size}` : size]);
const pages =
  group('hero', 'Page heroes', slotRows(HERO, '16:7, dark or dimmable. 2400px.')) +
  group('section', 'Section images', slotRows(used(SECTION, (k) => new RegExp(`SECTION\\.${k}\\b`)), 'Landscape. 1900px.')) +
  group('facility', 'Campus facilities', slotRows(FACILITIES, '16:10. 1600px.')) +
  group('campus', 'Campus gallery', CAMPUS_PHOTOS.map((s, i) => [`gallery-${i + 1}`, s.caption ?? s.alt, '16:10. 1600px.'])) +
  group('building', 'The building', BUILDING_PHOTOS.map((s, i) => [`building-${i + 1}`, s.caption ?? s.alt, '16:10. 1600px.']));

const yml = `# GENERATED by scripts/gen-cms-config.mjs — edit that script, not this file.
backend:
  name: github
  repo: AritraBose10/asmi
  branch: main
  base_url: https://asmibschool.com
  auth_endpoint: api/decap/auth

# Lets you run the CMS against local files at http://localhost:3000/admin
# (start the proxy with: npx decap-server).
local_backend: true

# Every save is a commit to main, which rebuilds the site.
publish_mode: simple
media_folder: public/photos
public_folder: /photos
site_url: https://asmibschool.com

collections:
${collection('people', 'People', fileEntry({ name: 'people', label: 'People photos', file: 'data/media/people.json', folder: 'people', fields: people }))}${collection('clubs', 'Clubs', fileEntry({ name: 'clubs', label: 'Club photos', file: 'data/media/clubs.json', folder: 'clubs', fields: clubs }))}${collection('events', 'Events', fileEntry({ name: 'events', label: 'Event photos', file: 'data/media/events.json', folder: 'events', fields: events }))}${collection('specializations', 'Specializations', fileEntry({ name: 'specializations', label: 'Specialization photos', file: 'data/media/specializations.json', folder: 'specializations', fields: specs }))}${collection('students', 'Students', fileEntry({ name: 'students', label: 'Student photos', file: 'data/media/students.json', folder: 'students', fields: students }))}${collection('pages', 'Pages, heroes & campus', fileEntry({ name: 'pages', label: 'Page photos', file: 'data/media/pages.json', folder: 'pages', fields: pages }))}`;

fs.writeFileSync(path.join(ROOT, 'public/admin/config.yml'), yml);
console.log(`config.yml: ${PEOPLE.length} people, ${CLUBS.length} clubs, ${EVENTS.length} events, ${SPECIALIZATIONS.length} specializations, ${PLACED.length + TESTIMONIALS.length} students, ${Object.keys(HERO).length + Object.keys(SECTION).length + Object.keys(FACILITIES).length + CAMPUS_PHOTOS.length + BUILDING_PHOTOS.length} page slots`);
