import type { ReactNode } from 'react';
import type { Tone } from '../data/types';
import { Icon } from './Icon';

export const TONES: Record<Tone, [bg: string, fg: string]> = {
  ok: ['var(--success-bg)', 'var(--success-fg)'],
  warn: ['var(--warn-bg)', 'var(--warn-fg)'],
  err: ['var(--error-bg)', 'var(--error-fg)'],
  info: ['var(--info-bg)', 'var(--info-fg)'],
  neutral: ['rgb(240,240,240)', 'var(--neutral-fg)'],
  brand: ['var(--brand-tint)', 'var(--brand)'],
};

export function Pill({ tone, children, small }: { tone: Tone; children: ReactNode; small?: boolean }) {
  const [bg, fg] = TONES[tone];
  return (
    <span className={'pill' + (small ? ' pill-sm' : '')} style={{ background: bg, color: fg }}>
      {children}
    </span>
  );
}

export function Avatar({ initials, size, fontSize }: { initials: string; size: number; fontSize: number }) {
  return (
    <span className="avatar" style={{ width: size, height: size, fontSize }}>
      {initials}
    </span>
  );
}

export interface Option<V> {
  value: V;
  label: ReactNode;
}

/** A row of mutually exclusive (or multi-select) toggle buttons. */
export function Choice<V extends string | number>({
  options,
  value,
  onPick,
  variant = 'chip',
  className,
  style,
}: {
  options: Option<V>[];
  value: V | V[];
  onPick: (v: V) => void;
  variant?: 'chip' | 'chip-filter' | 'seg';
  className?: string;
  style?: React.CSSProperties;
}) {
  const cls = variant === 'seg' ? 'seg' : variant === 'chip-filter' ? 'chip chip-filter' : 'chip';
  return (
    <>
      {options.map(o => {
        const on = Array.isArray(value) ? value.includes(o.value) : value === o.value;
        return (
          <button key={String(o.value)} type="button" className={cls + (className ? ' ' + className : '')} style={style} aria-pressed={on} onClick={() => onPick(o.value)}>
            {o.label}
          </button>
        );
      })}
    </>
  );
}

export function Switch({ on }: { on: boolean }) {
  return (
    <span className={'switch' + (on ? ' on' : '')}>
      <span />
    </span>
  );
}

export function Checkbox({ on }: { on: boolean }) {
  return <span className={'checkbox' + (on ? ' on' : '')}>{on && <Icon name="Check" size={14} />}</span>;
}

export function Radio({ on, size = 20 }: { on: boolean; size?: number }) {
  return <span className={'radio' + (on ? ' on' : '')} style={{ width: size, height: size }} />;
}

export function ErrorLine({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <div className="err-line" role="alert">
      <Icon name="WarningCircle" size={14} />
      {msg}
    </div>
  );
}

export function Sheet({ title, onClose, gap = 14, children }: { title: string; onClose: () => void; gap?: number; children: ReactNode }) {
  return (
    <div className="scrim" onClick={onClose}>
      <div className="sheet" role="dialog" aria-modal="true" aria-label={title} style={{ gap }} onClick={e => e.stopPropagation()}>
        <div className="sheet-grip">
          <span />
        </div>
        <div className="between">
          <div style={{ fontSize: 17, fontWeight: 700 }}>{title}</div>
          <button type="button" className="close-btn" aria-label="Close" onClick={onClose}>
            <Icon name="Close" size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
