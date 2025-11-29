# Raffle System - Raffle Ticket Platform

Raffle System is a modern web application built with Next.js and TypeScript, designed for purchasing raffle tickets and gift cards. The platform features a comprehensive e-commerce experience with user registration, shopping cart management, purchase confirmation, and transaction history tracking.

## Key Features

- **User Registration & Authentication**: Secure user registration system with form validation
- **Raffle System**: Interactive raffle cards with modal details and countdown timers
- **Shopping Cart**: Full cart functionality with item management, quantity updates, and pricing calculations
- **Purchase Flow**: Complete checkout process with confirmation pages and order summaries
- **Transaction History**: User dashboard to view past purchases and raffle entries
- **Responsive Design**: Mobile-first approach with dark/light mode support
- **Modern UI**: Built with shadcn/ui components for a polished, accessible interface

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **State Management**: Zustand for cart and application state
- **UI Components**: shadcn/ui component library
- **Package Manager**: pnpm

The application supports multiple gift card types including Amazon Prime, Google Play, Netflix, and Spotify, with a focus on providing an engaging and seamless raffle ticket purchasing experience.

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/boladito.git
cd boladito
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── cart/              # Shopping cart page
│   ├── confirmation/      # Purchase confirmation page
│   ├── history/           # Transaction history page
│   ├── register/          # User registration page
│   └── tickets/           # Ticket management page
├── components/            # Reusable UI components
│   ├── cart/              # Cart-related components
│   ├── confirmation/      # Confirmation page components
│   ├── dark-mode/         # Theme management
│   ├── history/           # History page components
│   ├── home/              # Homepage components
│   ├── layout/            # Layout components (Header, Footer)
│   ├── raffles/           # Raffle card and modal components
│   ├── register/          # Registration components
│   ├── tickets/           # Ticket components
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── store/                 # Zustand state management
└── types/                 # TypeScript type definitions
```

## License

This project is private and proprietary.
