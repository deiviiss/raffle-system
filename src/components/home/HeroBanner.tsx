'use client'

import { motion } from 'framer-motion'

export function HeroBanner({ onGoToCart }: { onGoToCart: () => void }) {
  return (
    <motion.section
      className="bg-gradient-to-r from-primary to-accent/80 text-primary-foreground py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 flex-col md:flex-row">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.p
            className="text-sm mb-2 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
          >
            Festival Especial
          </motion.p>
          <motion.h2
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Tarjetas de Regalo
          </motion.h2>
          <motion.p
            className="text-lg mb-6 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.4 }}
          >
            Participa en nuestras rifas y gana increíbles premios
          </motion.p>
          <motion.button
            onClick={onGoToCart}
            className="bg-primary-foreground text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.6 }}
          >
            Ir al Carrito
          </motion.button>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.img
            src="/gift-cards-display.jpg"
            alt="Gift Cards"
            className="w-full max-w-sm rounded-lg shadow-2xl"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}