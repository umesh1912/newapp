import { Icon } from '../components/Icon';
import { ErrorLine, Radio } from '../components/ui';
import { useStore } from '../state/store';
import type { Lang } from '../data/types';

const LANGS: [Lang, string, string, string][] = [
  ['gu', 'ગુ', 'ગુજરાતી', 'Gujarati'],
  ['en', 'En', 'English', 'અંગ્રેજી'],
];

export function LangScreen() {
  const { s, set, t, go } = useStore();
  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', padding: '40px 24px 28px', background: '#fff', gap: 32 }}>
      <div className="stack" style={{ gap: 12, alignItems: 'flex-start' }}>
        <div className="icon-tile" style={{ width: 56, height: 56, borderRadius: 6, background: 'var(--brand)', color: '#fff' }}>
          <Icon name="BuildingsSolid" size={28} />
        </div>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: 'var(--brand)', lineHeight: 1.25 }}>{t('app')}</h1>
        <div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-subtle)', textWrap: 'pretty' } as React.CSSProperties}>{t('tagline')}</div>
      </div>
      <div className="stack" style={{ gap: 12 }} role="radiogroup" aria-label={t('chooseLang')}>
        <div style={{ fontSize: 17, fontWeight: 700 }}>{t('chooseLang')}</div>
        {LANGS.map(([v, glyph, name, sub]) => {
          const on = s.lang === v;
          return (
            <button
              key={v}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => set({ lang: v })}
              className="tap"
              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 6, border: `1px solid ${on ? 'var(--brand)' : 'rgba(0,0,0,.12)'}`, background: on ? 'var(--brand-tint)' : '#fff' }}
            >
              <div className="icon-tile" style={{ width: 44, height: 44, background: '#fff', border: '1px solid var(--border)', fontSize: 18, fontWeight: 700, color: 'var(--brand)' }}>{glyph}</div>
              <div className="stack" style={{ flex: 1, gap: 2 }}>
                <span style={{ fontSize: 17, fontWeight: 600 }}>{name}</span>
                <span style={{ fontSize: 13, color: 'var(--text-subtle)' }}>{sub}</span>
              </div>
              <Radio on={on} />
            </button>
          );
        })}
        <div style={{ fontSize: 13, color: 'var(--text-subtle)' }}>{t('langSub')}</div>
      </div>
      <button type="button" className="btn btn-primary btn-block" style={{ marginTop: 'auto' }} onClick={() => go('phone')}>
        {t('continue')}
      </button>
    </div>
  );
}

export function PhoneScreen() {
  const { s, set, t, go } = useStore();
  const sendOtp = () => (s.phone.length === 10 ? go('otp', { otp: '' }) : set({ err: t('phoneErr') }));
  return (
    <form className="stack" style={{ minHeight: '100%', padding: 24, gap: 20, background: '#fff' }} onSubmit={e => { e.preventDefault(); sendOtp(); }}>
      <div className="stack" style={{ gap: 8 }}>
        <h1 className="screen-title" style={{ margin: 0 }}>{t('enterMobile')}</h1>
        <div className="lead">{t('mobileSub')}</div>
      </div>
      <label className="field">
        <span className="label">{t('mobileLabel')}</span>
        <div className="row" style={{ gap: 8 }}>
          <div className="prefix">+91</div>
          <input
            className="input"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            value={s.phone}
            onChange={e => set({ phone: e.target.value.replace(/\D/g, '').slice(0, 10), err: '' })}
            placeholder="98250 41042"
            style={{ flex: 1, letterSpacing: '.04em' }}
          />
        </div>
      </label>
      <ErrorLine msg={s.err} />
      <button type="submit" className="btn btn-primary btn-block">{t('sendOtp')}</button>
      <div style={{ fontSize: 12, color: 'var(--text-subtle)', lineHeight: 1.5 }}>{t('terms')}</div>
    </form>
  );
}

export function OtpScreen() {
  const { s, set, t, tabTo, toast } = useStore();
  const verify = () => {
    if (s.otp.length !== 6) return set({ err: t('otpErr') });
    tabTo('home');
    toast(t('welcome'));
  };
  return (
    <form className="stack" style={{ minHeight: '100%', padding: 24, gap: 20, background: '#fff' }} onSubmit={e => { e.preventDefault(); verify(); }}>
      <div className="stack" style={{ gap: 8 }}>
        <h1 className="screen-title" style={{ margin: 0 }}>{t('enterOtp')}</h1>
        <div className="lead">{t('otpSentTo')}{s.phone.replace(/(\d{5})(\d+)/, '$1 $2')}</div>
      </div>
      <label style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 8, cursor: 'text' }}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} style={{ height: 52, border: `1px solid ${i === s.otp.length ? 'var(--brand)' : 'var(--border-strong)'}`, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 600, background: '#fff' }}>
            {s.otp[i] ?? ''}
          </div>
        ))}
        <input
          inputMode="numeric"
          autoComplete="one-time-code"
          autoFocus
          value={s.otp}
          onChange={e => set({ otp: e.target.value.replace(/\D/g, '').slice(0, 6), err: '' })}
          aria-label="OTP"
          style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', height: '100%', border: 'none' }}
        />
      </label>
      <div className="between" style={{ fontSize: 13, color: 'var(--text-subtle)' }}>
        <span>{t('resend')}</span>
        <span>{t('otpHint')}</span>
      </div>
      <ErrorLine msg={s.err} />
      <button type="submit" className="btn btn-primary btn-block">{t('verify')}</button>
    </form>
  );
}
