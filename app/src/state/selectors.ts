import { agents, statuses, txLabels } from '../data/mock';
import type { Listing } from '../data/types';
import type { AppState, Store } from './store';

export const ME = 'rp';
export const ORIGINAL_ID = '24817';
export const COPY_ID = '24822';
export const NEW_ID = '24851';

export const fmtINR = (n: string | number) => (n ? '₹' + Number(n).toLocaleString('en-IN') : '');

/** Listing joined with its agent and status, ready to render. */
export function viewListing(l: Listing) {
  const a = agents[l.agent];
  const st = statuses[l.st];
  return {
    ...l,
    agentName: a.n,
    agentInit: a.i,
    agentId: a.id,
    agency: a.ag,
    agentDeals: a.deals,
    verified: a.v,
    mine: l.agent === ME,
    txLabel: txLabels[l.tx],
    stLabel: st.l,
    stTone: st.tone,
  };
}
export type ListingView = ReturnType<typeof viewListing>;

export function currentListing(store: Store): Listing {
  const all = store.allListings;
  return all.find(l => l.id === store.s.lid) ?? all.find(l => l.id === ORIGINAL_ID)!;
}

/** Index of the current stage of deal D-1187 (Token until confirmed, then Agreement). */
export const dealStage = (s: AppState) => (s.tokenOk ? 4 : 3);

export const dealValue = (en: boolean) => (en ? '₹1.10 Cr' : '₹1.10 કરોડ');
