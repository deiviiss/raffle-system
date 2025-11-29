'use client'

import { motion } from 'framer-motion'
import { CartItem } from '@/types'

interface TicketSummaryProps {
  selected: Set<number>
  requiredCount: number
  product: CartItem | null
  onNext: () => void
}

export function TicketSummary({ selected, requiredCount, product, onNext }: TicketSummaryProps) {
  const handleNext = () => {
    if (selected.size === requiredCount) {
      onNext()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-lg border border-border p-6 h-fit sticky top-20"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="text-xl font-bold text-foreground mb-4"
      >
        Resumen de Selección
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="bg-secondary/50 rounded-lg p-4 mb-6"
      >
        <p className="text-sm text-muted-foreground mb-2">Boletos seleccionados: {selected.size}/{requiredCount}</p>
        <div className="flex flex-wrap gap-2">
          {Array.from(selected)
            .sort((a, b) => a - b)
            .map(num => (
              <motion.span
                key={num}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold"
              >
                #{num}
              </motion.span>
            ))}
        </div>
      </motion.div>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="mb-6 pb-6 border-b border-border"
        >
          <p className="text-foreground font-semibold">{product.name}</p>
          <p className="text-sm text-muted-foreground">${product.price} x {product.quantity}</p>
        </motion.div>
      )}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleNext}
        disabled={selected.size !== requiredCount}
        className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {selected.size === requiredCount ? 'Siguiente: Confirmar' : `Selecciona ${requiredCount - selected.size} más`}
      </motion.button>
    </motion.div>
  )
}