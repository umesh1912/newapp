import { Icon } from '../components/Icon';
import type { IconName } from '../components/glyphs';
import { Avatar, Pill } from '../components/ui';
import { activity, deals, docs, milestones, people, split, stages, tags } from '../data/mock';
import type { Bi } from '../data/types';
import { currentListing, dealStage, dealValue, ORIGINAL_ID } from '../state/selectors';
import { useStore, type DealTab } from '../state/store';

export function DealsScreen() {
  const { s, t, P, go, tabTo, toast } = useStore();
  const cur = dealStage(s);
  return (
    <div className="page">
      <h2 className="h-caps" style={{ margin: 0 }}>{t('activeDeals')}</h2>
      {deals.active.map(d => (
        <button key={d.id} type="button" className="card card-elev tap stack" style={{ padding: 14, gap: 6 }}
          onClick={() => (d.main ? go('deal', { dealTab: 'activity' }) : toast(t('protoOnly')))}>
          <div className="between">
            <span className="mono" style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{d.id}</span>
            <Pill tone="brand">{P(d.main ? stages[cur] : d.stage!)}</Pill>
          </div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>{P(d.title)}</div>
          <div className="between" style={{ fontSize: 13, color: 'var(--text-subtle)', width: '100%' }}>
            <span>{P(d.with)}</span>
            <span style={{ fontWeight: 600, color: 'var(--text)' }}>{P(d.amt)}</span>
          </div>
        </button>
      ))}
      <h2 className="h-caps" style={{ margin: '8px 0 0' }}>{t('closedDeals')}</h2>
      <div className="card" style={{ overflow: 'hidden' }}>
        {deals.closed.map(d => (
          <button key={d.id} type="button" className="row list-row tap"
            onClick={() => (d.id === 'D-1162' ? tabTo('pay', { payFilter: 'overdue' }) : toast(t('protoOnly')))}
            style={{ width: '100%', gap: 10, padding: '12px 14px', border: 'none', borderBottom: '1px solid var(--divider)', background: 'none' }}>
            <span className="mono" style={{ fontSize: 12, color: 'var(--text-subtle)', width: 52 }}>{d.id}</span>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{P(d.title)}</span>
            <Pill tone={d.tone}>{P(d.st)}</Pill>
          </button>
        ))}
      </div>
    </div>
  );
}

const g = (en: string, gu: string): Bi => ({ en, gu });

