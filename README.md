# Data Vista 🚀

Data Vista is a Next.js 13 project built with TypeScript and Tailwind CSS that fetches and displays data from multiple public APIs in a flexible, interactive, and responsive UI. It demonstrates advanced features like server‑side data fetching, filtering, sorting, paginated tables, reusable components, and error handling.

---

## Overview 🔍

Data Vista is designed to be a showcase of best practices in modern full‑stack development using Next.js with the App Router. It provides a set of pages that consume public APIs such as:
- **Users API** (from JSONPlaceholder)
- **Posts API** (from JSONPlaceholder)
- **Countries API** (from REST Countries)
- **CoinGecko API** (for cryptocurrency data)

Each page features:
- **Server‑side data fetching** with TypeScript for type safety.
- **Filtering, sorting, and pagination** logic encapsulated in a reusable utility.
- **Dynamic column selection** allowing the user to choose which data columns to display.
- **Responsive design** with Tailwind CSS.
- **Error handling** via error boundaries and a reusable error component.

---

## Features ✨

- **Modular & Reusable Components**
    - **`paginated-table`**: A generic component that accepts data of any type (`T`), column definitions, and search parameters.
    - **`filter-form`**: A reusable form to filter, sort, and customize table columns.
    - **`only-table`**: A simple table component that dynamically renders content based on column definitions (supports images with Next.js Image).
    - **`navbar`**: A responsive navigation bar component that highlights the active route.
    - **`error-component`**: A reusable error boundary UI.

- **Advanced Data Processing**
    - Server‑side filtering, sorting, and pagination using a shared utility function (`filter-and-paginate.ts`).
    - Data preprocessing to combine nested properties (e.g., native names, capital summaries, etc.) for easy display.

- **Robust Error Handling**
    - Graceful handling of API errors with optional retry logic.
    - Reusable error boundary (`error.tsx`) and global error (`global-error.tsx`).

- **Optimized for Performance**
    - Minimal client-side JavaScript by leveraging server components in Next.js 13.
    - TypeScript ensures compile-time safety and easier refactoring.

---


## Installation & Running ⚙️

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sebastianf777/data-vista
   cd data-vista
   ```

2. **Install dependencies:**

   ```bash
   npm install
   or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   or
   yarn dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   or
   yarn build
   ```

5. **Start the production server::**

   ```bash
   npm run start
   # or
   yarn build
   ```

## Usage 🛠️

**Navigation:**  
Use the responsive navigation bar to move between pages (Users, Posts, Countries, Cryptos).

**Filtering, Sorting, & Pagination:**  
Each page includes a filter form to set filters, choose sort options, select which columns to display, and determine how many items to show per page. The paginated table then displays data accordingly.

**Error Boundaries:**  
Each route implements error handling via `error.tsx` and a reusable `ErrorComponent` to provide friendly fallback UI.

## Error Handling 🚨

- **Expected Errors:**  
  Errors that can occur during normal operations (e.g., validation errors) are modeled as return values in server actions and managed in client components using hooks like `useActionState`.

- **Uncaught Exceptions:**  
  Unexpected errors in Server Components bubble up to the nearest error boundary (`error.tsx`), with a root-level error boundary available as `global-error.tsx`.

- **Reusable Error Component:**  
  The `ErrorComponent` is used across the application to provide a consistent error UI.

## Technologies 🛡️

- **Next.js 13** with the App Router
- **TypeScript** for type safety and maintainability
- **Tailwind CSS** for responsive styling
- **Sass** (optional) for advanced CSS if needed
- **ESLint & Prettier** for code quality and consistency

## Contributing 🤝

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request describing your changes.

For bug reports or feature suggestions, please open an issue on GitHub.

## License 📄

This project is licensed under the MIT License. You’re free to use, modify, and distribute the code as per the terms of the license.

## Live Demo 🌐

Experience Data Vista in action – [**View It Live**](https://data-vista-6gg5sq8y2-sebastians-projects-954f26cb.vercel.app/)