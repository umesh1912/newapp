import { Icon } from '../components/Icon';
import { Pill, Radio } from '../components/ui';
import { reports, reportTypes } from '../data/mock';
import type { Bi, Report, ReportType } from '../data/types';
import { useStore } from '../state/store';

const g = (en: string, gu: string): Bi => ({ en, gu });

export function ReportsScreen() {
  const { s, t, P, go } = useStore();
  return (
    <div className="page">
      <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--text-subtle)' }}>{t('repIntro')}</div>
      <button type="button" className="btn btn-md btn-primary" onClick={() => go('reportNew', { rtype: 'copy', rrel: 0 })}><Icon name="Plus" size={14} />{t('newReport')}</button>
      {[...s.extraReps, ...reports].map(r => (
        <div key={r.id} className="card row" style={{ padding: '12px 14px', gap: 12, alignItems: 'flex-start' }}>
          <span className="icon-tile" style={{ width: 36, height: 36, background: 'var(--base)' }}><Icon name={r.icon} size={16} /></span>
          <div className="stack" style={{ flex: 1, minWidth: 0, gap: 4 }}>
            <div className="between" style={{ alignItems: 'flex-start' }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{P(r.title)}</span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--text-subtle)' }}>{r.id}</span>
            </div>
            <span style={{ fontSize: 12, color: 'var(--text-subtle)', lineHeight: 1.45 }}>{P(r.desc)}</span>
            <div className="between"><Pill tone={r.tone} small>{P(r.st)}</Pill><span style={{ fontSize: 11, color: 'var(--text-subtle)' }}>{r.date}</span></div>
          </div>
        </div>
      ))}
    </div>
  );
}

const TYPE_LABELS: Record<ReportType, Bi> = {
  copy: g('Listing copied', 'લિસ્ટિંગની નકલ'),
  bypass: g('Client went direct', 'ગ્રાહકે સીધો સોદો કર્યો'),
  pay: g('Payment issue', 'ચુકવણીમાં વાંધો'),
  fake: g('Fake profile', 'નકલી પ્રોફાઇલ'),
};

