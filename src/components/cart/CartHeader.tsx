'use client'

import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'

interface CartHeaderProps {
  onBack: () => void
}

export function CartHeader({ onBack }: CartHeaderProps) {
  return (
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
  )
}