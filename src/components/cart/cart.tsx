'use client'

import { motion } from 'framer-motion'
import { Trash2, ChevronLeft } from 'lucide-react'
import type { CartItem } from '@/types'

export function Cart({
  items,
  onRemove,
  onNext,
  onBack
}: {
  items: CartItem[]
  onRemove: (id: string) => void
  onNext: () => void
  onBack: () => void
}) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalTickets = items.reduce((sum, item) => sum + item.quantity, 0)

  if (items.length === 0) {
    return (
      <motion.div
        className="min-h-screen bg-background flex flex-col items-center justify-center p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.p
            className="text-3xl font-bold text-foreground mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Carrito Vacío
          </motion.p>
          <motion.p
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            No hay productos en tu carrito
          </motion.p>
          <motion.button
            onClick={onBack}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Volver a Inicio
          </motion.button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
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
            Tu Carrito
          </motion.h1>
        </div>
      </motion.header>

      <motion.div
        className="max-w-7xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-card rounded-lg border border-border p-4 flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                />
                <div className="flex-1">
                  <motion.h3
                    className="font-bold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p
                    className="text-sm text-muted-foreground mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  >
                    {item.description}
                  </motion.p>
                  <motion.p
                    className="text-lg font-semibold text-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                  >
                    ${item.price} x {item.quantity} = ${item.price * item.quantity}
                  </motion.p>
                </div>
                <motion.button
                  onClick={() => onRemove(item.id)}
                  className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                >
                  <Trash2 className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
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
        </div>
      </motion.div>
    </motion.div>
  )
}
