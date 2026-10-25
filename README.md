# Lab 4: React — HTTP & Hooks Data Representation and Querying

A React application for Lab 4, demonstrating how to fetch and display movie data with Axios and React hooks, and how to manage a movie form with component state.

## Run the app

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local address printed by Vite. Run `npm run build` to verify the production build and `npm run lint` to lint the application source.

## Lab 4 features

- **Fetch movie data:** `src/pages/Read.jsx` uses `useEffect`, `useState`, and Axios to retrieve movie data from the course API.
- **Display movies:** `src/components/Movies.jsx` passes movie data to reusable `MovieItem` components, which render the entries in Bootstrap cards.
- **Manage movie form state:** `src/pages/Create.jsx` uses React state to manage the movie title, release year, and poster URL. Submitting the form logs the values to the browser console; it does not save them to a server.

