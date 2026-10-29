import icons from './glyphs.js';
class DsIcon extends HTMLElement {
  static get observedAttributes() { return ['name', 'size']; }
  connectedCallback() { this.r(); }
  attributeChangedCallback() { this.r(); }
  r() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    const d = icons[this.getAttribute('name')];
    const s = this.getAttribute('size') || 16;
    this.shadowRoot.innerHTML = `<style>:host{display:inline-flex;flex:none;line-height:0}</style>` + (d ? `<svg width="${s}" height="${s}" viewBox="${d.viewBox}" fill="none">${d.body}</svg>` : '');
  }
}
if (!customElements.get('ds-icon')) customElements.define('ds-icon', DsIcon);
