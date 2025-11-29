'use client'

import { motion } from 'framer-motion'
import { CartItem } from '@/types'

const TICKET_GRID_SIZE = 10 // 10x10 grid
const TOTAL_TICKETS = TICKET_GRID_SIZE * TICKET_GRID_SIZE

interface TicketGridProps {
  selected: Set<number>
  requiredCount: number
  onToggleTicket: (num: number) => void
  product: CartItem | null
}

export function TicketGrid({ selected, requiredCount, onToggleTicket, product }: TicketGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-card rounded-lg border border-border p-6"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="text-lg font-bold text-foreground mb-4"
      >
        {product?.name || 'Selecciona boletos'}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="overflow-x-auto flex justify-center"
      >
        <div className="inline-block">
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${TICKET_GRID_SIZE}, minmax(0, 1fr))` }}>
            {Array.from({ length: TOTAL_TICKETS }, (_, i) => i + 1).map(num => (
              <motion.button
                key={num}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5 + (num * 0.001),
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onToggleTicket(num)}
                className={`w-8 h-8 rounded font-xs font-semibold transition-all text-xs flex items-center justify-center ${selected.has(num)
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-accent/20 text-foreground hover:bg-accent/40'
                  }`}
                title={`Boleto ${num}`}
              >
                {num % 100}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="mt-6 flex gap-4 text-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent/20 rounded"></div>
          <span className="text-muted-foreground">Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent rounded"></div>
          <span className="text-muted-foreground">Seleccionado</span>
        </div>
      </motion.div>
    </motion.div>
  )
}