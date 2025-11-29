'use client'

import { useRouter } from 'next/navigation'
import type { CartItem } from '@/types'
import { ConfirmationHeader } from '@/components/confirmation/ConfirmationHeader'
import { ConfirmationSummary } from '@/components/confirmation/ConfirmationSummary'
import { AnimatePresence, motion } from 'framer-motion'
import { ConfirmationUserInfo } from '@/components/confirmation/ConfirmationUserInfo'
import { ConfirmationInfo } from '@/components/confirmation/ConfirmationInfo'
import { ConfirmationItems } from '@/components/confirmation/ConfirmationItems'

interface ConfirmationPageProps {
  searchParams: {
    cart?: string
    user?: string
  }
}

export default function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const router = useRouter()

  // Parse cart and user from URL params (simplified for demo)
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
  const user = { name: 'Juan Pérez', email: 'juan@example.com' }

  const handleConfirm = () => {
    // Implement confirmation logic
    router.push('/history')
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="confirmation"
        className="min-h-screen bg-background"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <ConfirmationHeader onBack={() => router.back()} />


        <motion.div
          className="max-w-7xl mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <ConfirmationUserInfo user={user} />
              <ConfirmationItems cartItems={cartItems} />
              <ConfirmationInfo />
            </motion.div>
            <ConfirmationSummary cartItems={cartItems} user={user} onConfirm={handleConfirm} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}