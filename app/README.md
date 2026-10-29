# DalalSetu — Agent app

Mobile-first React + TypeScript (Vite) implementation of the Claude Design prototype
`project/DalalSetu Agent App.dc.html`. Gujarati is the default language, and the ગુ / EN toggle in the top bar switches the language at any time.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

## Structure

- `src/state/store.tsx`: app state, in-memory navigation stack (`go` / `tabTo` / `back`), toast, and the `t()` / `P()` language helpers.
- `src/state/selectors.ts`: listing view model, INR formatting, and deal-stage helpers.
- `src/data/strings.ts`: all UI strings as `[English, Gujarati]` pairs.
- `src/data/mock.ts`: Surat sample data (agents, listings, deal D-1187, payments, reports). There is no backend; everything runs on this data and resets on reload.
- `src/screens/`: one file per flow (onboarding, home, listings + detail, share sheet, create listing, visit, deals + deal room, payments + record sheet, reports, profile + notifications).
- `src/components/`: `Icon` (a subset of the Ramsell/Kendo glyph set in `glyphs.ts`) and shared controls (chips, segments, switch, checkbox, sheet, pill).
- `src/styles.css`: Ramsell design tokens (deep red `rgb(121,0,9)`, Inter + Noto Sans Gujarati) and component classes.

To add an icon, copy its entry from `project/glyphs.js` into `src/components/glyphs.ts`.

## Not built yet

OTP/SMS, file uploads, the WhatsApp share intent, PDF export and persistence are placeholders. They show a toast or accept any input, exactly as in the prototype.
The Gujarati copy was machine-written in the design phase, so a native speaker should review it.

## Android APK

The app is wrapped for Android with [Capacitor](https://capacitorjs.com) (`capacitor.config.ts`, `android/`).
Every push to `main` runs `.github/workflows/android-apk.yml`, which builds a debug APK and attaches it to the
**latest** GitHub release (also downloadable from the workflow run's artifacts).

To build locally (needs Android Studio / Android SDK and JDK 17):

```sh
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug   # → android/app/build/outputs/apk/debug/app-debug.apk
```
