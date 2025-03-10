# Data Vista 🚀

Data Vista is a Next.js 13 project built with TypeScript and Tailwind CSS that fetches and displays data from multiple public APIs in a flexible, interactive, and responsive UI. It demonstrates advanced features like server‑side data fetching, filtering, sorting, paginated tables, reusable components, and error handling.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Running](#installation--running)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

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

## Project Structure 🗂️

Below is a simplified view of the folder layout:

data-vista/
├── public/
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── coingecko/
│   │   │   ├── error.tsx        // Cryptos page error boundary
│   │   │   └── page.tsx         // Cryptos page using filtering, sorting & pagination
│   │   ├── countries/
│   │   │   ├── error.tsx        // Countries page error boundary
│   │   │   └── page.tsx         // Countries page using filtering, sorting & pagination
│   │   ├── posts/
│   │   │   ├── error.tsx        // Posts page error boundary
│   │   │   └── page.tsx         // Posts page using filtering, sorting & pagination
│   │   ├── users/
│   │   │   ├── error.tsx        // Users page error boundary
│   │   │   └── page.tsx         // Users page using filtering, sorting & pagination
│   │   └── global-error.tsx     // (optional) Root error boundary
│   ├── components/
│   │   ├── error-component/
│   │   │   └── error-component.tsx  // Reusable error component
│   │   ├── filter-form/
│   │   │   └── filter-form.tsx      // Reusable filter form component
│   │   ├── navbar/
│   │   │   └── navbar.tsx           // Responsive navigation bar component
│   │   ├── only-table/
│   │   │   └── only-table.tsx       // Alternative table component
│   │   ├── paginated-table/
│   │   │   └── paginated-table.tsx  // Reusable table with pagination
│   │   ├── pagination/
│   │   │   └── pagination.tsx       // Pagination component
│   │   ├── search-bar/
│   │   │   └── search-bar.tsx       // Search bar component
│   │   └── truncated-text/
│   │       └── truncated-text.tsx   // (Optional) Truncated text component
│   ├── services/
│   │   ├── countries.service.ts     // Countries API service with caching and preprocessing
│   │   ├── gecko.service.ts         // Cryptocurrencies API service
│   │   ├── post.service.ts          // Posts API service
│   │   └── user.service.ts          // Users API service
│   ├── styles/
│   │   └── globals.css              // Global styles, Tailwind CSS and theme configuration
│   ├── types/
│   │   └── search-params.tsx        // Shared type for search parameters
│   └── utils/
│       └── filter-and-paginate.tsx  // Utility for filtering, sorting and pagination
├── -config-files

## Installation & Running ⚙️

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/data-vista.git
   cd data-vista


