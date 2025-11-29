'use client'

import { motion } from 'framer-motion'
import type { CartItem } from '@/types'

export function RegisterSummary({
  cartItems
}: {
  cartItems: CartItem[]
}) {
  return (
    <motion.div
      className="bg-card rounded-lg border border-border p-8 h-fit sticky top-20"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.8 }}
    >
      <motion.h3
        className="text-xl font-bold text-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.7 }}
      >
        Resumen de Boletos
      </motion.h3>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.8 }}
      >
        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-secondary/50 rounded-lg p-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.9 + index * 0.1 }}
          >
            <motion.p
              className="font-semibold text-foreground mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.0 + index * 0.1 }}
            >
              {item.name}
            </motion.p>
            <motion.p
              className="text-sm text-muted-foreground mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.1 + index * 0.1 }}
            >
              Cantidad: {item.quantity} boleto{item.quantity > 1 ? 's' : ''}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.2 + index * 0.1 }}
            >
              {(item.selectedTickets || []).map((ticket, ticketIndex) => (
                <motion.span
                  key={ticket}
                  className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 2.3 + index * 0.1 + ticketIndex * 0.05 }}
                >
                  #{ticket}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}