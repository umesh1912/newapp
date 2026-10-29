export type Lang = 'en' | 'gu';

/** A bilingual value. */
export interface Bi {
  en: string;
  gu: string;
}

export type Tone = 'ok' | 'warn' | 'err' | 'info' | 'neutral' | 'brand';

export type AgentKey = 'rp' | 'ms' | 'hd' | 'jm' | 'kr';
export type PropKind = 'res' | 'com' | 'land';
export type TxKind = 'sale' | 'rent' | 'lease';
export type ListingStatus = 'avail' | 'neg' | 'hold' | 'review';

export interface Agent {
  n: Bi;
  i: string;
  v: boolean;
  id: string;
  ag: Bi;
  deals: number;
}

export interface Listing {
  id: string;
  kind: PropKind;
  tx: TxKind;
  title: Bi;
  soc: Bi;
  loc: Bi;
  price: Bi;
  size: Bi;
  extra: Bi;
  agent: AgentKey;
  photos: number;
  upd: Bi;
  st: ListingStatus;
  listed: string;
  comm: Bi;
  dup: boolean;
  auth: boolean;
}

export type ActivityTag = 'TOKEN' | 'reported' | 'confirmed' | 'otp' | 'ack' | 'logged';
export type PayCat = 'due' | 'overdue' | 'paid' | 'disputed';

export interface Payment {
  id: string;
  dir: 'in' | 'out';
  party: Bi;
  deal: Bi;
  amt: string;
  when: Bi;
  st: Bi;
  tone: Tone;
  cat: PayCat;
  remind?: boolean;
}

export interface Report {
  id: string;
  icon: import('../components/glyphs').IconName;
  title: Bi;
  desc: Bi;
  st: Bi;
  tone: Tone;
  date: string;
}

export type ReportType = 'copy' | 'bypass' | 'pay' | 'fake';
