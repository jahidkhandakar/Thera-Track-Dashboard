# Cheeky Charting — Admin Dashboard

Web admin panel for **Cheeky Charting**, the therapy practice-management product
(Flutter app + Express/MongoDB API). Administrators use it to review users and
subscriptions and to maintain the legal/support pages the mobile app links to.

> The repo is named `theratackk-dashboard` and the product is "Cheeky Charting".
> The mismatch is historical — the project began as "Thera-Track". Renaming the
> repo would break existing remotes and CI, so the name stays.

## Stack

| | |
|---|---|
| Framework | React 19 + **Vite** |
| State / data | Redux Toolkit + **RTK Query** |
| UI | **Ant Design**, Tailwind-style utility CSS, lucide-react / react-icons |
| Charts | Chart.js via react-chartjs-2 |
| Rich text | Jodit (`jodit-react`) — used for the legal documents |
| Routing | react-router-dom |
| Feedback | react-hot-toast |

## Getting started

```bash
npm install
cp .env.example .env      # then set VITE_API_URL
npm run dev               # Vite dev server
```

| Script | Purpose |
|---|---|
| `npm run dev` | dev server with HMR |
| `npm run build` | production build to `dist/` |
| `npm run preview` | serve the built output |
| `npm run lint` | ESLint |

## Configuration

The API base is assembled in `src/redux/api/apiSlice.js` as:

```js
baseUrl: `${import.meta.env.VITE_API_URL}/api/v1`
```

so `.env` needs:

```
VITE_API_URL=https://api.cheekycharting.com
```

⚠️ **Known issue:** `src/redux/api/baseUrl.js` hardcodes an old development host
instead of reading `VITE_API_URL`. Anything importing that module will talk to
the wrong server. Point it at the env var before deploying.

## Layout

```
src/
  auth/        sign-in and account screens
  dashboard/   home + menu — the main admin surface
  home/        landing / overview
  layout/      shell, navigation
  settings/    EULADocument, PrivacyPolicyy, Support, TermsCondition
               (rendered with Jodit; these back the app's legal links)
  redux/       store + RTK Query api slices
  router/      route definitions
```

## Related repositories

| Repo | Role |
|---|---|
| `Thera-Track-App` | Flutter mobile app (iOS + Android) |
| `Thera-Track-Backend` | Express + TypeScript + MongoDB API |
| **this repo** | React admin dashboard |

All three talk to the same API: `https://api.cheekycharting.com/api/v1`.

## Security note

If you are picking this project up, scan before you build. This repository
previously carried an obfuscated payload appended to the end of
`postcss.config.js`, padded with spaces so it sat off-screen in an editor.

A clean `postcss.config.js` is **~87 bytes**. If it is larger than a few hundred
bytes, treat it as compromised. To check the whole repo:

```bash
git ls-tree -r HEAD --name-only | while read f; do
  git show "HEAD:$f" | awk -v F="$f" 'length($0)>2000 {print "SUSPECT: " F; exit}'
done
```

Also check `.gitignore` for entries named `temp_auto_push.bat`,
`temp_interactive_push.bat` or `branch_structure.json` — those are not project
files and indicate the payload has been present.
