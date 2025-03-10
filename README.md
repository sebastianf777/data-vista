Data Vista 🚀
Data Vista is a Next.js 13 project built with TypeScript and Tailwind CSS that fetches and displays data from multiple public APIs in a flexible, interactive, and responsive UI. It demonstrates advanced features like server‑side data fetching, filtering, sorting, paginated tables, reusable components, and error handling.

Table of Contents
Overview
Features
Project Structure
Installation & Running
Usage
Error Handling
Technologies
Contributing
License
Overview 🔍
Data Vista is designed to be a showcase of best practices in modern full‑stack development using Next.js with the App Router. It provides a set of pages that consume public APIs such as:

Users API (from JSONPlaceholder)
Posts API (from JSONPlaceholder)
Countries API (from REST Countries)
Cryptocurrencies API (from CoinGecko)
Each page features:

Server‑side data fetching with TypeScript for type safety.
Filtering, sorting, and pagination logic encapsulated in a reusable utility.
Dynamic column selection allowing the user to choose which data columns to display.
Responsive design with Tailwind CSS.
Error handling via error boundaries and a reusable error component.
Features ✨
Modular & Reusable Components:

PaginatedTable: A generic component that accepts data of any type (T), column definitions, and search parameters.
FilterForm: A reusable form to filter, sort, and customize table columns.
OnlyTable: A table component that dynamically renders content based on column definitions (supports images with Next.js Image).
NavBar: A responsive navigation bar that highlights the active route.
Advanced Data Processing:

Server‑side filtering, sorting, and pagination using a shared utility function (filterAndPaginate).
Data preprocessing to combine nested properties (e.g. native names, capital summaries, etc.) for easy display.
Robust Error Handling:

Graceful handling of API errors with retries and caching strategies.
Reusable error component (ErrorComponent) for consistent error displays.
Optimized for Performance:

Incremental Static Regeneration (ISR) for caching dynamic data.
Minimal client-side JavaScript by leveraging server components.
Project Structure 🗂️
csharp

Installation & Running ⚙️
Clone the repository:

bash
Copy
git clone https://github.com/yourusername/data-vista.git
cd data-vista
Install dependencies:

bash
Copy
npm install
# or
yarn install
Run the development server:

bash
Copy
npm run dev
# or
yarn dev
Build for production:

bash
Copy
npm run build
# or
yarn build
Usage 🛠️
Navigation:
Use the responsive NavBar at the top to navigate between the different API pages.

Filtering & Sorting:
On each page, use the FilterForm to set filters, select columns, choose sort options, and define how many items are displayed per page. The table will update based on your query parameters.

Pagination:
Navigate between pages using the pagination component, which shows a dynamic range of page numbers with ellipses if needed.

Error Handling 🚨
Expected Errors:
Expected errors (e.g. validation errors in server actions) are modeled as return values in our server actions and managed using useActionState in client components.

Uncaught Exceptions:
Uncaught exceptions in Server Components bubble up to Error Boundaries (error.tsx in route segments or global-error.tsx at the root). Our reusable ErrorComponent displays a friendly error message and a button to reset the state.

Technologies 🛡️
Next.js 13 (App Router)
TypeScript for strong typing and maintainability
Tailwind CSS for rapid styling and responsive design
Sass/SCSS for global theming (with custom properties)
Modern Fetch API & Server Actions for data handling
Contributing 🤝
Contributions are welcome! Please open an issue or submit a pull request on GitHub if you have suggestions or improvements.

License 📄
This project is licensed under the MIT License.