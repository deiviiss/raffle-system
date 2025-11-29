'use client'

import { motion } from 'framer-motion'
import { RaffleCard } from '../raffles/raffle-card'
import { Product } from '@/types'

export function ProductSection({ products, onViewDetails }: { products: Product[], onViewDetails: (product: Product) => void }) {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2.4 }}
    >
      <motion.h3
        className="text-3xl font-bold mb-4 text-foreground"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 2.6 }}
      >
        Próximos en Sortear
      </motion.h3>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.8 }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2.9 + index * 0.1 }}
          >
            <RaffleCard
              id={product.id}
              imageUrl={product.image}
              title={product.name}
              description={product.description}
              pricePerTicket={product.price}
              participations={product.totalTickets || 0}
              timeLeft="Calculando..."
              onViewDetails={() => onViewDetails(product)}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}