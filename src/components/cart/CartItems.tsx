'use client'

import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import type { CartItem } from '@/types'

export function CartItems({ items, onRemove }: { items: CartItem[], onRemove: (id: string) => void }) {
  return (
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
  )
}