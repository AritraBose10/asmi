'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

interface Slot {
  id: string; group: string; key: string; label: string; simple: boolean; alt: string; caption: string; brief: string;
  src: string; defaultSrc: string; overridden: boolean; pending: boolean;
}
interface GItem {
  id: string; title: string; category: string; tag: string; caption: string; image?: string;
  custom: boolean; hidden: boolean; overridden: boolean;
}
const CATEGORIES = ['Speakers & Sessions', 'Campus Life', 'Study Tour'];
interface EPhoto { id: number; event_slug: string; src: string }
const GROUPS: Record<string, string> = {
  hero: 'Page heroes', section: 'Section images', facility: 'Campus facilities',
  campus: 'Campus gallery', building: 'Building',
  person: 'People', club: 'Clubs', event: 'Events (cover photo + gallery)', spec: 'Specializations',
  placed: 'Placed students', testimonial: 'Student testimonials',
  program: 'Programs', post: 'Blog posts',
};
type TabId = 'pages' | 'people' | 'clubs' | 'events' | 'specs' | 'students' | 'content' | 'gallery';
const TABS: { id: TabId; label: string; groups: string[] }[] = [
  { id: 'pages', label: 'Pages', groups: ['hero', 'section', 'facility', 'campus', 'building'] },
  { id: 'people', label: 'People', groups: ['person'] },
  { id: 'clubs', label: 'Clubs', groups: ['club'] },
  { id: 'events', label: 'Events', groups: ['event'] },
  { id: 'specs', label: 'Specializations', groups: ['spec'] },
  { id: 'students', label: 'Students', groups: ['placed', 'testimonial'] },
  { id: 'content', label: 'Programs & Blog', groups: ['program', 'post'] },
  { id: 'gallery', label: 'Gallery', groups: [] },
];

async function api(url: string, method: string, body?: unknown) {
  const res = await fetch(url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? `Request failed (${res.status})`);
  return data;
}

async function upload(file: File): Promise<string> {
  const form = new FormData();
  form.append('file', file);
  const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? 'Upload failed');
  return data.src;
}

export default function AdminApp({ signedIn }: { signedIn: boolean }) {
  const [authed, setAuthed] = useState(signedIn);
  return (
    <div className="adm">
      {authed ? <Dashboard onSignOut={() => setAuthed(false)} /> : <Login onDone={() => setAuthed(true)} />}
    </div>
  );
}

function Login({ onDone }: { onDone: () => void }) {
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="adm-login"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true); setErr('');
        try { await api('/api/admin/login', 'POST', { password: pw }); onDone(); }
        catch (x) { setErr((x as Error).message); }
        finally { setBusy(false); }
      }}
    >
      <h1>Media admin</h1>
      <p>ASMi Business School website</p>
      <label htmlFor="adm-pw">Password</label>
      <input id="adm-pw" type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoFocus autoComplete="current-password" />
      {err && <p className="adm-err" role="alert">{err}</p>}
      <button className="adm-btn adm-primary" disabled={busy || !pw}>{busy ? 'Signing in…' : 'Sign in'}</button>
    </form>
  );
}

