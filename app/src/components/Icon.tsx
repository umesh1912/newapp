import type { CSSProperties } from 'react';
import { glyphs, type IconName } from './glyphs';

interface IconProps {
  name: IconName | '';
  size?: number;
  style?: CSSProperties;
}

/** Renders a glyph from the Ramsell/Kendo icon set. Glyphs paint with currentColor. */
export function Icon({ name, size = 16, style }: IconProps) {
  const d = name ? glyphs[name] : undefined;
  return (
    <span className="icon" style={style} aria-hidden="true">
      {d && <svg width={size} height={size} viewBox={d.viewBox} fill="none" dangerouslySetInnerHTML={{ __html: d.body }} />}
    </span>
  );
}
