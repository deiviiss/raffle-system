'use client'

import { motion } from 'framer-motion'
import type { CartItem } from '@/types'

export function CartSummary({ items, onNext }: { items: CartItem[], onNext: () => void }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalTickets = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <motion.div
      className="bg-card rounded-lg border border-border p-6 h-fit sticky top-20"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.8 }}
    >
      <motion.h3
        className="text-xl font-bold text-foreground mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        Resumen
      </motion.h3>
      <motion.div
        className="space-y-3 mb-6 pb-6 border-b border-border"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          <span className="text-muted-foreground">Boletos:</span>
          <span className="font-semibold text-foreground">{totalTickets}</span>
        </motion.div>
        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 1.3 }}
        >
          <span className="text-muted-foreground">Subtotal:</span>
          <span className="font-semibold text-foreground">${total}</span>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex justify-between mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
      >
        <span className="text-lg font-bold text-foreground">Total:</span>
        <span className="text-2xl font-bold text-primary">${total}</span>
      </motion.div>
      <motion.button
        onClick={onNext}
        disabled={items.length === 0}
        className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
      >
        Siguiente: Seleccionar Boletos
      </motion.button>
    </motion.div>
  )
}