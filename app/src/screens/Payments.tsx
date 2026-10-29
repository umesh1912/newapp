import { Icon } from '../components/Icon';
import { Choice, ErrorLine, Pill, Sheet } from '../components/ui';
import { agents, payments } from '../data/mock';
import type { Bi, Payment } from '../data/types';
import { fmtINR } from '../state/selectors';
import { useStore, type PayFilter, type PayForm } from '../state/store';

const g = (en: string, gu: string): Bi => ({ en, gu });

export function PaymentsScreen() {
  const { s, set, t, toast } = useStore();
  const all = [...s.extraPays, ...payments];
  const list = all.filter(p => s.payFilter === 'all' || p.cat === s.payFilter);
  const filters: { value: PayFilter; label: string }[] = [
    { value: 'all', label: t('fAll') }, { value: 'due', label: t('pDue') }, { value: 'overdue', label: t('overdue') },
    { value: 'paid', label: t('pPaid') }, { value: 'disputed', label: t('pDisputed') },
  ];
  const summary = (label: string, value: string, danger?: boolean) => (
    <div className="stack" style={{ background: danger ? 'var(--error-bg)' : '#fff', border: `1px solid ${danger ? 'rgba(176,18,0,.2)' : 'var(--border)'}`, borderRadius: 6, padding: '10px 12px', gap: 4, minWidth: 0 }}>
      <span style={{ fontSize: 11, color: danger ? 'var(--error-fg)' : 'var(--text-subtle)' }}>{label}</span>
      <span style={{ fontSize: 16, fontWeight: 600, fontFamily: 'var(--numeral)', color: danger ? 'var(--error-fg)' : undefined }}>{value}</span>
    </div>
  );

  return (
    <div className="stack" style={{ padding: 16, gap: 14 }}>
      <div className="grid3">
        {summary(t('toReceive'), '₹2,30,000')}
        {summary(t('toPay'), '₹1,10,000')}
        {summary(t('overdue'), '₹1,20,000', true)}
      </div>
      <button type="button" className="btn btn-md btn-primary" onClick={() => set({ sheet: 'pay', err: '' })}><Icon name="Plus" size={14} />{t('recordPay')}</button>
      <div className="hscroll"><Choice variant="chip-filter" options={filters} value={s.payFilter} onPick={v => set({ payFilter: v })} /></div>
      {list.map(p => <PaymentCard key={p.id} p={p} onRemind={() => toast(t('remindToast'))} />)}
      {list.length === 0 && <div style={{ padding: 24, textAlign: 'center', fontSize: 14, color: 'var(--text-subtle)' }}>—</div>}
      <div className="row" style={{ gap: 8, alignItems: 'flex-start', fontSize: 12, lineHeight: 1.5, color: 'var(--text-subtle)' }}>
        <Icon name="Information" size={14} style={{ marginTop: 2 }} /><span>{t('ledgerNote')}</span>
      </div>
      <button type="button" className="btn btn-md btn-secondary" onClick={() => toast(t('downloadedToast'))}><Icon name="Download" size={16} />{t('download')}</button>
    </div>
  );

}

