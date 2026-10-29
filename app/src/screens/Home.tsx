import { Icon } from '../components/Icon';
import type { IconName } from '../components/glyphs';
import { Avatar, TONES } from '../components/ui';
import { alerts, recent } from '../data/mock';
import { COPY_ID, ME } from '../state/selectors';
import { useStore } from '../state/store';

export function HomeScreen() {
  const { s, t, P, go, tabTo, allListings } = useStore();
  const mineCount = allListings.filter(l => l.agent === ME).length;
  const openDeal = () => go('deal', { dealTab: 'activity' });

  const stats = [
    { label: t('stActive'), value: String(mineCount), cap: t('stActiveCap'), color: 'var(--text)', go: () => tabTo('feed', { feedTab: 'mine', filter: 'all', q: '' }) },
    { label: t('stDeals'), value: '2', cap: t('stDealsCap'), color: 'var(--text)', go: () => tabTo('deals') },
    { label: t('stDue'), value: '₹2,30,000', cap: t('stDueCap'), color: 'var(--brand)', go: () => tabTo('pay') },
    { label: t('stAck'), value: s.tokenOk ? '1' : '2', cap: t('stAckCap'), color: 'var(--text)', go: openDeal },
  ];
  const quick: { icon: IconName; label: string; go: () => void }[] = [
    { icon: 'PlusCircle', label: t('qaNew'), go: () => go('create', { step: 1 }) },
    { icon: 'MarkerPin', label: t('qaVisit'), go: () => go('visit') },
    { icon: 'BanknoteOutline', label: t('qaPay'), go: () => tabTo('pay', { sheet: 'pay' }) },
    { icon: 'WarningTriangle', label: t('qaReport'), go: () => go('reportNew') },
  ];
  const alertGo = (k: (typeof alerts)[number]['k']) =>
    k === 'copy' ? go('detail', { lid: COPY_ID }) : k === 'overdue' ? tabTo('pay', { payFilter: 'overdue' }) : openDeal();

  return (
    <div className="stack" style={{ padding: 16, gap: 22 }}>
      <div className="row" style={{ gap: 12 }}>
        <Avatar initials="RP" size={48} fontSize={16} />
        <div className="stack" style={{ gap: 3, minWidth: 0 }}>
          <div style={{ fontSize: 19, fontWeight: 700 }}>{t('greet')}</div>
          <div className="row verified" style={{ gap: 6, fontSize: 12, fontWeight: 600 }}>
            <Icon name="SecurityCheckSolid" size={14} />
            {t('verifiedAgent')}
            <span className="mono" style={{ color: 'var(--text-subtle)', fontWeight: 400 }}>DS-AG-1042</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {stats.map(x => (
          <button key={x.label} type="button" onClick={x.go} className="card card-elev tap stack" style={{ padding: '12px 14px', gap: 4 }}>
            <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{x.label}</span>
            <span style={{ fontSize: 24, fontWeight: 300, fontFamily: 'var(--numeral)', color: x.color }}>{x.value}</span>
            <span style={{ fontSize: 11, color: 'var(--text-subtle)' }}>{x.cap}</span>
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
        {quick.map(a => (
          <button key={a.icon} type="button" onClick={a.go} className="stack" style={{ border: 'none', background: 'none', alignItems: 'center', gap: 6, cursor: 'pointer', padding: '4px 0' }}>
            <span className="icon-tile" style={{ width: 52, height: 52, borderRadius: 6, background: '#fff', border: '1px solid var(--border)', color: 'var(--brand)' }}>
              <Icon name={a.icon} size={22} />
            </span>
            <span style={{ fontSize: 12, fontWeight: 500, textAlign: 'center', lineHeight: 1.3 }}>{a.label}</span>
          </button>
        ))}
      </div>

      <section className="stack" style={{ gap: 10 }}>
        <h2 className="h-section" style={{ margin: 0 }}>{t('attention')}</h2>
        {alerts
          .filter(a => !(a.k === 'token' && s.tokenOk))
          .map(a => {
            const [bg, fg] = TONES[a.tone];
            return (
              <button key={a.k} type="button" onClick={() => alertGo(a.k)} className="card tap row" style={{ gap: 12, padding: 12 }}>
                <span className="icon-tile" style={{ width: 40, height: 40, background: bg, color: fg }}>
                  <Icon name={a.icon} size={18} />
                </span>
                <span className="stack" style={{ flex: 1, minWidth: 0, gap: 2 }}>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{P(a.title)}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-subtle)', lineHeight: 1.4 }}>{P(a.desc)}</span>
                </span>
                <Icon name="ArrowChevronRight" size={16} style={{ color: 'var(--text-muted)' }} />
              </button>
            );
          })}
      </section>

      <section className="stack" style={{ gap: 10 }}>
        <h2 className="h-section" style={{ margin: 0 }}>{t('recent')}</h2>
        <div className="card stack">
          {recent.map((r, i) => (
            <div key={i} className="row list-row" style={{ gap: 12, padding: '12px 14px', fontSize: 13, lineHeight: 1.45, alignItems: 'flex-start' }}>
              <span style={{ width: 62, flex: 'none', color: 'var(--text-subtle)', fontSize: 12 }}>{P(r.time)}</span>
              <span>{P(r.text)}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
