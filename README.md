# Rent Car - Management Dashboard

This is a comprehensive car rental management application built with Next.js. It provides a user-friendly dashboard to manage cars and orders efficiently.

## Features

- **Dashboard Overview:** A central hub to view key metrics and navigate through the application.
- **Car Management:** Perform full CRUD (Create, Read, Update, Delete) operations for cars in the rental fleet.
- **Order Management:** Track and manage customer rental orders.
- **Filtering and Sorting:** Easily search, filter, and sort cars and orders.
- **Responsive Design:** The application is fully responsive and works on all screen sizes, from mobile to desktop.
- **Modal-based Forms:** A seamless user experience for creating and editing entries without leaving the page.

## Tech Stack

This project is built with modern web technologies to ensure a high-quality and performant application.

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand) for client-side state and URL state management with [NUQS](https://nuqs.47ng.com/).
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for type-safe form validation.
- **Data Fetching:** Next.js Server Actions for mutations and data fetching from a backend API.
- **Tables:** [TanStack Table](https://tanstack.com/table/v8) for powerful and accessible data tables.
- **Linting:** [ESLint](https://eslint.org/)

## Project Structure

The codebase is organized following modern Next.js conventions:

- `src/app/(dashboard)/`: Contains the main application routes and layouts.
- `src/components/`: Reusable components, including UI elements, forms, and modals.
- `src/lib/`: Core logic, including server actions (`actions.ts`), type definitions (`types.ts`), and utility functions.
- `src/hooks/`: Custom React hooks for managing client-side logic and state.
- `src/providers/`: Global application providers, such as theme and modal providers.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- pnpm (or your preferred package manager)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/rent-car.git
    cd rent-car
    ```
2.  Install dependencies:
    ```sh
    pnpm install
    ```
3.  Create a `.env.local` file in the root of the project and add the necessary environment variables. The `API_BASE_URL` is required for the application to communicate with the backend.
    ```env
    API_BASE_URL=http://your-api-endpoint.com
    ```
4.  Run the development server:
    ```sh
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

In the project directory, you can run:

- `pnpm dev`: Runs the app in development mode.
- `pnpm build`: Builds the app for production.
- `pnpm start`: Starts a production server.
- `pnpm lint`: Runs the linter to check for code quality issues.
