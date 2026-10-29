import { Icon } from '../components/Icon';
import type { IconName } from '../components/glyphs';
import { Avatar, Choice, Pill } from '../components/ui';
import { agents, notifications, verification } from '../data/mock';
import { COPY_ID } from '../state/selectors';
import { useStore } from '../state/store';

export function ProfileScreen() {
  const { s, set, t, P, go, toast } = useStore();
  const trust: [string, string][] = [['38', t('tr1')], ['96%', t('tr2')], ['0', t('tr3')]];
  const menu: { icon: IconName; label: string; trailing: IconName; onClick: () => void }[] = [
    { icon: 'WarningTriangle', label: t('repTitle'), trailing: 'ArrowChevronRight', onClick: () => go('reports') },
    { icon: 'Notification', label: t('menuNotifs'), trailing: 'ArrowChevronRight', onClick: () => go('notifs') },
    { icon: 'FileReport', label: t('menuHistory'), trailing: 'Download', onClick: () => toast(t('downloadedToast')) },
    { icon: 'SecurityLockOutline', label: t('menuPrivacy'), trailing: 'ArrowChevronRight', onClick: () => toast(t('privacyToast')) },
  ];
  const menuRow = { width: '100%', gap: 12, minHeight: 48, padding: '0 14px', border: 'none', borderBottom: '1px solid var(--divider)', background: 'none', fontSize: 14 } as const;

  return (
    <div className="stack" style={{ padding: 16, gap: 16 }}>
      <div className="card row" style={{ padding: 16, gap: 14 }}>
        <Avatar initials="RP" size={60} fontSize={20} />
        <div className="stack" style={{ gap: 3, minWidth: 0 }}>
          <span style={{ fontSize: 18, fontWeight: 700 }}>{P(agents.rp.n)}</span>
          <span style={{ fontSize: 13, color: 'var(--text-subtle)' }}>{t('agency')}</span>
          <span className="row verified" style={{ gap: 6, fontSize: 12, fontWeight: 600 }}>
            <Icon name="SecurityCheckSolid" size={14} />{t('verifiedAgent')} · <span className="mono" style={{ color: 'var(--text-subtle)', fontWeight: 400 }}>DS-AG-1042</span>
          </span>
        </div>
      </div>

      <section className="stack" style={{ gap: 8 }}>
        <h2 className="h-sub" style={{ margin: 0 }}>{t('verification')}</h2>
        <div className="card">
          {verification.map(v => (
            <div key={v.k} className="row list-row" style={{ gap: 12, padding: '12px 14px' }}>
              <span style={{ color: v.ok ? 'var(--success-fg)' : 'var(--warn-fg)' }}><Icon name={v.ok ? 'CheckCircle' : 'Clock'} size={18} /></span>
              <span className="stack" style={{ flex: 1, minWidth: 0, gap: 2 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{t(v.k)}</span>
                <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{P(v.sub)}</span>
              </span>
              <Pill tone={v.ok ? 'ok' : 'warn'}>{v.ok ? t('vDone') : t('vPending')}</Pill>
            </div>
          ))}
        </div>
      </section>

      <section className="stack" style={{ gap: 8 }}>
        <h2 className="h-sub" style={{ margin: 0 }}>{t('trust')}</h2>
        <div className="grid3">
          {trust.map(([v, l]) => (
            <div key={l} className="card stack" style={{ padding: '10px 12px', gap: 2 }}>
              <span style={{ fontSize: 22, fontWeight: 300, fontFamily: 'var(--numeral)' }}>{v}</span>
              <span style={{ fontSize: 11, color: 'var(--text-subtle)', lineHeight: 1.3 }}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="stack" style={{ gap: 8 }}>
        <h2 className="h-sub" style={{ margin: 0 }}>{t('language')}</h2>
        <div className="grid2"><Choice variant="seg" style={{ fontSize: 14 }} value={s.lang} onPick={v => set({ lang: v })} options={[{ value: 'gu', label: 'ગુજરાતી' }, { value: 'en', label: 'English' }]} /></div>
      </section>

      <div className="card" style={{ overflow: 'hidden' }}>
        {menu.map(m => (
          <button key={m.icon} type="button" className="row tap" style={menuRow} onClick={m.onClick}>
            <Icon name={m.icon} size={16} /><span style={{ flex: 1 }}>{m.label}</span><Icon name={m.trailing} size={16} />
          </button>
        ))}
        <button type="button" className="row tap" style={{ ...menuRow, borderBottom: 'none', color: 'var(--error-fg)' }} onClick={() => set({ screen: 'lang', hist: [], phone: '', otp: '' })}>
          <Icon name="Logout" size={16} /><span style={{ flex: 1 }}>{t('logout')}</span>
        </button>
      </div>
    </div>
  );
}

export function NotificationsScreen() {
  const { P, go, tabTo } = useStore();
  const open = (k: (typeof notifications)[number]['go']) =>
    k === 'deal' ? go('deal') : k === 'dup' ? go('detail', { lid: COPY_ID }) : k === 'pay' ? tabTo('pay', { payFilter: 'overdue' }) : tabTo('feed', { feedTab: 'mine' });

  return (
    <div className="page-white">
      {notifications.map((n, i) => (
        <button key={i} type="button" onClick={() => open(n.go)} className="row tap"
          style={{ gap: 12, alignItems: 'flex-start', padding: '14px 16px', border: 'none', borderBottom: '1px solid var(--divider)', background: n.unread ? 'var(--brand-tint)' : '#fff' }}>
          <span className="icon-tile" style={{ width: 36, height: 36, borderRadius: '50%', background: '#fff', border: '1px solid var(--border)', color: 'var(--brand)' }}><Icon name={n.icon} size={16} /></span>
          <span className="stack" style={{ flex: 1, minWidth: 0, gap: 3 }}>
            <span style={{ fontSize: 14, lineHeight: 1.45, fontWeight: 500 }}>{P(n.text)}</span>
            <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{P(n.time)}</span>
          </span>
          {n.unread && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--brand)', marginTop: 6, flex: 'none' }} aria-label="Unread" />}
        </button>
      ))}
    </div>
  );
}
