# Patient Manager 🏥

A patient management system built with React, TypeScript, and Vite. Features full CRUD operations with a clean, responsive UI.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Preview production build
pnpm preview
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## 📋 Requirements

- Node.js 18+
- pnpm (recommended) or npm

## 🛠️ Tech Stack

### Core

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server

### State Management

- **Zustand** - Lightweight state management
  - Separate stores for data and UI concerns
- **TanStack Query (React Query)** - Server state management
  - Handles API data fetching and caching
  - Only used for initial data load (API is read-only)

### Forms & Validation

- **React Hook Form** - Performant form handling

### Styling

- **Tailwind CSS v4** - Utility-first CSS
- **Tailwind Variants** - Type-safe component variants
- **Framer Motion** - Smooth animations

### HTTP & Utilities

- **Axios** - HTTP client with interceptors
- **React Hot Toast** - Elegant notifications

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable base components
│   └── patient/         # Domain-specific components
├── config/
│   ├── queryClient/     # App configuration (React Query client)
├── constants/           # Constants
├── hooks/               # Custom hooks (useLoadPatients, usePatientModal)
├── services/            # API layer (axios instance, patient service)
├── store/               # Zustand stores (patient data, ui-store)
├── types/               # TypeScript type definitions
└── lib/                 # Library configurations and utils
```

## 🎯 Key Design Decisions

### Architecture: Hybrid State Management

**Problem**: API only supports GET requests (read-only)

**Solution**:

- React Query fetches initial data from API
- Zustand manages all CRUD operations in-memory
- Changes are lost on page refresh

```
API (read) → React Query → Zustand (CRUD) → Components
```

### Separation of Concerns

**Two independent stores:**

1. `patient-store` - Data operations (create, update, delete)
2. `ui-store` - UI state (open/close modal, modal mode)

**Why?**

- Reusable modal store for any domain
- Easier to test independently
- Clear single responsibility

### Component Organization

```
components/
├── ui/          # Generic, reusable (no business logic)
└── patient/     # Domain-specific (knows about Patient type)
```

**Benefits:**

- UI components can be used in any project
- Clear separation between generic and specific

## 🧪 Code Quality Tools

- **ESLint** - Code linting with recommended rules
- **Prettier** - Code formatting
- **TypeScript** - Strict mode enabled
- **Vite** - Fast HMR and optimized builds

## 🚧 API Constraint

The challenge API only supports `GET /users`. All write operations (create, update, delete) are handled locally in memory using Zustand.

**Flow:**

1. App loads → Fetch from API → Store in Zustand
2. User creates/edits → Update Zustand (in-memory)
3. User refreshes → Data resets → Fetch from API again

## 📝 Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint errors
```
