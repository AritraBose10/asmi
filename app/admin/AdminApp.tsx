'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

interface Slot {
  id: string; group: string; key: string; alt: string; caption: string; brief: string;
  src: string; defaultSrc: string; overridden: boolean; pending: boolean;
}
interface GItem {
  id: string; title: string; category: string; tag: string; caption: string; image?: string;
  custom: boolean; hidden: boolean; overridden: boolean;
}
const CATEGORIES = ['Speakers & Sessions', 'Campus Life', 'Study Tour'];
const GROUPS: Record<string, string> = {
  hero: 'Page heroes', section: 'Section images', facility: 'Campus facilities',
  campus: 'Campus gallery', building: 'Building',
};

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
  const [tab, setTab] = useState<'slots' | 'gallery'>('slots');
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
      setSlots(d.slots); setGallery(d.gallery);
    } catch (x) {
      if ((x as Error).message === 'Not signed in') onSignOut(); else flash((x as Error).message, true);
    } finally { setLoading(false); }
  }, [flash, onSignOut]);
  useEffect(() => { load(); }, [load]);

  const pending = slots.filter((s) => s.pending).length;

  return (
    <>
      <header className="adm-bar">
        <strong>Media admin</strong>
        <nav>
          <button className={tab === 'slots' ? 'on' : ''} onClick={() => setTab('slots')}>
            Photo slots{pending > 0 && <span className="adm-pill">{pending} empty</span>}
          </button>
          <button className={tab === 'gallery' ? 'on' : ''} onClick={() => setTab('gallery')}>Gallery</button>
        </nav>
        <a href="/" target="_blank" rel="noreferrer">View site ↗</a>
        <button onClick={async () => { await api('/api/admin/login', 'DELETE'); onSignOut(); }}>Sign out</button>
      </header>
      <main className="adm-main">
        {loading ? <p>Loading…</p> : tab === 'slots'
          ? <SlotsTab slots={slots} reload={load} flash={flash} />
          : <GalleryTab items={gallery} reload={load} flash={flash} />}
      </main>
      {toast && <div className={`adm-toast${toast.bad ? ' bad' : ''}`} role="status">{toast.msg}</div>}
    </>
  );
}

type Flash = (m: string, bad?: boolean) => void;

function Thumb({ src, label }: { src?: string; label: string }) {
  // Plain <img>: admin previews should show exactly the stored file, not an optimised variant.
  return src
    ? <img className="adm-thumb" src={src} alt={label} />
    : <div className="adm-thumb adm-empty">No photo</div>;
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

function SlotsTab({ slots, reload, flash }: { slots: Slot[]; reload: () => void; flash: Flash }) {
  const [filter, setFilter] = useState<'all' | 'empty'>('all');
  const grouped = useMemo(() => {
    const g: Record<string, Slot[]> = {};
    slots.filter((s) => filter === 'all' || s.pending).forEach((s) => (g[s.group] ??= []).push(s));
    return g;
  }, [slots, filter]);

  return (
    <>
      <div className="adm-filter">
        <button className={filter === 'all' ? 'on' : ''} onClick={() => setFilter('all')}>All slots</button>
        <button className={filter === 'empty' ? 'on' : ''} onClick={() => setFilter('empty')}>Still empty</button>
      </div>
      {Object.keys(GROUPS).filter((g) => grouped[g]).map((g) => (
        <section key={g}>
          <h2>{GROUPS[g]}</h2>
          <div className="adm-grid">
            {grouped[g].map((s) => <SlotCard key={s.id + s.src + s.alt + s.caption} slot={s} reload={reload} flash={flash} />)}
          </div>
        </section>
      ))}
      {!Object.keys(grouped).length && <p>Every slot has a photo.</p>}
    </>
  );
}

function SlotCard({ slot, reload, flash }: { slot: Slot; reload: () => void; flash: Flash }) {
  const [alt, setAlt] = useState(slot.alt);
  const [caption, setCaption] = useState(slot.caption);
  const [busy, setBusy] = useState(false);
  const textChanged = alt !== slot.alt || caption !== slot.caption;

  const save = async (src?: string) => {
    setBusy(true);
    try {
      // Only send src when it is a CMS upload; a repo/stock image stays the default.
      const current = slot.src.startsWith('/uploads/') ? slot.src : '';
      await api('/api/admin/slot', 'PUT', { id: slot.id, src: src ?? current, alt, caption });
      flash('Saved'); reload();
    } catch (x) { flash((x as Error).message, true); } finally { setBusy(false); }
  };

  return (
    <article className="adm-card">
      <Thumb src={slot.src} label={slot.alt} />
      <div className="adm-body">
        <h3>{slot.key}{slot.pending && <span className="adm-pill">empty</span>}{slot.overridden && <span className="adm-pill ok">CMS</span>}</h3>
        {slot.brief && <p className="adm-brief">{slot.brief}</p>}
        <label>Alt text<textarea rows={2} value={alt} maxLength={300} onChange={(e) => setAlt(e.target.value)} /></label>
        <label>Caption<input value={caption} maxLength={200} onChange={(e) => setCaption(e.target.value)} /></label>
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
      </div>
    </article>
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
