import { Icon } from '../components/Icon';
import { Avatar, Choice, Pill } from '../components/ui';
import { history24817 } from '../data/mock';
import type { Listing } from '../data/types';
import type { IconName } from '../components/glyphs';
import { currentListing, ME, ORIGINAL_ID, viewListing } from '../state/selectors';
import { useStore, type FeedFilter } from '../state/store';

export function FeedScreen() {
  const { s, set, t, P, go, allListings } = useStore();

  let list = allListings.filter(l => (s.feedTab === 'mine' ? l.agent === ME : true));
  if (s.filter === 'sale' || s.filter === 'rent') list = list.filter(l => l.tx === s.filter);
  if (s.filter === 'res' || s.filter === 'com' || s.filter === 'land') list = list.filter(l => l.kind === s.filter);
  const q = s.q.trim().toLowerCase();
  if (q) list = list.filter(l => [l.id, 'ds-sur-' + l.id, l.title.en, l.title.gu, l.loc.en, l.loc.gu].some(x => x.toLowerCase().includes(q)));
  const feed = list.map(viewListing);

  const tabs: ['network' | 'mine', string][] = [['network', t('tabNetwork')], ['mine', t('tabMine')]];
  const filters: { value: FeedFilter; label: string }[] = [
    { value: 'all', label: t('fAll') }, { value: 'sale', label: t('fSale') }, { value: 'rent', label: t('fRent') },
    { value: 'res', label: t('fRes') }, { value: 'com', label: t('fCom') }, { value: 'land', label: t('fLand') },
  ];

  return (
    <div className="stack" style={{ padding: '12px 16px 20px', gap: 12 }}>
      <div className="row" role="tablist" style={{ background: 'rgb(240,240,240)', borderRadius: 6, padding: 3, gap: 3 }}>
        {tabs.map(([k, label]) => {
          const on = s.feedTab === k;
          return (
            <button key={k} type="button" role="tab" aria-selected={on} onClick={() => set({ feedTab: k })}
              style={{ flex: 1, height: 36, border: 'none', borderRadius: 4, background: on ? '#fff' : 'transparent', color: on ? 'var(--brand)' : 'var(--text-subtle)', boxShadow: on ? '0 2px 3px rgba(0,0,0,.08)' : 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              {label}
            </button>
          );
        })}
      </div>
      <label className="row" style={{ gap: 8, height: 44, padding: '0 12px', background: '#fff', border: '1px solid var(--border-strong)', borderRadius: 4, color: 'var(--text-subtle)' }}>
        <Icon name="Zoom" size={16} />
        <input type="search" value={s.q} onChange={e => set({ q: e.target.value })} placeholder={t('searchPh')} aria-label={t('searchPh')}
          style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', fontSize: 15, color: 'var(--text)', background: 'transparent' }} />
      </label>
      <div className="hscroll">
        <Choice variant="chip-filter" options={filters} value={s.filter} onPick={v => set({ filter: v })} />
      </div>
      <div className="between">
        <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{feed.length} {t('results')} · {t('city')}</span>
        <button type="button" className="btn-link" onClick={() => go('create', { step: 1 })}>
          <Icon name="Plus" size={14} />{t('newListing')}
        </button>
      </div>
      {feed.length === 0 && <div style={{ padding: '32px 16px', textAlign: 'center', fontSize: 14, color: 'var(--text-subtle)' }}>{t('noResults')}</div>}
      {feed.map(l => (
        <button key={l.id} type="button" onClick={() => go('detail', { lid: l.id })} className="card card-elev tap stack" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="photo" style={{ height: 132, width: '100%' }}>
            <Icon name="Images" size={28} />
            <span style={{ position: 'absolute', top: 10, left: 10, fontSize: 11, fontWeight: 600, background: '#fff', color: 'var(--text)', padding: '3px 8px', borderRadius: 999 }}>{P(l.txLabel)}</span>
            {l.dup && (
              <span className="pill" style={{ position: 'absolute', top: 10, right: 10, background: 'var(--error-bg)', color: 'var(--error-fg)' }}>
                <Icon name="WarningTriangle" size={12} />{t('possibleDup')}
              </span>
            )}
            <span className="mono" style={{ position: 'absolute', bottom: 8, left: 10, fontSize: 10, fontWeight: 600, color: 'var(--text-subtle)', background: 'rgba(255,255,255,.85)', padding: '2px 6px', borderRadius: 2 }}>DS-SUR-{l.id}</span>
            <span style={{ position: 'absolute', bottom: 8, right: 10, fontSize: 11, color: 'var(--text-subtle)' }}>{l.photos} {t('photos')}</span>
          </div>
          <div className="stack" style={{ padding: '12px 14px', gap: 5, width: '100%' }}>
            <div className="between">
              <span style={{ fontSize: 18, fontWeight: 700 }}>{P(l.price)}</span>
              <Pill tone={l.stTone}>{P(l.stLabel)}</Pill>
            </div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>{P(l.title)}</div>
            <div className="row" style={{ fontSize: 13, color: 'var(--text-subtle)', gap: 4 }}>
              <Icon name="MarkerPin" size={14} />{P(l.loc)} · {P(l.size)}
            </div>
            <div className="row" style={{ gap: 8, borderTop: '1px solid var(--divider)', marginTop: 6, paddingTop: 10 }}>
              <Avatar initials={l.agentInit} size={24} fontSize={10} />
              <span style={{ fontSize: 12, fontWeight: 600 }}>{P(l.agentName)}</span>
              {l.verified ? <Icon name="SecurityCheckSolid" size={13} style={{ color: 'var(--success-fg)' }} /> : <span style={{ fontSize: 11, color: 'var(--error-fg)', fontWeight: 600 }}>{t('unverified')}</span>}
              <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-subtle)' }}>{P(l.upd)}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

function listingHistory(l: Listing, P: (x: { en: string; gu: string }) => string) {
  const owner = viewListing(l);
  const hist: { time: string; icon: IconName; text: string }[] =
    l.id === ORIGINAL_ID
      ? history24817.map(h => ({ ...h, text: P(h.text) }))
      : [{ time: l.listed, icon: 'PlusCircle', text: P({ en: 'Created by ' + owner.agentName.en, gu: owner.agentName.gu + 'એ બનાવ્યું' }) }];
  if (l.dup) hist.unshift({ time: '26 Oct, 14:10', icon: 'WarningTriangle', text: P({ en: 'Flagged: photo match with DS-SUR-24817', gu: 'ચેતવણી: DS-SUR-24817 સાથે ફોટો મેળ' }) });
  return hist;
}

export function DetailScreen() {
  const store = useStore();
  const { s, set, t, P, go, toast } = store;
  const raw = currentListing(store);
  const L = viewListing(raw);
  const asked = !!s.asked[raw.id];
  const hist = listingHistory(raw, P);

  return (
    <div className="stack" style={{ minHeight: '100%' }}>
      <div className="photo" style={{ height: 210, background: 'rgb(235,235,235)', flex: 'none' }}>
        <Icon name="Images" size={36} />
        <span style={{ position: 'absolute', left: 12, bottom: 10, fontSize: 11, fontWeight: 600, color: 'var(--text)', background: 'rgba(255,255,255,.9)', padding: '3px 8px', borderRadius: 2 }}>DS-SUR-{L.id} · {P(L.agentName)}</span>
        <span style={{ position: 'absolute', right: 12, bottom: 10, fontSize: 11, fontWeight: 600, color: '#fff', background: 'rgba(0,0,0,.55)', padding: '3px 8px', borderRadius: 999 }}>1 / {L.photos}</span>
      </div>
      <div className="stack" style={{ padding: 16, gap: 14, flex: 1 }}>
        <div className="stack" style={{ gap: 6 }}>
          <div className="between">
            <span style={{ fontSize: 24, fontWeight: 700 }}>{P(L.price)}</span>
            <Pill tone={L.stTone}>{P(L.stLabel)}</Pill>
          </div>
          <div style={{ fontSize: 17, fontWeight: 600 }}>{P(L.title)} · {P(L.txLabel)}</div>
          <div className="row" style={{ fontSize: 13, color: 'var(--text-subtle)', gap: 4 }}>
            <Icon name="MarkerPin" size={14} />{P(L.loc)}, {t('city')} · {P(L.size)}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-subtle)' }}>{P(L.extra)}</div>
        </div>

        {L.dup && (
          <div className="stack" role="alert" style={{ background: 'var(--error-bg)', borderRadius: 6, padding: '12px 14px', gap: 8, color: 'rgb(120,14,0)' }}>
            <div className="row" style={{ gap: 8, fontSize: 14, fontWeight: 700 }}><Icon name="WarningTriangle" size={16} />{t('dupWarnTitle')}</div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>{t('dupWarn')}</div>
            <button type="button" onClick={() => go('detail', { lid: ORIGINAL_ID })}
              style={{ alignSelf: 'flex-start', height: 36, padding: '0 14px', border: '1px solid var(--error-fg)', borderRadius: 4, background: '#fff', color: 'var(--error-fg)', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              {t('seeOriginal')}
            </button>
          </div>
        )}

        <div className="card card-pad stack" style={{ gap: 12 }}>
          <div className="between">
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{t('listedBy')}</span>
            {L.verified && <Pill tone="brand">{t('originalListing')}</Pill>}
          </div>
          <div className="row" style={{ gap: 12 }}>
            <Avatar initials={L.agentInit} size={44} fontSize={14} />
            <div className="stack" style={{ flex: 1, minWidth: 0, gap: 2 }}>
              <div className="row" style={{ gap: 6, fontSize: 15, fontWeight: 700 }}>
                {P(L.agentName)}
                {L.verified && <Icon name="SecurityCheckSolid" size={14} style={{ color: 'var(--success-fg)' }} />}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{P(L.agency)} · <span className="mono">{L.agentId}</span></div>
            </div>
            <div className="stack" style={{ textAlign: 'right', gap: 1 }}>
              <span style={{ fontSize: 17, fontWeight: 600 }}>{L.agentDeals}</span>
              <span style={{ fontSize: 11, color: 'var(--text-subtle)' }}>{t('tr1')}</span>
            </div>
          </div>
          <div className="grid2" style={{ fontSize: 12, borderTop: '1px solid var(--divider)', paddingTop: 10 }}>
            <div className="stack" style={{ gap: 2 }}><span className="muted">{t('listingId')}</span><span className="mono" style={{ fontWeight: 600 }}>DS-SUR-{L.id}</span></div>
            <div className="stack" style={{ gap: 2 }}><span className="muted">{t('listedOn')}</span><span style={{ fontWeight: 600 }}>{L.listed}</span></div>
          </div>
        </div>

        <div className="card card-pad stack" style={{ gap: 6 }}>
          <div className="row" style={{ gap: 8, fontSize: 14, fontWeight: 700 }}><Icon name="Percent" size={16} style={{ color: 'var(--brand)' }} />{t('collab')}</div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>{P(L.comm)}</div>
          <div className="hint">{t('collabSub')}</div>
        </div>

        <div className="card stack">
          <div className="stack" style={{ padding: '14px 14px 10px', gap: 4 }}>
            <div className="row" style={{ gap: 8, fontSize: 14, fontWeight: 700 }}><Icon name="Lock" size={16} style={{ color: 'var(--brand)' }} />{t('protected')}</div>
            <div style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{t('protectedSub')}</div>
          </div>
          <div className="card-row"><span className="muted">{t('ownerContact')}</span><span style={{ fontWeight: 600, letterSpacing: '.04em' }}>+91 98••• •••21</span></div>
          <div className="card-row"><span className="muted">{t('exactAddr')}</span><span style={{ fontWeight: 600 }}>{t('addrHidden')}</span></div>
          <div className="card-row">
            <span className="muted">{t('ownerAuth')}</span>
            <span className="row" style={{ fontWeight: 600, gap: 4, color: raw.auth ? 'var(--success-fg)' : 'var(--error-fg)' }}>
              <Icon name={raw.auth ? 'CheckCircle' : 'WarningCircle'} size={14} />{raw.auth ? t('authOk') : t('authNone')}
            </span>
          </div>
          {!L.mine && !asked && !L.dup && (
            <div style={{ padding: '10px 14px 14px' }}>
              <button type="button" className="btn btn-md btn-block btn-brand-outline" onClick={() => { set(p => ({ asked: { ...p.asked, [raw.id]: true } })); toast(t('accessToast')); }}>
                <Icon name="Unlock" size={16} />{t('requestAccess')}
              </button>
            </div>
          )}
          {asked && (
            <div className="row" style={{ margin: '4px 14px 14px', padding: '10px 12px', borderRadius: 4, background: 'var(--warn-bg)', color: 'var(--warn-fg)', fontSize: 13, fontWeight: 600, gap: 6 }}>
              <Icon name="Clock" size={14} />{t('requested')}
            </div>
          )}
          {L.mine && (
            <div className="between" style={{ margin: '4px 14px 14px', padding: '10px 12px', borderRadius: 4, background: 'var(--brand-tint)', color: 'var(--brand)', fontSize: 13, fontWeight: 600 }}>
              <span>{t('accessReqs')}</span><span style={{ textDecoration: 'underline' }}>{t('review')}</span>
            </div>
          )}
        </div>

        <section className="stack" style={{ gap: 8 }}>
          <h2 className="h-sub" style={{ margin: 0 }}>{t('history')}</h2>
          <div className="card" style={{ padding: '4px 14px' }}>
            {hist.map((h, i) => (
              <div key={i} className="row list-row" style={{ gap: 10, padding: '10px 0', alignItems: 'flex-start' }}>
                <span className="icon-tile" style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--base)', color: 'var(--text-subtle)' }}><Icon name={h.icon} size={14} /></span>
                <div className="stack" style={{ gap: 2, fontSize: 13 }}>
                  <span style={{ fontWeight: 500, lineHeight: 1.4 }}>{h.text}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-subtle)' }}>{h.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="sticky-footer">
        <button type="button" className="btn btn-secondary" style={{ flex: 1, fontSize: 14, gap: 6 }} onClick={() => set({ sheet: 'share' })}>
          <Icon name="Whatsapp" size={18} />{t('share')}
        </button>
        <button type="button" className="btn btn-primary" style={{ flex: 1.3, fontSize: 14, gap: 6 }} onClick={() => go('visit', { vf: { ...s.vf, lid: raw.dup ? ORIGINAL_ID : raw.id } })}>
          <Icon name="MarkerPin" size={16} />{t('recordVisit')}
        </button>
      </div>
    </div>
  );
}
