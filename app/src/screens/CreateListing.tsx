import { Icon } from '../components/Icon';
import { Checkbox, Choice, ErrorLine, Switch } from '../components/ui';
import { amenities, localities } from '../data/mock';
import type { Bi, Listing } from '../data/types';
import { fmtINR, ME, NEW_ID, viewListing } from '../state/selectors';
import { useStore } from '../state/store';

const g = (en: string, gu: string): Bi => ({ en, gu });

export function CreateScreen() {
  const { s, set, setF, t, en } = useStore();
  const f = s.f;
  const steps = [t('s1'), t('s2'), t('s3')];

  const next = () => {
    if (s.step === 1 && (!f.loc || !f.price)) return set({ err: t('reqErr1') });
    if (s.step < 3) return set({ step: (s.step + 1) as 2 | 3, err: '' });
    if (!f.auth) return set({ err: t('reqErr3') });
    const loc = localities.find(x => x[0] === f.loc)!;
    const titles = { res: g(f.bhk + ' BHK Flat', f.bhk + ' BHK ફ્લેટ'), com: g('Commercial space', 'કોમર્શિયલ જગ્યા'), land: g('Plot', 'પ્લોટ') };
    const rent = f.tx !== 'sale';
    const size = f.size || '—';
    const newL: Listing = {
      id: NEW_ID, kind: f.kind, tx: f.tx, title: titles[f.kind],
      soc: g('Society name on request', 'સોસાયટીનું નામ વિનંતી પર'), loc: g(loc[0], loc[1]),
      price: g(fmtINR(f.price) + (rent ? '/mo' : ''), fmtINR(f.price) + (rent ? '/મહિને' : '')),
      size: g(size + ' sq ft', size + ' ચો. ફૂટ'), extra: g('New listing', 'નવું લિસ્ટિંગ'),
      agent: ME, photos: f.photos, upd: g('Just now', 'હમણાં જ'), st: 'avail', listed: '29 Oct 2026, 09:41',
      comm: g(`${f.comm}% total · ${f.split}/${100 - Number(f.split)} with partner agent`, `કુલ ${f.comm}% · સાથી દલાલ સાથે ${f.split}/${100 - Number(f.split)}`),
      dup: false, auth: true,
    };
    set({ newL, screen: 'created', hist: [], err: '' });
  };

  return (
    <div className="page-white">
      <div className="stack" style={{ padding: '14px 16px 0', gap: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
          {[1, 2, 3].map(n => <span key={n} style={{ height: 4, borderRadius: 2, background: n <= s.step ? 'var(--brand)' : 'rgba(0,0,0,.12)' }} />)}
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-subtle)' }}>{t('stepOf').replace('{n}', String(s.step))} · {steps[s.step - 1]}</div>
      </div>
      <div className="page-body">
        {s.step === 1 && (
          <>
            <Group label={t('propType')}><div className="grid3"><Choice variant="seg" value={f.kind} onPick={v => setF('kind', v)} options={[{ value: 'res', label: t('fRes') }, { value: 'com', label: t('fCom') }, { value: 'land', label: t('fLand') }]} /></div></Group>
            <Group label={t('txType')}><div className="grid3"><Choice variant="seg" value={f.tx} onPick={v => setF('tx', v)} options={[{ value: 'sale', label: t('fSale') }, { value: 'rent', label: t('fRent') }, { value: 'lease', label: t('fLease') }]} /></div></Group>
            {f.kind === 'res' && (
              <Group label={t('config')}><div className="wrap"><Choice value={f.bhk} onPick={v => setF('bhk', v)} options={['1', '2', '3', '4'].map(n => ({ value: n, label: n + ' BHK' })).concat({ value: '5', label: '5+ BHK' })} /></div></Group>
            )}
            <Group label={t('locality')}><div className="wrap"><Choice value={f.loc} onPick={v => setF('loc', v)} options={localities.map(([e, u]) => ({ value: e, label: en ? e : u }))} /></div></Group>
            <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 10 }}>
              <label className="field">
                <span className="label">{t('price')}</span>
                <input className="input" inputMode="numeric" value={f.price} onChange={e => setF('price', e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="11500000" />
                <span style={{ fontSize: 12, color: 'var(--text-subtle)', minHeight: 16 }}>{fmtINR(f.price)}</span>
              </label>
              <label className="field">
                <span className="label">{t('size')}</span>
                <input className="input" inputMode="numeric" value={f.size} onChange={e => setF('size', e.target.value.replace(/\D/g, '').slice(0, 6))} placeholder="1850" />
              </label>
            </div>
          </>
        )}
        {s.step === 2 && <StepPhotos />}
        {s.step === 3 && <StepProtection />}
        <ErrorLine msg={s.err} />
      </div>
      <div className="sticky-footer">
        {s.step > 1 && (
          <button type="button" className="btn btn-secondary" style={{ padding: '0 18px', fontSize: 14 }} onClick={() => set({ step: (s.step - 1) as 1 | 2, err: '' })}>{t('back')}</button>
        )}
        <button type="button" className="btn btn-primary" style={{ flex: 1 }} onClick={next}>{s.step === 3 ? t('publish') : t('next')}</button>
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="stack" style={{ gap: 8 }}>
      <span className="label">{label}</span>
      {children}
    </div>
  );
}

function StepPhotos() {
  const { s, setF, t, en } = useStore();
  const f = s.f;
  return (
    <>
      <div className="stack" style={{ gap: 8 }}>
        <span className="label">{t('photos')}</span>
        <div className="grid3">
          {Array.from({ length: f.photos }, (_, i) => (
            <div key={i} className="stack" style={{ aspectRatio: '1', borderRadius: 4, background: 'rgb(235,235,235)', alignItems: 'center', justifyContent: 'center', gap: 4, color: 'var(--text-muted)', position: 'relative' }}>
              <Icon name="Image" size={22} />
              <span className="mono" style={{ position: 'absolute', bottom: 4, left: 4, right: 4, fontSize: 8, color: 'var(--text-subtle)', textAlign: 'center' }}>DS-SUR-{NEW_ID} · {i + 1}</span>
            </div>
          ))}
          {f.photos < 8 && (
            <button type="button" onClick={() => setF('photos', Math.min(8, f.photos + 1))} className="stack"
              style={{ aspectRatio: '1', borderRadius: 4, border: '1px dashed var(--border-control)', background: 'var(--surface)', alignItems: 'center', justifyContent: 'center', gap: 4, color: 'var(--brand)', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>
              <Icon name="PhotoCamera" size={22} />{t('addPhoto')}
            </button>
          )}
        </div>
        <span className="row" style={{ fontSize: 12, color: 'var(--text-subtle)', gap: 6 }}><Icon name="SecurityCheckOutline" size={14} />{t('photoNote')}</span>
      </div>
      <Group label={t('amenities')}>
        <div className="wrap">
          <Choice value={f.amen} onPick={v => setF('amen', f.amen.includes(v) ? f.amen.filter(x => x !== v) : [...f.amen, v])} options={amenities.map(([e, u]) => ({ value: e, label: en ? e : u }))} />
        </div>
      </Group>
      <label className="field">
        <span className="label">{t('desc')}</span>
        <textarea className="input" rows={4} value={f.desc} onChange={e => setF('desc', e.target.value)} placeholder={t('descPh')} />
      </label>
    </>
  );
}

function StepProtection() {
  const { s, setF, t } = useStore();
  const f = s.f;
  const vis = [{ value: 'onlyme' as const, label: t('onlyMe') }, { value: 'approved' as const, label: t('approved') }];
  return (
    <>
      <button type="button" role="switch" aria-checked={f.collab} onClick={() => setF('collab', !f.collab)} className="row tap"
        style={{ gap: 12, padding: 14, border: '1px solid rgba(0,0,0,.12)', borderRadius: 6, background: '#fff' }}>
        <span className="stack" style={{ flex: 1, gap: 3 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{t('openCollab')}</span>
          <span style={{ fontSize: 12, color: 'var(--text-subtle)', lineHeight: 1.4 }}>{t('openCollabSub')}</span>
        </span>
        <Switch on={f.collab} />
      </button>
      {f.collab && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 10 }}>
          <label className="field">
            <span className="label">{t('commission')}</span>
            <input className="input" style={{ height: 44 }} inputMode="decimal" value={f.comm} onChange={e => setF('comm', e.target.value.replace(/[^\d.]/g, '').slice(0, 4))} />
          </label>
          <div className="field">
            <span className="label">{t('split')}</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
              <Choice variant="seg" style={{ fontSize: 12, padding: 0 }} value={f.split} onPick={v => setF('split', v)} options={[{ value: '50', label: '50 / 50' }, { value: '60', label: '60 / 40' }, { value: '70', label: '70 / 30' }]} />
            </div>
          </div>
        </div>
      )}
      <Group label={t('whoPhone')}><div className="grid2"><Choice variant="seg" value={f.phoneVis} onPick={v => setF('phoneVis', v)} options={vis} /></div></Group>
      <Group label={t('whoAddr')}><div className="grid2"><Choice variant="seg" value={f.addrVis} onPick={v => setF('addrVis', v)} options={vis} /></div></Group>
      <button type="button" role="checkbox" aria-checked={f.auth} onClick={() => setF('auth', !f.auth)} className="row tap" style={{ gap: 12, alignItems: 'flex-start', border: 'none', background: 'none', padding: '4px 0' }}>
        <Checkbox on={f.auth} />
        <span style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.45 }}>{t('authCheck')}</span>
      </button>
      <button type="button" className="btn btn-md btn-dashed" style={{ fontSize: 13, gap: 8 }} onClick={() => setF('mandate', true)}>
        <Icon name={f.mandate ? 'CheckCircle' : 'Upload'} size={16} />{f.mandate ? t('mandateAdded') : t('uploadMandate')}
      </button>
      <div className="note note-ok"><Icon name="CheckCircle" size={14} /><span>{t('dupCheck')}</span></div>
    </>
  );
}

