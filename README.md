# Raffle System

**Raffle System** is a modern web application built with Next.js and TypeScript, designed for purchasing raffle tickets and gift cards. The platform features a comprehensive e-commerce experience with user registration, shopping cart management, purchase confirmation, and transaction history tracking.

## Key Features

- **User Registration & Authentication**: Secure user registration system with form validation.
- **Raffle System**: Interactive raffle cards with modal details and countdown timers.
- **Shopping Cart**: Full cart functionality with item management, quantity updates, and pricing calculations.
- **Purchase Flow**: Complete checkout process with confirmation pages and order summaries.
- **Transaction History**: User dashboard to view past purchases and raffle entries.
- **Responsive Design**: Mobile-first approach with dark/light mode support.
- **Modern UI**: Built with shadcn/ui components for a polished, accessible interface.

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd raffle-system
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

3.  Run the development server:
    ```bash
    pnpm dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm lint`: Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js app router pages
├── components/            # Reusable UI components
│   ├── ui/                # Base shadcn/ui components
│   ├── cart/              # Cart-related components
│   ├── raffles/           # Raffle card components
│   └── ...
├── lib/                   # Utility functions
└── store/                 # State management (Zustand)
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
