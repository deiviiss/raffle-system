'use client'

import { ChevronLeft } from 'lucide-react'
import { CartItem } from '@/types'
import { motion } from 'framer-motion'

interface TicketHeaderProps {
  product: CartItem | null
  onBack: () => void
}

export function TicketHeader({ product, onBack }: TicketHeaderProps) {
  const requiredCount = product?.quantity || 1

  return (
    <motion.header
      className="bg-primary text-primary-foreground p-4 sticky top-0 z-50"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-primary-foreground/20 rounded-lg">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold">Selecciona {requiredCount} Boleto{requiredCount > 1 ? 's' : ''}</h1>
      </div>
    </motion.header>
  )
}