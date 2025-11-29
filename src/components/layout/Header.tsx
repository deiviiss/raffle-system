'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Search, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()
  const onGoToHistory = () => {
    router.push('/history')
  }

  const onGoToCart = () => {
    router.push('/cart')
  }
  return (
    <motion.header
      className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          BOLADITO
        </motion.h1>
        <div className="flex items-center gap-6">
          <motion.div
            className="hidden md:flex bg-primary-foreground rounded-full px-4 py-2 gap-2 items-center flex-1 max-w-xs"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Search className="w-4 h-4 text-foreground" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent outline-none text-foreground text-sm w-full"
            />
          </motion.div>
          <motion.button
            className="p-2 hover:bg-primary-foreground/20 rounded-full"
            onClick={onGoToCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <ShoppingCart className="w-6 h-6" />
          </motion.button>
          <motion.button
            className="p-2 hover:bg-primary-foreground/20 rounded-full"
            onClick={onGoToHistory}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <User className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}