function Dashboard({ onSignOut }: { onSignOut: () => void }) {
  const [tab, setTab] = useState<TabId>('pages');
  const [eventPhotos, setEventPhotos] = useState<EPhoto[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [gallery, setGallery] = useState<GItem[]>([]);
  const [toast, setToast] = useState<{ msg: string; bad?: boolean } | null>(null);
  const [loading, setLoading] = useState(true);

  const flash = useCallback((msg: string, bad = false) => {
    setToast({ msg, bad });
    setTimeout(() => setToast(null), 3500);
  }, []);

  const load = useCallback(async () => {
    try {
      const d = await api('/api/admin/state', 'GET');
      setSlots(d.slots); setGallery(d.gallery); setEventPhotos(d.eventPhotos ?? []);
    } catch (x) {
      if ((x as Error).message === 'Not signed in') onSignOut(); else flash((x as Error).message, true);
    } finally { setLoading(false); }
  }, [flash, onSignOut]);
  useEffect(() => { load(); }, [load]);

  const emptyIn = (groups: string[]) => slots.filter((s) => s.pending && groups.includes(s.group)).length;
  const current = TABS.find((t) => t.id === tab)!;

  return (
    <>
      <header className="adm-bar">
        <strong>Media admin</strong>
        <nav>
          {TABS.map((t) => (
            <button key={t.id} className={tab === t.id ? 'on' : ''} onClick={() => setTab(t.id)}>
              {t.label}{emptyIn(t.groups) > 0 && <span className="adm-pill">{emptyIn(t.groups)} empty</span>}
            </button>
          ))}
        </nav>
        <a href="/" target="_blank" rel="noreferrer">View site ↗</a>
        <button onClick={async () => { await api('/api/admin/login', 'DELETE'); onSignOut(); }}>Sign out</button>
      </header>
      <main className="adm-main">
        {loading ? <p>Loading…</p> : tab === 'gallery'
          ? <GalleryTab items={gallery} reload={load} flash={flash} />
          : <SlotsTab key={tab} groups={current.groups} slots={slots} eventPhotos={eventPhotos} reload={load} flash={flash} />}
      </main>
      {toast && <div className={`adm-toast${toast.bad ? ' bad' : ''}`} role="status">{toast.msg}</div>}
    </>
  );
}

type Flash = (m: string, bad?: boolean) => void;

function Thumb({ src, label, square }: { src?: string; label: string; square?: boolean }) {
  // Plain <img>: admin previews should show exactly the stored file, not an optimised variant.
  return src
    ? <img className={`adm-thumb${square ? ' sq' : ''}`} src={src} alt={label} />
    : <div className={`adm-thumb adm-empty${square ? ' sq' : ''}`}>No photo</div>;
}

function FilePick({ label, onFile, busy }: { label: string; onFile: (f: File) => void; busy: boolean }) {
  return (
    <label className={`adm-btn${busy ? ' disabled' : ''}`}>
      {busy ? 'Uploading…' : label}
      <input type="file" accept="image/jpeg,image/png,image/webp,image/avif" hidden disabled={busy}
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onFile(f); e.target.value = ''; }} />
    </label>
  );
}

function SlotsTab({ slots, groups, eventPhotos, reload, flash }: { slots: Slot[]; groups: string[]; eventPhotos: EPhoto[]; reload: () => void; flash: Flash }) {
  const [filter, setFilter] = useState<'all' | 'empty'>('all');
  const grouped = useMemo(() => {
    const g: Record<string, Slot[]> = {};
    slots.filter((s) => groups.includes(s.group) && (filter === 'all' || s.pending)).forEach((s) => (g[s.group] ??= []).push(s));
    return g;
  }, [slots, filter, groups]);

  return (
    <>
      <div className="adm-filter">
        <button className={filter === 'all' ? 'on' : ''} onClick={() => setFilter('all')}>All slots</button>
        <button className={filter === 'empty' ? 'on' : ''} onClick={() => setFilter('empty')}>Still empty</button>
      </div>
      {groups.filter((g) => grouped[g]).map((g) => (
        <section key={g}>
          <h2>{GROUPS[g]}</h2>
          <div className="adm-grid">
            {grouped[g].map((s) => <SlotCard key={s.id + s.src + s.alt + s.caption} slot={s} photos={eventPhotos.filter((p) => p.event_slug === s.key)} reload={reload} flash={flash} />)}
          </div>
        </section>
      ))}
      {!Object.keys(grouped).length && <p>Every slot here has a photo.</p>}
    </>
  );
}

