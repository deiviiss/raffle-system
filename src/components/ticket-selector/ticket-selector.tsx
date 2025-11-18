'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import type { CartItem } from '@/types'

const TICKET_GRID_SIZE = 25 // 25x25 grid
const TOTAL_TICKETS = TICKET_GRID_SIZE * TICKET_GRID_SIZE

export function TicketSelector({
  product,
  onSelectTickets,
  onBack
}: {
  product: CartItem
  onSelectTickets: (tickets: number[]) => void
  onBack: () => void
}) {
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

  const handleNext = () => {
    if (selected.size === requiredCount) {
      onSelectTickets(Array.from(selected).sort((a, b) => a - b))
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <motion.header
        className="bg-primary text-primary-foreground p-4 sticky top-0 z-50"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <motion.button
            onClick={onBack}
            className="p-2 hover:bg-primary-foreground/20 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Selecciona {requiredCount} Boleto{requiredCount > 1 ? 's' : ''}
          </motion.h1>
        </div>
      </motion.header>

      <motion.div
        className="max-w-6xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Grid */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <motion.div
              className="bg-card rounded-lg border border-border p-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <motion.h3
                className="text-lg font-bold text-foreground mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                {product?.name || 'Selecciona boletos'}
              </motion.h3>
              <motion.div
                className="overflow-x-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <div className="inline-block">
                  <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${TICKET_GRID_SIZE}, minmax(0, 1fr))` }}>
                    {Array.from({ length: TOTAL_TICKETS }, (_, i) => i + 1).map((num, index) => (
                      <motion.button
                        key={num}
                        onClick={() => toggleTicket(num)}
                        className={`w-8 h-8 rounded font-xs font-semibold transition-all text-xs flex items-center justify-center ${selected.has(num)
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-accent/20 text-foreground hover:bg-accent/40'
                          }`}
                        title={`Boleto ${num}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: 0.9 + index * 0.01 }}
                      >
                        {num % 100}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="mt-6 flex gap-4 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 2.5 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 2.6 }}
                >
                  <div className="w-4 h-4 bg-accent/20 rounded"></div>
                  <span className="text-muted-foreground">Disponible</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 2.7 }}
                >
                  <div className="w-4 h-4 bg-accent rounded"></div>
                  <span className="text-muted-foreground">Seleccionado</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Summary */}
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
              Resumen de Selección
            </motion.h3>
            <motion.div
              className="bg-secondary/50 rounded-lg p-4 mb-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              <motion.p
                className="text-sm text-muted-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                Boletos seleccionados: {selected.size}/{requiredCount}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.3 }}
              >
                {Array.from(selected)
                  .sort((a, b) => a - b)
                  .map((num, index) => (
                    <motion.span
                      key={num}
                      className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 1.4 + index * 0.05 }}
                    >
                      #{num}
                    </motion.span>
                  ))}
              </motion.div>
            </motion.div>
            {product && (
              <motion.div
                className="mb-6 pb-6 border-b border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.6 }}
              >
                <motion.p
                  className="text-foreground font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.7 }}
                >
                  {product.name}
                </motion.p>
                <motion.p
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.8 }}
                >
                  ${product.price} x {product.quantity}
                </motion.p>
              </motion.div>
            )}
            <motion.button
              onClick={handleNext}
              disabled={selected.size !== requiredCount}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.9 }}
            >
              {selected.size === requiredCount ? 'Siguiente: Registro' : `Selecciona ${requiredCount - selected.size} más`}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
