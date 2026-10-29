import { Icon } from '../components/Icon';
import { Avatar, Sheet, Switch } from '../components/ui';
import { currentListing, viewListing } from '../state/selectors';
import { useStore, type AppState } from '../state/store';

/** Branded WhatsApp share card with controls for what the card reveals. */
export function ShareSheet() {
  const store = useStore();
  const { s, set, t, P, toast } = store;
  const L = viewListing(currentListing(store));
  const close = () => set({ sheet: null, err: '' });
  const rows: [keyof AppState['share'], string][] = [['price', t('showPrice')], ['soc', t('showSociety')], ['phone', t('showPhone')]];

  return (
    <Sheet title={t('shareTitle')} onClose={close}>
      <div style={{ border: '1px solid var(--border-strong)', borderRadius: 6, overflow: 'hidden', boxShadow: 'var(--elev-1)' }}>
        <div className="between" style={{ background: 'var(--brand)', color: '#fff', padding: '8px 12px', fontSize: 12, fontWeight: 600 }}>
          <span className="row" style={{ gap: 6 }}><Icon name="SecurityCheckSolid" size={14} />{t('app')} · {t('verifiedListing')}</span>
          <span className="mono" style={{ fontSize: 11 }}>DS-SUR-{L.id}</span>
        </div>
        <div className="photo" style={{ height: 128, color: 'var(--text-muted)' }}>
          <Icon name="Images" size={28} />
          <span style={{ position: 'absolute', left: 10, bottom: 8, fontSize: 10, fontWeight: 600, color: 'var(--text-subtle)', background: 'rgba(255,255,255,.85)', padding: '2px 6px', borderRadius: 2 }}>DS-SUR-{L.id} · {P(L.agentName)}</span>
        </div>
        <div className="stack" style={{ padding: 12, gap: 4 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{s.share.price ? P(L.price) : t('priceOnReq')}</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{P(L.title)} · {P(L.size)}</div>
          <div style={{ fontSize: 13, color: 'var(--text-subtle)' }}>{s.share.soc ? P(L.soc) + ', ' + P(L.loc) : P(L.loc)}, {t('city')}</div>
        </div>
        <div className="row" style={{ padding: '10px 12px', borderTop: '1px solid var(--border)', gap: 10, background: 'var(--surface)' }}>
          <Avatar initials={L.agentInit} size={32} fontSize={12} />
          <div className="stack" style={{ flex: 1, minWidth: 0, gap: 1 }}>
            <span style={{ fontSize: 13, fontWeight: 600 }}>{P(L.agentName)} · {L.agentId}</span>
            <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{s.share.phone ? '+91 98250 41042' : t('viaApp')}</span>
          </div>
          <span style={{ fontSize: 11, color: 'var(--brand)', fontWeight: 600 }}>dalalsetu.in/l/{L.id}</span>
        </div>
      </div>
      <div className="hint">{t('cardFooter')}</div>
      <div className="stack" style={{ border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden' }}>
        {rows.map(([k, label]) => (
          <button key={k} type="button" role="switch" aria-checked={s.share[k]} onClick={() => set(p => ({ share: { ...p.share, [k]: !p.share[k] } }))}
            className="between" style={{ gap: 12, minHeight: 48, padding: '0 14px', border: 'none', borderBottom: '1px solid var(--border)', background: '#fff', cursor: 'pointer', fontSize: 14, textAlign: 'left' }}>
            <span>{label}</span>
            <Switch on={s.share[k]} />
          </button>
        ))}
      </div>
      <div className="note note-neutral"><Icon name="Lock" size={14} /><span>{t('neverShared')}</span></div>
      <div style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{t('shareStats')}</div>
      <div className="row" style={{ gap: 8 }}>
        <button type="button" className="btn btn-secondary" style={{ flex: 'none', fontSize: 14, gap: 6 }} onClick={() => toast(t('copiedToast'))}>
          <Icon name="LinkHorizontal" size={16} />{t('copyLink')}
        </button>
        <button type="button" className="btn btn-primary" style={{ flex: 1 }} onClick={() => { set({ sheet: null }); toast(t('sharedToast')); }}>
          <Icon name="Whatsapp" size={18} />{t('shareWa')}
        </button>
      </div>
    </Sheet>
  );
}