function SlotCard({ slot, photos, reload, flash }: { slot: Slot; photos: EPhoto[]; reload: () => void; flash: Flash }) {
  const [alt, setAlt] = useState(slot.alt);
  const [caption, setCaption] = useState(slot.caption);
  const [busy, setBusy] = useState(false);
  const textChanged = alt !== slot.alt || caption !== slot.caption;

  const save = async (src?: string) => {
    setBusy(true);
    try {
      // Only send src when it differs from the default; a repo/stock image stays the default.
      const current = slot.src !== slot.defaultSrc ? slot.src : '';
      await api('/api/admin/slot', 'PUT', { id: slot.id, src: src ?? current, ...(slot.simple ? {} : { alt, caption }) });
      flash('Saved'); reload();
    } catch (x) { flash((x as Error).message, true); } finally { setBusy(false); }
  };

  return (
    <article className="adm-card">
      <Thumb src={slot.src} label={slot.alt} square={['person', 'placed', 'testimonial'].includes(slot.group)} />
      <div className="adm-body">
        <h3>{slot.simple ? slot.label : slot.key}{slot.pending && <span className="adm-pill">empty</span>}{slot.overridden && <span className="adm-pill ok">CMS</span>}</h3>
        {slot.brief && <p className="adm-brief">{slot.brief}</p>}
        {!slot.simple && (
          <>
            <label>Alt text<textarea rows={2} value={alt} maxLength={300} onChange={(e) => setAlt(e.target.value)} /></label>
            <label>Caption<input value={caption} maxLength={200} onChange={(e) => setCaption(e.target.value)} /></label>
          </>
        )}
        <div className="adm-row">
          <FilePick label={slot.src ? 'Replace photo' : 'Upload photo'} busy={busy}
            onFile={async (f) => {
              setBusy(true);
              try { await save(await upload(f)); } catch (x) { flash((x as Error).message, true); setBusy(false); }
            }} />
          {textChanged && <button className="adm-btn adm-primary" disabled={busy} onClick={() => save()}>Save text</button>}
          {slot.overridden && (
            <button className="adm-btn adm-danger" disabled={busy}
              onClick={async () => { await api('/api/admin/slot', 'DELETE', { id: slot.id }); flash('Reset to default'); reload(); }}>
              Reset
            </button>
          )}
        </div>
        {slot.group === 'event' && <EventGallery slug={slot.key} photos={photos} reload={reload} flash={flash} />}
      </div>
    </article>
  );
}

function EventGallery({ slug, photos, reload, flash }: { slug: string; photos: EPhoto[]; reload: () => void; flash: Flash }) {
  const [busy, setBusy] = useState(false);
  const add = async (files: FileList) => {
    setBusy(true);
    let n = 0;
    try {
      for (const f of Array.from(files)) {
        await api('/api/admin/event-photos', 'POST', { slug, src: await upload(f) });
        n++;
      }
      flash(`${n} photo${n === 1 ? '' : 's'} added`);
    } catch (x) { flash(`${(x as Error).message}${n ? ` (${n} added before the error)` : ''}`, true); }
    finally { setBusy(false); reload(); }
  };
  return (
    <div className="adm-evgal">
      <strong>Gallery ({photos.length})</strong>
      <div className="adm-evgal-grid">
        {photos.map((p) => (
          <div key={p.id} className="adm-evgal-item">
            <img src={p.src} alt="" />
            <button aria-label="Remove photo" onClick={async () => {
              try { await api('/api/admin/event-photos', 'DELETE', { id: p.id }); reload(); } catch (x) { flash((x as Error).message, true); }
            }}>×</button>
          </div>
        ))}
      </div>
      <label className={`adm-btn${busy ? ' disabled' : ''}`}>
        {busy ? 'Uploading…' : 'Add photos'}
        <input type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" hidden disabled={busy}
          onChange={(e) => { if (e.target.files?.length) add(e.target.files); e.target.value = ''; }} />
      </label>
    </div>
  );
}