function PaymentCard({ p, onRemind }: { p: Payment; onRemind: () => void }) {
  const { t, P } = useStore();
  const inbound = p.dir === 'in';
  return (
    <div className="card card-elev stack" style={{ padding: '12px 14px', gap: 8 }}>
      <div className="row" style={{ gap: 10 }}>
        <span className="icon-tile" style={{ width: 36, height: 36, borderRadius: '50%', background: inbound ? 'var(--success-bg)' : 'rgb(240,240,240)', color: inbound ? 'var(--success-fg)' : 'var(--neutral-fg)' }}>
          <Icon name={inbound ? 'ArrowDownLeft' : 'Arrow45UpRight'} size={16} />
        </span>
        <span className="stack" style={{ flex: 1, minWidth: 0, gap: 2 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{P(inbound ? g('From', 'તરફથી') : g('To', 'ને'))}: {P(p.party)}</span>
          <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{P(p.deal)}</span>
        </span>
        <span style={{ fontSize: 16, fontWeight: 700 }}>{p.amt}</span>
      </div>
      <div className="between">
        <span style={{ fontSize: 12, color: 'var(--text-subtle)', lineHeight: 1.4 }}>{P(p.when)}</span>
        <Pill tone={p.tone}>{P(p.st)}</Pill>
      </div>
      {p.remind && (
        <button type="button" className="btn btn-sm btn-brand-outline" onClick={onRemind}><Icon name="Whatsapp" size={16} />{t('remind')}</button>
      )}
    </div>
  );
}

/** Bottom sheet for recording an offline payment. */
export function PaySheet() {
  const { s, set, setPF, t, P, en, toast } = useStore();
  const pf = s.pf;
  const parties: [string, string][] = [
    ['ms', P(agents.ms.n)],
    ['sm', en ? 'Sunil Mehta (owner)' : 'સુનીલ મહેતા (માલિક)'],
    ['hd', P(agents.hd.n)],
    ['jm', P(agents.jm.n)],
  ];
  const methods: { value: PayForm['method']; label: string }[] = [
    { value: 'cash', label: t('cash') }, { value: 'upi', label: 'UPI' }, { value: 'bank', label: t('bank') }, { value: 'cheque', label: t('cheque') },
  ];

  const save = () => {
    if (!pf.amount) return set({ err: t('payErr') });
    const party = parties.find(x => x[0] === pf.party)![1];
    const ml = { cash: g('Cash', 'રોકડ'), upi: g('UPI', 'UPI'), bank: g('Bank', 'બેંક'), cheque: g('Cheque', 'ચેક') }[pf.method];
    const ref = pf.ref ? ' · ' + pf.ref : '';
    const np: Payment = {
      id: 'P-33' + (20 + s.extraPays.length), dir: pf.dir, party: g(party, party), deal: g(pf.deal, pf.deal), amt: fmtINR(pf.amount),
      when: g('Today · ' + ml.en + ref, 'આજે · ' + ml.gu + ref), st: g('Reported · awaiting confirmation', 'નોંધાયેલ · પુષ્ટિની રાહ'), tone: 'warn', cat: 'due',
    };
    set(p => ({ extraPays: [np, ...p.extraPays], sheet: null, payFilter: 'all', pf: { ...p.pf, amount: '', ref: '', receipt: false } }));
    toast(t('paySaved'));
  };

  return (
    <Sheet title={t('recordPay')} onClose={() => set({ sheet: null, err: '' })} gap={16}>
      <div className="grid2"><Choice variant="seg" style={{ fontSize: 14 }} value={pf.dir} onPick={v => setPF('dir', v)} options={[{ value: 'in', label: t('received') }, { value: 'out', label: t('paid') }]} /></div>
      <div className="stack" style={{ gap: 8 }}>
        <span className="label">{t('party')}</span>
        <div className="wrap"><Choice value={pf.party} onPick={v => setPF('party', v)} options={parties.map(([value, label]) => ({ value, label }))} /></div>
      </div>
      <div className="stack" style={{ gap: 8 }}>
        <span className="label">{t('deal')}</span>
        <div className="wrap"><Choice className="mono" value={pf.deal} onPick={v => setPF('deal', v)} options={['D-1187', 'D-1162', 'D-1140', 'D-1121'].map(x => ({ value: x, label: x }))} /></div>
      </div>
      <label className="field">
        <span className="label">{t('amount')}</span>
        <input className="input" inputMode="numeric" value={pf.amount} onChange={e => setPF('amount', e.target.value.replace(/\D/g, '').slice(0, 9))} placeholder="110000" />
        <span style={{ fontSize: 12, color: 'var(--text-subtle)' }}>{fmtINR(pf.amount)}</span>
      </label>
      <div className="stack" style={{ gap: 8 }}>
        <span className="label">{t('method')}</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}><Choice variant="seg" style={{ height: 40 }} value={pf.method} onPick={v => setPF('method', v)} options={methods} /></div>
      </div>
      <label className="field">
        <span className="label">{t('refNo')}</span>
        <input className="input" value={pf.ref} onChange={e => setPF('ref', e.target.value)} placeholder="4471 0938 2215" />
      </label>
      <button type="button" className="btn btn-dashed" style={{ fontSize: 14 }} onClick={() => setPF('receipt', true)}>
        <Icon name={pf.receipt ? 'CheckCircle' : 'PhotoCamera'} size={16} />{pf.receipt ? t('receiptAdded') : t('receipt')}
      </button>
      <div className="note note-info"><Icon name="Information" size={14} /><span>{t('payNote')}</span></div>
      <ErrorLine msg={s.err} />
      <button type="button" className="btn btn-primary btn-block" onClick={save}>{t('savePay')}</button>
    </Sheet>
  );
}
