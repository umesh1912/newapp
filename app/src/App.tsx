import { useEffect, useRef, type ComponentType } from 'react';
import { Icon } from './components/Icon';
import type { IconName } from './components/glyphs';
import { useStore, TAB_SCREENS, type Screen } from './state/store';
import { LangScreen, OtpScreen, PhoneScreen } from './screens/Onboarding';
import { HomeScreen } from './screens/Home';
import { DetailScreen, FeedScreen } from './screens/Listings';
import { CreatedScreen, CreateScreen } from './screens/CreateListing';
import { VisitDoneScreen, VisitScreen } from './screens/Visit';
import { DealRoomScreen, DealsScreen } from './screens/Deals';
import { PaymentsScreen, PaySheet } from './screens/Payments';
import { NewReportScreen, ReportDoneScreen, ReportsScreen } from './screens/Reports';
import { NotificationsScreen, ProfileScreen } from './screens/Profile';
import { ShareSheet } from './screens/ShareSheet';
import type { StrKey } from './data/strings';

const SCREENS: Record<Screen, ComponentType> = {
  lang: LangScreen, phone: PhoneScreen, otp: OtpScreen,
  home: HomeScreen, feed: FeedScreen, detail: DetailScreen, create: CreateScreen, created: CreatedScreen,
  visit: VisitScreen, visitDone: VisitDoneScreen, deals: DealsScreen, deal: DealRoomScreen, pay: PaymentsScreen,
  reports: ReportsScreen, reportNew: NewReportScreen, reportDone: ReportDoneScreen, profile: ProfileScreen, notifs: NotificationsScreen,
};

const NAV: [Screen, IconName, StrKey][] = [
  ['home', 'Home', 'navHome'],
  ['feed', 'BuildingsOutline', 'navListings'],
  ['deals', 'Transactions', 'navDeals'],
  ['pay', 'WalletOutline', 'navPay'],
  ['profile', 'UserOutline', 'navMe'],
];

const TITLES: Partial<Record<Screen, StrKey>> = {
  home: 'app', feed: 'navListings', deals: 'dealsTitle', pay: 'navPay', profile: 'navMe',
  create: 'newListing', created: 'newListing', visit: 'visitTitle', visitDone: 'visitTitle',
  reports: 'repTitle', reportNew: 'newReport', reportDone: 'newReport', notifs: 'notifTitle',
};

export function App() {
  const { s, set, t, go, back, tabTo } = useStore();
  const mainRef = useRef<HTMLElement>(null);
  const isTab = TAB_SCREENS.includes(s.screen);
  const showHeader = s.screen !== 'lang';
  const Screen = SCREENS[s.screen];
  const title = s.screen === 'detail' ? 'DS-SUR-' + s.lid : s.screen === 'deal' ? 'D-1187' : TITLES[s.screen] ? t(TITLES[s.screen]!) : '';

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [s.screen, s.lid]);

  return (
    <div className="app">
      {showHeader && (
        <header className="topbar">
          {!isTab && (
            <button type="button" className="icon-btn" aria-label="Back" onClick={back}>
              <Icon name="ArrowLeft" size={20} />
            </button>
          )}
          <div className="topbar-title" style={{ paddingLeft: isTab ? 16 : 0 }}>{title}</div>
          <div className="lang-toggle" role="group" aria-label="Language">
            <button type="button" lang="gu" aria-pressed={s.lang === 'gu'} onClick={() => set({ lang: 'gu' })}>ગુ</button>
            <button type="button" lang="en" aria-pressed={s.lang === 'en'} onClick={() => set({ lang: 'en' })}>EN</button>
          </div>
          {isTab && (
            <button type="button" className="icon-btn" aria-label={t('notifTitle')} onClick={() => go('notifs')}>
              <Icon name="Notification" size={20} />
              <span className="bell-count">2</span>
            </button>
          )}
        </header>
      )}
      <main ref={mainRef} className={'main' + (showHeader ? '' : ' no-header')}>
        <Screen />
      </main>
      {isTab && (
        <nav className="bottom-nav">
          {NAV.map(([k, icon, label]) => (
            <button key={k} type="button" aria-current={s.screen === k ? 'page' : undefined} onClick={() => tabTo(k)}>
              <Icon name={icon} size={20} />
              <span>{t(label)}</span>
              {((k === 'deals' && !s.tokenOk) || k === 'pay') && <span className="nav-dot" />}
            </button>
          ))}
        </nav>
      )}
      {s.sheet === 'share' && <ShareSheet />}
      {s.sheet === 'pay' && <PaySheet />}
      {s.toast && (
        <div className="toast-wrap" role="status" aria-live="polite">
          <div className="toast"><Icon name="CheckCircle" size={16} />{s.toast}</div>
        </div>
      )}
    </div>
  );
}
