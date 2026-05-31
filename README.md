# Modern E-Commerce Application

A scalable, production-ready e-commerce platform built with Next.js 15+ App Router, TypeScript, Tailwind CSS, Shadcn UI, and TanStack Query.

## Project Overview
This application serves as a modern e-commerce storefront, featuring a dynamic landing page and a robust search/filter products page. It interacts with the DummyJSON API to fetch real-time product data, categories, and search results.

## Features
- **Landing Page**: Hero section, dynamic categories, featured products, and new arrivals.
- **Search & Filters**: Debounced search (300ms), category filtering, and price sorting.
- **URL-Based State**: Filters and pagination are synced with URL search parameters for persistence across refreshes and shareability.
- **Responsive Design**: Mobile-first architecture using Tailwind CSS, scaling perfectly to tablet and desktop (1 to 4 columns).
- **State Management**: TanStack React Query for efficient data fetching, caching, and loading/error states.
- **UI Components**: Accessible, premium components using Shadcn UI and Radix UI primitives.

## Architecture Decisions
1. **Next.js App Router**: Chosen for modern routing capabilities, layouts, and built-in SEO optimizations.
2. **TanStack Query (React Query)**: Selected over traditional `useEffect` for robust server-state management, automatic caching, retry logic, and seamless loading/error handling.
3. **Tailwind CSS + Shadcn UI**: Provides a highly customizable, utility-first styling approach without the bloat of traditional component libraries. The `zinc` theme was used for a premium, modern feel.
4. **Service Layer Pattern**: All API calls are abstracted into `src/services/api.ts` using Axios. This decouples data fetching logic from UI components, improving maintainability.
5. **Strict TypeScript**: Enforced to eliminate runtime errors and improve developer experience. No `any` types are used; full interfaces are defined in `src/types`.

## SEO Decisions
- Utilized Next.js `Metadata` API in `layout.tsx` and `page.tsx` for dynamic SEO generation.
- Added OpenGraph and Twitter card metadata for improved social sharing.
- Implemented descriptive `<title>` and `<meta name="description">` tags for all pages.
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<nav>`) are used throughout to improve web crawler parsing.

## Accessibility Decisions
- **Semantic HTML**: Ensures screen readers can accurately interpret the page structure.
- **ARIA Attributes**: Applied to interactive elements where necessary.
- **Keyboard Navigation**: Fully supported through Shadcn UI's Radix primitives.
- **Focus States**: Clear visual indicators for focused elements to assist users navigating via keyboard.

## Performance Optimizations
- **Next/Image**: Used for all product and banner images to ensure automatic WebP conversion, lazy loading, and responsive sizing.
- **Server Components**: Leveraged by default in Next.js 15 to reduce JavaScript bundle size sent to the client.
- **Client Components**: Isolated to interactive islands (e.g., `<SearchBar>`, `<FilterSidebar>`) using the `"use client"` directive.
- **Debouncing**: A 300ms debounce on the search input prevents excessive API calls.
- **Query Caching**: TanStack Query caches API responses (stale time: 1 min) to eliminate redundant network requests.

## Setup Instructions
1. Clone the repository or navigate to the project directory.
2. Run `npm install` to install dependencies.
3. Start the development server using `npm run dev`.
4. Open `http://localhost:3000` in your browser.

## Deployment Instructions
This application is optimized for deployment on Vercel.
1. Push the code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to Vercel and click **Add New** > **Project**.
3. Import your repository.
4. Leave the default build settings (`npm run build` and `npm run start`).
5. Click **Deploy**. Vercel will automatically build and deploy your application.
