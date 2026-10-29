import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { T, type StrKey } from '../data/strings';
import { listings } from '../data/mock';
import type { Bi, Lang, Listing, Payment, PropKind, Report, ReportType, TxKind } from '../data/types';

export type Screen =
  | 'lang' | 'phone' | 'otp'
  | 'home' | 'feed' | 'detail' | 'create' | 'created'
  | 'visit' | 'visitDone' | 'deals' | 'deal' | 'pay'
  | 'reports' | 'reportNew' | 'reportDone' | 'profile' | 'notifs';

export const TAB_SCREENS: Screen[] = ['home', 'feed', 'deals', 'pay', 'profile'];

export type DealTab = 'activity' | 'terms' | 'pay' | 'docs';
export type PayFilter = 'all' | 'due' | 'overdue' | 'paid' | 'disputed';
export type FeedFilter = 'all' | 'sale' | 'rent' | 'res' | 'com' | 'land';

export interface ListingForm {
  kind: PropKind;
  tx: TxKind;
  bhk: string;
  loc: string;
  price: string;
  size: string;
  desc: string;
  photos: number;
  amen: string[];
  collab: boolean;
  comm: string;
  split: string;
  phoneVis: 'onlyme' | 'approved';
  addrVis: 'onlyme' | 'approved';
  auth: boolean;
  mandate: boolean;
}

export interface PayForm {
  dir: 'in' | 'out';
  method: 'cash' | 'upi' | 'bank' | 'cheque';
  amount: string;
  ref: string;
  party: string;
  deal: string;
  receipt: boolean;
}

export interface VisitForm {
  lid: string;
  buyer: string;
  mobile: string;
  date: string;
  time: string;
  co: string;
  sms: boolean;
}

export interface AppState {
  lang: Lang;
  screen: Screen;
  hist: Screen[];
  sheet: null | 'share' | 'pay';
  phone: string;
  otp: string;
  err: string;
  lid: string;
  feedTab: 'network' | 'mine';
  filter: FeedFilter;
  q: string;
  dealTab: DealTab;
  tokenOk: boolean;
  payFilter: PayFilter;
  toast: string;
  step: 1 | 2 | 3;
  f: ListingForm;
  pf: PayForm;
  vf: VisitForm;
  rtype: ReportType;
  rrel: number;
  rtext: string;
  share: { price: boolean; soc: boolean; phone: boolean };
  extraPays: Payment[];
  extraReps: Report[];
  newL: Listing | null;
  asked: Record<string, boolean>;
  vDone: VisitForm | null;
}

const initialState = (lang: Lang): AppState => ({
  lang,
  screen: 'lang',
  hist: [],
  sheet: null,
  phone: '',
  otp: '',
  err: '',
  lid: '24817',
  feedTab: 'network',
  filter: 'all',
  q: '',
  dealTab: 'activity',
  tokenOk: false,
  payFilter: 'all',
  toast: '',
  step: 1,
  f: { kind: 'res', tx: 'sale', bhk: '3', loc: '', price: '', size: '', desc: '', photos: 2, amen: ['Lift', 'Parking'], collab: true, comm: '2', split: '50', phoneVis: 'approved', addrVis: 'onlyme', auth: false, mandate: false },
  pf: { dir: 'in', method: 'upi', amount: '', ref: '', party: 'ms', deal: 'D-1187', receipt: false },
  vf: { lid: '24817', buyer: '', mobile: '', date: '2026-10-30', time: '11:00', co: 'ms', sms: true },
  rtype: 'copy',
  rrel: 0,
  rtext: '',
  share: { price: true, soc: false, phone: true },
  extraPays: [],
  extraReps: [],
  newL: null,
  asked: {},
  vDone: null,
});

type Patch = Partial<AppState> | ((s: AppState) => Partial<AppState>);

export interface Store {
  s: AppState;
  set: (p: Patch) => void;
  /** Push a sub-screen onto the history stack. */
  go: (screen: Screen, extra?: Partial<AppState>) => void;
  /** Switch to a top-level screen, clearing history. */
  tabTo: (screen: Screen, extra?: Partial<AppState>) => void;
  back: () => void;
  toast: (msg: string) => void;
  setF: <K extends keyof ListingForm>(k: K, v: ListingForm[K]) => void;
  setPF: <K extends keyof PayForm>(k: K, v: PayForm[K]) => void;
  setVF: <K extends keyof VisitForm>(k: K, v: VisitForm[K]) => void;
  /** Translated UI string. */
  t: (k: StrKey) => string;
  /** Pick the current language from a bilingual value. */
  P: (x: Bi | string) => string;
  en: boolean;
  /** The new listing (if any) followed by the sample listings. */
  allListings: Listing[];
}

const Ctx = createContext<Store | null>(null);

export function StoreProvider({ defaultLang = 'gu', children }: { defaultLang?: Lang; children: ReactNode }) {
  const [s, setS] = useState<AppState>(() => initialState(defaultLang));
  const timer = useRef<number>();

  const set = useCallback((p: Patch) => setS(prev => ({ ...prev, ...(typeof p === 'function' ? p(prev) : p) })), []);

  useEffect(() => {
    document.documentElement.lang = s.lang;
  }, [s.lang]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const store = useMemo<Store>(() => {
    const en = s.lang === 'en';
    const idx = en ? 0 : 1;
    return {
      s,
      set,
      go: (screen, extra) => set(p => ({ hist: [...p.hist, p.screen], screen, sheet: null, err: '', ...extra })),
      tabTo: (screen, extra) => set({ screen, hist: [], sheet: null, err: '', ...extra }),
      back: () =>
        set(p => {
          const h = [...p.hist];
          const prev = h.pop() ?? 'home';
          return { screen: prev, hist: h, sheet: null, err: '' };
        }),
      toast: msg => {
        window.clearTimeout(timer.current);
        set({ toast: msg });
        timer.current = window.setTimeout(() => set({ toast: '' }), 2600);
      },
      setF: (k, v) => set(p => ({ f: { ...p.f, [k]: v }, err: '' })),
      setPF: (k, v) => set(p => ({ pf: { ...p.pf, [k]: v }, err: '' })),
      setVF: (k, v) => set(p => ({ vf: { ...p.vf, [k]: v }, err: '' })),
      t: k => T[k][idx],
      P: x => (typeof x === 'string' ? x : x[s.lang]),
      en,
      allListings: s.newL ? [s.newL, ...listings] : listings,
    };
  }, [s, set]);

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const v = useContext(Ctx);
  if (!v) throw new Error('useStore must be used inside StoreProvider');
  return v;
}