export function CreatedScreen() {
  const { s, t, P, tabTo } = useStore();
  if (!s.newL) return null;
  const L = viewListing(s.newL);
  return (
    <div className="result">
      <div className="result-badge" style={{ background: 'var(--success-bg)', color: 'var(--success-fg)' }}><Icon name="CheckCircle" size={28} /></div>
      <div className="stack" style={{ gap: 8 }}>
        <h1 className="screen-title" style={{ margin: 0 }}>{t('published')}</h1>
        <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-subtle)' }}>{t('publishedSub')}</div>
      </div>
      <div className="card stack">
        <div className="stack" style={{ padding: 14, gap: 4 }}>
          <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{t('listingId')}</span>
          <span className="mono" style={{ fontSize: 22, fontWeight: 700, color: 'var(--brand)' }}>DS-SUR-{L.id}</span>
        </div>
        <div className="card-row"><span className="muted">{t('property')}</span><span style={{ fontWeight: 600 }}>{P(L.title)} · {P(L.loc)}</span></div>
        <div className="card-row"><span className="muted">{t('listedBy')}</span><span style={{ fontWeight: 600 }}>{P(L.agentName)} · {L.agentId}</span></div>
        <div className="card-row"><span className="muted">{t('createdAt')}</span><span style={{ fontWeight: 600 }}>{L.listed}</span></div>
      </div>
      <div className="result-actions">
        <button type="button" className="btn btn-primary btn-block" onClick={() => tabTo('detail', { lid: NEW_ID, hist: ['feed'], sheet: 'share' })}><Icon name="Whatsapp" size={18} />{t('shareWa')}</button>
        <button type="button" className="btn btn-secondary btn-block" onClick={() => tabTo('detail', { lid: NEW_ID, hist: ['feed'] })}>{t('viewListing')}</button>
      </div>
    </div>
  );
}
