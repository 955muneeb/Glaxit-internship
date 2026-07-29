# Week 5 – React Fundamentals (single app)

## Run it
```bash
npm install
npm run dev
```
Then open the printed localhost URL. Requires internet on Day 3 (fetches from jsonplaceholder.typicode.com).

## Where each day lives

**Day 1 — Component Architecture & JSX**
- `src/components/layout/Header.jsx`, `Hero.jsx`, `Footer.jsx` — static components, receive string props
- `src/pages/Home.jsx` — assembles them into the landing layout
- `src/App.jsx` — renders Header/Footer around every page

**Day 2 — State & Event Handling**
- `src/components/accordion/faqData.js` — array of question/answer objects
- `src/components/accordion/FAQAccordion.jsx` — `useState` stores the *id* of the open item only, so opening one closes any other; `onClick` toggles it

**Day 3 — Lifecycle & useEffect**
- `src/components/posts/PostsList.jsx` — fetches mock posts inside `useEffect` with an empty `[]` dependency array (runs once on mount), tracks `loading`/`error`/`posts` state
- `src/components/posts/Spinner.jsx` — shown while `loading` is true

**Day 4 — Routing & Navigation**
- `src/main.jsx` — wraps the app in `<BrowserRouter>`
- `src/App.jsx` — `<Routes>`/`<Route>` map paths to pages, catch-all `*` route to `NotFound`
- `src/components/layout/Header.jsx` — `<NavLink>` for nav with active-link styling
- `src/pages/About.jsx`, `src/pages/NotFound.jsx`

**Day 5 — Dynamic Routing & URL Params**
- `src/data/products.js` — static product list
- `src/pages/Products.jsx` — grid of items, each a `<Link>` to `/products/:id`
- `src/pages/ProductDetail.jsx` — `useParams()` reads `:id` from the URL and looks up the matching product

## Extending later
Add Redux/Context, tests, or a real API in Week 6+ without restructuring — each day's logic is already isolated in its own file/folder.
