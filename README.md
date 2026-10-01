# Alex Lilja – portfolio

Portfolio website for artwork. React + TypeScript + Vite, with a Three.js (react-three-fiber) torus in the background.

## Getting started

Requires Node 20.19+ or 22.12+.

```sh
npm ci          # install dependencies
npm run dev     # start dev server at http://localhost:5173
```

Other scripts:

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run build`   | Type-check and build the site into `dist/`     |
| `npm run preview` | Serve the built `dist/` locally                |
| `npm run lint`    | Run ESLint                                     |

## Project structure

```
src/
  components/Header/   Name + "works" navigation
  pages/Home/          Bio, email and exhibitions (CV)
  pages/Works/         Works page (placeholder for now)
  lib/threejs/         Spinning torus background
  lib/appwrite/        Appwrite client and collection types
  services/            Database service (Appwrite, currently commented out)
  types/               Shared content types
  utils/               Constants and helpers
public/                Copied as-is into the build (e.g. Netlify _redirects)
```

## Content

Content is currently static and lives next to each page:

- `src/pages/Home/staticData.ts` – bio, email and exhibitions
- `src/pages/Works/staticData.ts` – works page text

Each page loads its static data in an `init()` function, with the matching Appwrite calls left commented out beside it.

## Appwrite (not connected yet)

To switch from static data to Appwrite:

1. Update the `appwrite` SDK (the API has changed since the version currently installed).
2. Create a `.env` file in the project root:

   ```sh
   VITE_APPWRITE_ENDPOINT=
   VITE_APPWRITE_PROJECT_ID=
   VITE_APPWRITE_DATABASE_ID=
   VITE_APPWRITE_COLLECTION_ID_INFORMATION=
   VITE_APPWRITE_COLLECTION_ID_EXHIBITIONS=
   VITE_APPWRITE_COLLECTION_ID_WORKS_INFORMATION=
   ```

   Add the same variables in Netlify under *Site configuration → Environment variables*.
3. Uncomment `src/services/DatabaseService.ts` and the `db` calls in `Home.tsx` and `Works.tsx`.

## Deployment

Hosted on Netlify. `netlify.toml` tells Netlify to run `npm run build` and publish `dist/` on every push, so `dist/` is not committed.
`public/_redirects` sends every path to `index.html`, so routes like `/works` work on reload.
