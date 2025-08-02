# Overview

This is a full-stack web application built with React and Express, featuring a food ordering interface called "MealKart". The application demonstrates a modern web development stack with TypeScript, Tailwind CSS, and shadcn/ui components. It includes a simple food catalog with cart functionality, search capabilities, and a clean user interface for browsing and ordering food items.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **Routing**: Client-side routing using Wouter for lightweight navigation
- **State Management**: React hooks for local state, TanStack Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **UI Components**: Comprehensive set of accessible components from Radix UI primitives

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Build System**: ESBuild for production bundling, TSX for development
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **API Structure**: RESTful API design with `/api` prefix routing

## Data Storage
- **Database**: PostgreSQL configured with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Implementation**: In-memory storage for development with interface for database integration
- **Schema**: User management with username/password authentication structure

## Development Environment
- **Hot Reload**: Vite HMR for frontend, TSX watch mode for backend
- **Type Safety**: Strict TypeScript configuration across frontend, backend, and shared code
- **Path Aliases**: Organized imports with `@/` for client code and `@shared/` for shared types
- **Error Handling**: Runtime error overlay for development debugging

## Application Features
- **Food Catalog**: Predefined food items with images, names, and pricing
- **Shopping Cart**: Add/remove items with quantity tracking and total calculation
- **Search Functionality**: Real-time filtering of food items
- **Responsive Design**: Mobile-first approach with Tailwind CSS responsive utilities

# External Dependencies

## Database & ORM
- **Neon Database**: Serverless PostgreSQL database provider (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe SQL toolkit with PostgreSQL dialect
- **Drizzle Zod**: Schema validation integration

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe CSS class variant management

## Development Tools
- **Vite**: Frontend build tool with React plugin and development server
- **Replit Integration**: Development environment plugins for error handling and debugging
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Form & Data Management
- **React Hook Form**: Form handling with validation (@hookform/resolvers)
- **TanStack Query**: Server state management and caching
- **Date-fns**: Date manipulation utilities
- **Zod**: Schema validation and type inference

## External Services
- **Unsplash**: Image hosting service for food item photographs
- **Session Management**: Connect-pg-simple for PostgreSQL session storage