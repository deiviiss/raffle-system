'use client'

import { useRouter } from 'next/navigation'
import { HistoryHeader } from '@/components/history/HistoryHeader'
import { Footer } from '@/components/layout/Footer'
import { HistoryList } from '@/components/history/HistoryList'
import type { CartItem } from '@/types'
import { AnimatePresence, motion } from 'framer-motion'

interface HistoryPageProps {
  searchParams: {
    cart?: string
  }
}

export default function HistoryPage({ searchParams }: HistoryPageProps) {
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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="history"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <HistoryHeader onBack={() => router.push('/')} />

        <div className="max-w-4xl mx-auto px-4 py-8">
          <HistoryList cartItems={cartItems} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}