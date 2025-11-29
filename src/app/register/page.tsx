'use client'

import { useRouter } from 'next/navigation'
import type { CartItem } from '@/types'
import { RegisterHeader } from '@/components/register/RegisterHeader'
import { RegisterForm } from '@/components/register/RegisterForm'
import { RegisterSummary } from '@/components/register/RegisterSummary'
import { AnimatePresence, motion } from 'framer-motion'

interface RegisterPageProps {
  searchParams: {
    cart?: string
  }
}

export default function RegisterPage({ searchParams }: RegisterPageProps) {
  const router = useRouter()

  // Parse cart from URL params (simplified for demo)
  const cartItems: CartItem[] = [
    {
      id: '1',
      name: 'Producto de ejemplo',
      description: 'Descripción del producto',
      image: '/placeholder.svg',
      price: 50,
      quantity: 1,
      selectedTickets: [1, 2, 3]
    }
  ]

  const handleRegister = (userData: { name: string; email: string }) => {
    // Implement registration logic
    router.push('/tickets')
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="register"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <RegisterHeader onBack={() => router.push('/tickets')} />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <RegisterForm onRegister={handleRegister} />

            <RegisterSummary cartItems={cartItems} />
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  )
}