import { Icon } from '../components/Icon';
import { Checkbox, Choice, ErrorLine, Pill, Radio } from '../components/ui';
import { agents } from '../data/mock';
import { useStore } from '../state/store';

export function VisitScreen() {
  const { s, set, setVF, t, P, allListings } = useStore();
  const vf = s.vf;
  const save = () => {
    if (!vf.buyer.trim() || vf.mobile.length !== 10) return set({ err: t('visitErr') });
    set(p => ({ vDone: { ...p.vf }, screen: 'visitDone', err: '' }));
  };
  const partners = [{ value: 'none', label: t('none') }, ...(['ms', 'hd', 'jm'] as const).map(k => ({ value: k as string, label: P(agents[k].n) }))];

  return (
    <div className="page-white">
      <div className="page-body">
        <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text-subtle)' }}>{t('visitSub')}</div>
        <div className="stack" style={{ gap: 8 }} role="radiogroup" aria-label={t('property')}>
          <span className="label">{t('property')}</span>
          <div style={{ border: '1px solid rgba(0,0,0,.12)', borderRadius: 6, maxHeight: 188, overflowY: 'auto' }}>
            {allListings.filter(l => !l.dup).map(l => (
              <button key={l.id} type="button" role="radio" aria-checked={vf.lid === l.id} onClick={() => setVF('lid', l.id)} className="row tap"
                style={{ width: '100%', gap: 12, padding: '10px 12px', border: 'none', borderBottom: '1px solid var(--divider)', background: '#fff' }}>
                <Radio on={vf.lid === l.id} />
                <span className="stack" style={{ flex: 1, minWidth: 0, gap: 1 }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{P(l.title)} · {P(l.loc)}</span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-subtle)' }}>DS-SUR-{l.id}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <label className="field">
          <span className="label">{t('buyerName')}</span>
          <input className="input" autoComplete="off" value={vf.buyer} onChange={e => setVF('buyer', e.target.value)} placeholder="Nirav Joshi" />
        </label>
        <label className="field">
          <span className="label">{t('buyerMobile')}</span>
          <div className="row" style={{ gap: 8 }}>
            <div className="prefix">+91</div>
            <input className="input" style={{ flex: 1 }} type="tel" inputMode="numeric" value={vf.mobile} onChange={e => setVF('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="98765 43210" />
          </div>
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 10 }}>
          <label className="field">
            <span className="label">{t('visitDate')}</span>
            <input className="input" type="date" style={{ padding: '0 10px', fontSize: 15 }} value={vf.date} onChange={e => setVF('date', e.target.value)} />
          </label>
          <label className="field">
            <span className="label">{t('visitTime')}</span>
            <input className="input" type="time" style={{ padding: '0 10px', fontSize: 15 }} value={vf.time} onChange={e => setVF('time', e.target.value)} />
          </label>
        </div>
        <div className="stack" style={{ gap: 8 }}>
          <span className="label">{t('coAgent')}</span>
          <div className="wrap"><Choice value={vf.co} onPick={v => setVF('co', v)} options={partners} /></div>
        </div>
        <button type="button" role="checkbox" aria-checked={vf.sms} onClick={() => setVF('sms', !vf.sms)} className="row tap"
          style={{ gap: 12, alignItems: 'flex-start', padding: 12, border: '1px solid rgba(0,0,0,.12)', borderRadius: 6, background: '#fff' }}>
          <Checkbox on={vf.sms} />
          <span className="stack" style={{ gap: 3 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>{t('sendSms')}</span>
            <span style={{ fontSize: 12, color: 'var(--text-subtle)', lineHeight: 1.45 }}>{t('sendSmsSub')}</span>
          </span>
        </button>
        <div className="row" style={{ gap: 8, fontSize: 12, background: 'var(--base)', padding: '10px 12px', borderRadius: 4 }}>
          <Icon name="Percent" size={14} />{t('termsApply')}
        </div>
        <ErrorLine msg={s.err} />
      </div>
      <div className="sticky-footer">
        <button type="button" className="btn btn-primary btn-block" onClick={save}>{t('saveVisit')}</button>
      </div>
    </div>
  );
}

export function VisitDoneScreen() {
  const { s, t, P, tabTo, allListings } = useStore();
  const vd = s.vDone ?? s.vf;
  const vL = allListings.find(l => l.id === vd.lid) ?? allListings[0];
  const masked = '+91 ' + vd.mobile.slice(0, 2) + '••• ••' + vd.mobile.slice(-3);
  return (
    <div className="result">
      <div className="result-badge" style={{ background: 'var(--success-bg)', color: 'var(--success-fg)' }}><Icon name="CheckCircle" size={28} /></div>
      <div className="stack" style={{ gap: 8 }}>
        <h1 className="screen-title" style={{ margin: 0 }}>{t('visitSaved')}</h1>
        <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-subtle)' }}>{t('visitSavedSub')}</div>
      </div>
      <div className="card stack" style={{ fontSize: 13 }}>
        <div className="between" style={{ padding: '12px 14px' }}>
          <span className="muted">{t('recordId')}</span>
          <span className="mono" style={{ fontWeight: 700, color: 'var(--brand)' }}>IN-5532</span>
        </div>
        <div className="card-row">
          <span className="muted">{t('property')}</span>
          <span style={{ fontWeight: 600, textAlign: 'right' }}>
            {P(vL.title)} · {P(vL.loc)}
            <br />
            <span className="mono" style={{ fontWeight: 400, fontSize: 11, color: 'var(--text-subtle)' }}>DS-SUR-{vL.id}</span>
          </span>
        </div>
        <div className="card-row"><span className="muted">{t('buyer')}</span><span style={{ fontWeight: 600 }}>{vd.buyer} · {masked}</span></div>
        <div className="card-row"><span className="muted">{t('visitDate')}</span><span style={{ fontWeight: 600 }}>{vd.date.split('-').reverse().join('/')} · {vd.time}</span></div>
        <div className="card-row" style={{ alignItems: 'center' }}><span className="muted">{t('buyerConf')}</span><Pill tone="warn">{t('waiting')}</Pill></div>
        <div className="card-row"><span className="muted">{t('validTill')}</span><span style={{ fontWeight: 600 }}>27 Apr 2027</span></div>
      </div>
      <div className="result-actions">
        <button type="button" className="btn btn-primary btn-block" onClick={() => tabTo('deal', { hist: ['deals'], dealTab: 'activity' })}>{t('openDeal')}</button>
        <button type="button" className="btn btn-secondary btn-block" onClick={() => tabTo('home')}>{t('done')}</button>
      </div>
    </div>
  );
}
