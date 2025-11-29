'use client'

import { useRouter } from 'next/navigation'
import type { CartItem } from '@/types'
import { TicketHeader } from '@/components/tickets/TicketHeader'
import { TicketGrid } from '@/components/tickets/TicketGrid'
import { TicketSummary } from '@/components/tickets/TicketSummary'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface TicketsPageProps {
  searchParams: {
    product?: string
  }
}

export default function TicketsPage({ searchParams }: TicketsPageProps) {
  const router = useRouter()

  // Parse product from URL params (simplified for demo)
  const product: CartItem = {
    id: '1',
    name: 'Producto de ejemplo',
    description: 'Descripción del producto',
    image: '/placeholder.svg',
    price: 50,
    quantity: 1
  }

  const handleSelectTickets = (tickets: number[]) => {
    // Implement ticket selection logic
    router.push('/confirmation')
  }

  const [selected, setSelected] = useState<Set<number>>(new Set())
  const requiredCount = product?.quantity || 1

  const toggleTicket = (num: number) => {
    const newSelected = new Set(selected)
    if (newSelected.has(num)) {
      newSelected.delete(num)
    } else if (newSelected.size < requiredCount) {
      newSelected.add(num)
    }
    setSelected(newSelected)
  }


  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="tickets"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <TicketHeader product={product} onBack={() => router.push('/cart')} />

        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Grid */}
            <div className="lg:col-span-2">
              <TicketGrid selected={selected} requiredCount={requiredCount} onToggleTicket={toggleTicket} product={product} />
            </div>

            {/* Summary */}
            <TicketSummary
              selected={selected}
              requiredCount={requiredCount}
              product={product}
              onNext={() => handleSelectTickets(Array.from(selected).sort((a, b) => a - b))}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}