function GalleryTab({ items, reload, flash }: { items: GItem[]; reload: () => void; flash: Flash }) {
  const [adding, setAdding] = useState(false);
  return (
    <>
      <div className="adm-filter">
        <button className="adm-btn adm-primary" onClick={() => setAdding(true)}>+ Add item</button>
      </div>
      {adding && <GalleryForm onClose={() => setAdding(false)} reload={reload} flash={flash} />}
      <div className="adm-grid">
        {items.map((g) => <GalleryCard key={g.id + g.image + g.title + g.caption + g.hidden} item={g} reload={reload} flash={flash} />)}
      </div>
    </>
  );
}

function GalleryCard({ item, reload, flash }: { item: GItem; reload: () => void; flash: Flash }) {
  const [edit, setEdit] = useState(false);
  const [busy, setBusy] = useState(false);
  const run = async (fn: () => Promise<unknown>, ok: string) => {
    setBusy(true);
    try { await fn(); flash(ok); reload(); } catch (x) { flash((x as Error).message, true); } finally { setBusy(false); }
  };
  if (edit) return <GalleryForm item={item} onClose={() => setEdit(false)} reload={reload} flash={flash} />;
  return (
    <article className={`adm-card${item.hidden ? ' dim' : ''}`}>
      <Thumb src={item.image} label={item.title} />
      <div className="adm-body">
        <h3>{item.title}{item.custom && <span className="adm-pill ok">added</span>}{item.hidden && <span className="adm-pill">hidden</span>}</h3>
        <p className="adm-brief">{item.category} · {item.tag}</p>
        <div className="adm-row">
          <button className="adm-btn" onClick={() => setEdit(true)}>Edit</button>
          <button className="adm-btn" disabled={busy} onClick={() => run(() => api('/api/admin/gallery', 'PUT', { id: item.id, hidden: !item.hidden }), item.hidden ? 'Shown' : 'Hidden')}>
            {item.hidden ? 'Show' : 'Hide'}
          </button>
          {(item.custom || item.overridden) && (
            <button className="adm-btn adm-danger" disabled={busy}
              onClick={() => { if (confirm(item.custom ? 'Delete this item?' : 'Reset your edits to this item?')) run(() => api('/api/admin/gallery', 'DELETE', { id: item.id }), item.custom ? 'Deleted' : 'Reset'); }}>
              {item.custom ? 'Delete' : 'Reset'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function GalleryForm({ item, onClose, reload, flash }: { item?: GItem; onClose: () => void; reload: () => void; flash: Flash }) {
  const [title, setTitle] = useState(item?.title ?? '');
  const [category, setCategory] = useState(item?.category ?? CATEGORIES[0]);
  const [tag, setTag] = useState(item?.tag ?? '');
  const [caption, setCaption] = useState(item?.caption ?? '');
  const [image, setImage] = useState(item?.image ?? '');
  const [busy, setBusy] = useState(false);

  return (
    <article className="adm-card adm-form">
      <Thumb src={image} label={title} />
      <div className="adm-body">
        <label>Title<input value={title} maxLength={120} onChange={(e) => setTitle(e.target.value)} /></label>
        <label>Category
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label>Tag<input value={tag} maxLength={60} onChange={(e) => setTag(e.target.value)} /></label>
        <label>Caption<textarea rows={2} value={caption} maxLength={300} onChange={(e) => setCaption(e.target.value)} /></label>
        <div className="adm-row">
          <FilePick label={image ? 'Replace photo' : 'Upload photo'} busy={busy}
            onFile={async (f) => { setBusy(true); try { setImage(await upload(f)); } catch (x) { flash((x as Error).message, true); } finally { setBusy(false); } }} />
          <button className="adm-btn adm-primary" disabled={busy || !title.trim()}
            onClick={async () => {
              setBusy(true);
              try {
                const body = { title, category, tag, caption, image };
                if (item) await api('/api/admin/gallery', 'PUT', { id: item.id, ...body });
                else await api('/api/admin/gallery', 'POST', body);
                flash('Saved'); reload(); onClose();
              } catch (x) { flash((x as Error).message, true); setBusy(false); }
            }}>Save</button>
          <button className="adm-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </article>
  );
}