export function DealRoomScreen() {
  const store = useStore();
  const { s, set, t, P, go, toast, en } = store;
  const cur = dealStage(s);
  const L = store.allListings.find(l => l.id === ORIGINAL_ID) ?? currentListing(store);

  const tabs: [DealTab, string][] = [['activity', t('tActivity')], ['terms', t('tTerms')], ['pay', t('tPay')], ['docs', t('tDocs')]];
  let act = activity.map(a => ({ ...a, tag: a.tag === 'TOKEN' ? (s.tokenOk ? 'confirmed' : 'reported') : a.tag }));
  if (s.tokenOk) {
    act = [{ time: '29 Oct, 09:41', icon: 'CheckCircle' as IconName, text: g('Token confirmed · deal moved to Agreement', 'ટોકનની પુષ્ટિ · ડીલ કરાર તબક્કે'), by: g('Rakesh Patel', 'રાકેશ પટેલ'), tag: 'confirmed' }, ...act];
  }

  return (
    <div className="stack">
      <div className="stack" style={{ background: '#fff', padding: '14px 16px 16px', borderBottom: '1px solid var(--border)', gap: 12 }}>
        <div className="stack" style={{ gap: 3 }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--text-subtle)' }}>D-1187 · DS-SUR-24817</span>
          <span style={{ fontSize: 18, fontWeight: 700 }}>{t('dealRoom')} · 3 BHK · {P(L.loc)}</span>
          <span style={{ fontSize: 13, color: 'var(--text-subtle)' }}>{t('dealValue')} {dealValue(en)} · {t('totalComm')} 2%</span>
        </div>
        <ol className="row" style={{ alignItems: 'flex-start', listStyle: 'none', margin: 0, padding: 0 }} aria-label={t('dealRoom')}>
          {stages.map((x, i) => (
            <li key={i} className="stack" aria-current={i === cur ? 'step' : undefined} style={{ flex: 1, alignItems: 'center', gap: 6, position: 'relative', minWidth: 0 }}>
              {i < stages.length - 1 && (
                <span style={{ position: 'absolute', top: 10, left: 'calc(50% + 12px)', right: 'calc(-50% + 12px)', height: 2, background: i < cur ? 'var(--brand)' : 'rgba(0,0,0,.12)' }} />
              )}
              <span style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${i <= cur ? 'var(--brand)' : 'rgba(0,0,0,.2)'}`, background: i < cur ? 'var(--brand)' : '#fff', color: '#fff', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {i < cur && <Icon name="Check" size={12} />}
                {i === cur && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand)', position: 'absolute' }} />}
              </span>
              <span style={{ fontSize: 10, fontWeight: i === cur ? 700 : 500, color: i <= cur ? 'var(--text)' : 'rgb(130,130,130)', textAlign: 'center', lineHeight: 1.2 }}>{P(x)}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="stack" style={{ padding: '14px 16px', gap: 14 }}>
        {!s.tokenOk && (
          <div className="stack" style={{ background: '#fff', border: '1px solid var(--brand)', borderRadius: 6, padding: 14, gap: 10, boxShadow: '0 0 0 4px rgba(121,0,9,.08)' }}>
            <div className="row" style={{ gap: 8, fontSize: 15, fontWeight: 700, color: 'var(--brand)' }}><Icon name="BanknoteOutline" size={18} />{t('confirmTitle')}</div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>{t('confirmBody')}</div>
            <div className="row" style={{ gap: 8 }}>
              <button type="button" className="btn btn-md btn-secondary" style={{ flex: 1 }} onClick={() => go('reportNew', { rtype: 'pay', rrel: 1 })}>{t('dispute')}</button>
              <button type="button" className="btn btn-md btn-primary" style={{ flex: 1.4 }} onClick={() => { set({ tokenOk: true }); toast(t('confirmedToast')); }}>{t('confirm')}</button>
            </div>
          </div>
        )}

        <section className="stack" style={{ gap: 8 }}>
          <h2 className="h-sub" style={{ margin: 0 }}>{t('participants')}</h2>
          <div className="grid2">
            {people.map(p => (
              <div key={p.i} className="card row" style={{ padding: 10, gap: 8, minWidth: 0 }}>
                <Avatar initials={p.i} size={32} fontSize={11} />
                <span className="stack" style={{ gap: 1, minWidth: 0 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{P(p.n)}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-subtle)', lineHeight: 1.3 }}>{P(p.role)}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="row" role="tablist" style={{ borderBottom: '1px solid var(--border)' }}>
          {tabs.map(([k, label]) => {
            const on = s.dealTab === k;
            return (
              <button key={k} type="button" role="tab" aria-selected={on} onClick={() => set({ dealTab: k })}
                style={{ flex: 1, height: 44, border: 'none', borderBottom: `2px solid ${on ? 'var(--brand)' : 'transparent'}`, background: 'none', color: on ? 'var(--brand)' : 'var(--text-subtle)', fontSize: 13, fontWeight: on ? 600 : 500, cursor: 'pointer', marginBottom: -1 }}>
                {label}
              </button>
            );
          })}
        </div>

        {s.dealTab === 'activity' && (
          <div className="stack">
            {act.map((a, i) => {
              const tg = tags[a.tag as keyof typeof tags];
              return (
                <div key={i} className="row list-row" style={{ gap: 12, padding: '10px 0', alignItems: 'flex-start' }}>
                  <span className="icon-tile" style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', border: '1px solid var(--border)', color: 'var(--brand)' }}><Icon name={a.icon} size={15} /></span>
                  <div className="stack" style={{ flex: 1, minWidth: 0, gap: 3, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>{P(a.text)}</span>
                    <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{P(a.by)} · {a.time}</span>
                    <Pill tone={tg.tone} small>{P(tg.l)}</Pill>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {s.dealTab === 'terms' && (
          <div className="stack" style={{ gap: 12 }}>
            <div className="card" style={{ fontSize: 13 }}>
              <div className="between" style={{ padding: '12px 14px' }}><span className="muted">{t('dealValue')}</span><span style={{ fontWeight: 700 }}>{dealValue(en)}</span></div>
              <div className="card-row" style={{ padding: '12px 14px' }}><span className="muted">{t('totalComm')}</span><span style={{ fontWeight: 700 }}>2% · ₹2,20,000</span></div>
            </div>
            <h3 className="h-sub" style={{ margin: 0 }}>{t('splitTitle')}</h3>
            {split.map(p => (
              <div key={p.i} className="card row" style={{ padding: '12px 14px', gap: 10 }}>
                <Avatar initials={p.i} size={32} fontSize={11} />
                <span className="stack" style={{ flex: 1, gap: 2 }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{P(p.n)}</span>
                  <span className="row verified" style={{ fontSize: 12, gap: 4 }}><Icon name="CheckCircle" size={12} />{t('ackBy')} · {p.ack}</span>
                </span>
                <span className="stack" style={{ textAlign: 'right', gap: 1 }}>
                  <span style={{ fontSize: 15, fontWeight: 700 }}>{p.amt}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{p.pct}</span>
                </span>
              </div>
            ))}
            <div className="row note-info" style={{ gap: 8, fontSize: 12, padding: '10px 12px', borderRadius: 4, fontWeight: 600 }}><Icon name="SecurityCheckOutline" size={14} />{t('protectedUntil')}</div>
            <button type="button" className="btn btn-md btn-secondary" onClick={() => toast(t('changeNote'))}>{t('proposeChange')}</button>
          </div>
        )}

        {s.dealTab === 'pay' && (
          <div className="stack" style={{ gap: 10 }}>
            <h3 className="h-sub" style={{ margin: 0 }}>{t('milestones')}</h3>
            {milestones.map((m, i) => (
              <div key={i} className="card stack" style={{ padding: '12px 14px', gap: 6 }}>
                <div className="between"><span style={{ fontSize: 14, fontWeight: 600 }}>{P(m.title)}</span><span style={{ fontSize: 15, fontWeight: 700 }}>{m.amt}</span></div>
                <div className="between" style={{ fontSize: 12, color: 'var(--text-subtle)' }}><span>{P(m.due)}</span><Pill tone={m.tone} small>{P(m.st)}</Pill></div>
              </div>
            ))}
            <button type="button" className="btn btn-md btn-primary" onClick={() => set({ sheet: 'pay', err: '' })}><Icon name="Plus" size={14} />{t('recordPay')}</button>
          </div>
        )}

        {s.dealTab === 'docs' && (
          <div className="stack" style={{ gap: 8 }}>
            <div className="card">
              {docs.map(d => (
                <div key={d.n} className="row list-row" style={{ gap: 12, padding: '12px 14px' }}>
                  <span className="icon-tile" style={{ width: 36, height: 36, background: 'var(--brand-tint)', color: 'var(--brand)' }}><Icon name={d.icon} size={18} /></span>
                  <span className="stack" style={{ flex: 1, minWidth: 0, gap: 2 }}>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{d.n}</span>
                    <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{P(d.s)}</span>
                  </span>
                  <Icon name="Download" size={16} style={{ color: 'var(--text-subtle)' }} />
                </div>
              ))}
            </div>
            <button type="button" className="btn btn-md btn-dashed" style={{ gap: 8 }} onClick={() => toast(t('uploadToast'))}><Icon name="Upload" size={16} />{t('upload')}</button>
          </div>
        )}

        <button type="button" onClick={() => go('reportNew', { rtype: 'bypass', rrel: 0 })} className="row"
          style={{ alignSelf: 'center', border: 'none', background: 'none', color: 'var(--error-fg)', fontSize: 13, fontWeight: 600, cursor: 'pointer', gap: 6, padding: 10 }}>
          <Icon name="WarningTriangle" size={14} />{t('reportIssue')}
        </button>
      </div>
    </div>
  );
}
