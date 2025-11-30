# Agent Guide

This document outlines the architectural standards, development workflows, and conventions for the **raffle-system** project. All agents and developers must adhere to these guidelines to maintain codebase consistency and integrity.

## Project Overview

**raffle-system** is a web application built with Next.js for managing and purchasing raffle tickets. It utilizes a modern stack focused on performance and type safety.

## Setup & Development

**Package Manager**: `pnpm` is strictly required. Do not use `npm` or `yarn`.

### Commands

- **Installation**: `pnpm install`
- **Development Server**: `pnpm dev` (Runs on `http://localhost:3000`)
- **Production Build**: `pnpm build`
- **Start Production**: `pnpm start`
- **Linting**: `pnpm lint`

*Note: No testing scripts are currently configured.*

## Project Structure

The project follows a standard Next.js App Router structure:

- **`src/app/`**: Application routes and pages. `layout.tsx` serves as the root entry point.
- **`src/components/ui/`**: Reusable base UI components (shadcn/ui).
- **`src/components/{feature}/`**: Feature-specific components (e.g., `cart/`, `raffles/`).
- **`src/lib/`**: Shared utilities. Contains `utils.ts` with the `cn()` helper for class merging.
- **`src/store/`**: Designated directory for state management.

## Technology Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript (Strict Mode enabled)
- **Styling**: Tailwind CSS v4
- **UI Library**: shadcn/ui
- **Icons**: lucide-react
- **Form Management**: react-hook-form with zod validation

## Rules & Constraints

### 1. Global State
- **Status**: Not Implemented.
- **Details**: While `zustand` is listed in `package.json`, the `src/store` directory contains empty files.
- **Requirement**: If global state is needed, the store implementation must be initialized first.

### 2. Language & Localization
- **Codebase Language**: English.
- **Requirement**: All UI text, comments, and documentation within the code must be written in **English**.
- **Configuration**: The document root is configured as `<html lang="en">`.

### 3. Testing
- **Status**: Not Configured.
- **Requirement**: Do not create `.test.ts` or `.spec.ts` files unless the testing infrastructure is explicitly set up first.

## Contribution Guidelines

### Code Style & Imports
- **Path Aliases**: Always use the `@/` alias for internal imports (e.g., `import { cn } from "@/lib/utils"`).
- **Styling**: Use the native CSS variables defined in `globals.css` (e.g., `var(--primary)`). Avoid hardcoded hex values.

### Component Development
- **Reusability**: Prioritize using existing components in `src/components/ui/` before creating new ones.
- **Structure**: Place feature-specific logic in `src/components/{feature}/` to keep the global namespace clean.

## 🧠 Commit Automation Behavior

Whenever the user requests anything related to committing changes (e.g., 
"commit this", "make the commit", "push my changes", "generate the commit"),
you MUST:

1. Detect uncommitted changes with `git diff`.
2. Analyze the diff and generate a commit message using EXACTLY this format:

   <type>: <gitmoji> <short summary>

   ### Changes Made
   - <type>: <gitmoji> <short change description>
   ...

   ### Description of Changes
   - Detailed explanation of what changed, why, impact, and any issues closed.

   Rules:
   - Summary max 50 characters
   - Each line max 50 characters
   - Always English
   - Allowed types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert.

3. Automatically generate the branch name with:
   <type>/<kebab-case-summary>

4. Execute:
   git checkout -b <branch>
   git add .
   git commit -m "<full commit message>"
   git push -u origin <branch>

5. Respond to the user **only** with:
   - The commit message in Markdown
   - The generated branch name