export function NewReportScreen() {
  const { s, set, t, P, toast } = useStore();
  const rt = reportTypes[s.rtype];
  const types: [ReportType, string, string][] = [
    ['copy', t('rtCopy'), t('rtCopySub')], ['bypass', t('rtBypass'), t('rtBypassSub')],
    ['pay', t('rtPay'), t('rtPaySub')], ['fake', t('rtFake'), t('rtFakeSub')],
  ];

  const submit = () => {
    const r: Report = {
      id: 'RP-' + (232 + s.extraReps.length), icon: rt.icon, title: TYPE_LABELS[s.rtype], desc: rt.rel[s.rrel],
      st: g('Submitted · other party notified', 'મોકલી · સામેના પક્ષને જાણ'), tone: 'info', date: '29 Oct',
    };
    set(p => ({ extraReps: [r, ...p.extraReps], screen: 'reportDone', hist: ['reports'], rtext: '' }));
  };

  return (
    <div className="page-white">
      <div className="page-body">
        <div className="stack" style={{ gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>{t('whatHappened')}</span>
          <div className="grid2" role="radiogroup" aria-label={t('whatHappened')}>
            {types.map(([k, label, sub]) => {
              const on = s.rtype === k;
              return (
                <button key={k} type="button" role="radio" aria-checked={on} onClick={() => set({ rtype: k, rrel: 0 })} className="stack tap"
                  style={{ gap: 6, padding: 12, borderRadius: 6, border: `1px solid ${on ? 'var(--brand)' : 'rgba(0,0,0,.12)'}`, background: on ? 'var(--brand-tint)' : '#fff' }}>
                  <span style={{ color: on ? 'var(--brand)' : 'var(--text-subtle)' }}><Icon name={reportTypes[k].icon} size={20} /></span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{label}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-subtle)', lineHeight: 1.35 }}>{sub}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="stack" style={{ gap: 8 }}>
          <span className="label">{t('related')}</span>
          <div className="stack" style={{ gap: 6 }} role="radiogroup" aria-label={t('related')}>
            {rt.rel.map((x, i) => {
              const on = s.rrel === i;
              return (
                <button key={i} type="button" role="radio" aria-checked={on} onClick={() => set({ rrel: i })} className="row tap"
                  style={{ gap: 10, minHeight: 44, padding: '8px 12px', borderRadius: 4, border: `1px solid ${on ? 'var(--brand)' : 'var(--border-strong)'}`, background: on ? 'var(--brand-tint)' : '#fff', color: on ? 'var(--brand)' : 'var(--text)', fontSize: 13, fontWeight: on ? 600 : 400 }}>
                  <Radio on={on} size={18} />{P(x)}
                </button>
              );
            })}
          </div>
        </div>
        <label className="field">
          <span className="label">{t('details')}</span>
          <textarea className="input" rows={3} value={s.rtext} onChange={e => set({ rtext: e.target.value })} placeholder={t('detailsPh')} />
        </label>
        <div className="stack" style={{ gap: 8 }}>
          <span className="label">{t('evidence')}</span>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: '4px 12px' }}>
            {rt.ev.map((e, i) => (
              <div key={i} className="row" style={{ gap: 8, padding: '8px 0', fontSize: 13, borderBottom: '1px solid rgba(0,0,0,.05)' }}>
                <Icon name="CheckCircle" size={14} style={{ color: 'var(--success-fg)' }} />{P(e)}
              </div>
            ))}
          </div>
          <button type="button" className="btn btn-md btn-dashed" style={{ background: '#fff', fontSize: 13, gap: 8 }} onClick={() => toast(t('uploadToast'))}>
            <Icon name="PaperclipOutline" size={16} />{t('addFiles')}
          </button>
        </div>
        <div className="note note-neutral"><Icon name="Information" size={14} /><span>{t('repIntro')}</span></div>
      </div>
      <div className="sticky-footer">
        <button type="button" className="btn btn-primary btn-block" onClick={submit}>{t('submit')}</button>
      </div>
    </div>
  );
}

export function ReportDoneScreen() {
  const { s, t, tabTo } = useStore();
  const steps = [t('ns1'), t('ns2'), t('ns3'), t('ns4')];
  return (
    <div className="result">
      <div className="result-badge" style={{ background: 'var(--info-bg)', color: 'var(--info-fg)' }}><Icon name="CheckCircle" size={28} /></div>
      <div className="stack" style={{ gap: 8 }}>
        <h1 className="screen-title" style={{ margin: 0 }}>{t('repDone')}</h1>
        <div className="mono" style={{ fontSize: 14, fontWeight: 700, color: 'var(--brand)' }}>{s.extraReps[0]?.id ?? 'RP-232'}</div>
        <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--text-subtle)' }}>{t('repDoneSub')}</div>
      </div>
      <ol className="card stack" style={{ padding: '6px 14px', margin: 0, listStyle: 'none' }}>
        <li style={{ fontSize: 13, fontWeight: 700, padding: '8px 0' }}>{t('nextSteps')}</li>
        {steps.map((x, i) => (
          <li key={i} className="row" style={{ gap: 10, padding: '8px 0', fontSize: 13 }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', ...(i === 0 ? { background: 'var(--brand)', color: '#fff' } : { border: '2px solid rgba(0,0,0,.2)' }) }}>{i + 1}</span>
            {x}
          </li>
        ))}
      </ol>
      <div className="result-actions">
        <button type="button" className="btn btn-primary btn-block" onClick={() => tabTo('reports', { hist: ['profile'] })}>{t('viewReports')}</button>
        <button type="button" className="btn btn-secondary btn-block" onClick={() => tabTo('home')}>{t('done')}</button>
      </div>
    </div>
  );
}
