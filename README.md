# URL Shortener Frontend

A modern and responsive frontend for a URL shortening application built with React, Vite, Redux Toolkit, TanStack Router, TanStack Query, and Tailwind CSS.

This project provides a polished user experience for registering, logging in, creating shortened links, and managing them from a dedicated dashboard.

## Features

- User authentication with login and registration flows
- Protected dashboard access for authenticated users
- Create and manage shortened URLs
- View link details and manage existing entries
- Clean, responsive UI built with Tailwind CSS
- API integration with a backend service using Axios

## Tech Stack

- React 19
- Vite 7
- Redux Toolkit
- TanStack Router
- TanStack Query
- Axios
- Tailwind CSS
- ESLint

## Project Structure

```bash
src/
  api/           # API service functions
  components/    # Reusable UI components
  pages/         # Page-level views
  routing/       # Route definitions
  store/         # Redux store and slices
  utils/         # Shared utilities and helpers
```

## Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm 9+

## Installation

```bash
git clone <repository-url>
cd URL-Shortner-frontend
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal in your browser.

## Available Scripts

```bash
npm run dev     # Start the development server
npm run build   # Build the project for production
npm run preview # Preview the production build locally
npm run lint    # Run ESLint checks
```

## API Configuration

The frontend communicates with the backend through Axios. The base URL is configured in the Axios instance under the utilities folder. If your backend endpoint changes, update the configuration there.

## Notes

This frontend is designed to work with a URL shortener backend that supports authentication and URL management endpoints.
