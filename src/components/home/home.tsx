'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Search, User, Heart } from 'lucide-react'
import { RaffleCard } from '@/components/raffles/raffle-card'
import { RaffleModal } from '@/components/raffles/raffle-modal'
import { CountdownTimer } from '@/components/countdown-timer'

import type { Product, CartItem } from '@/types'

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Google Play',
    description: 'Tarjeta de regalo Google Play por $500',
    image: '/google-play-gift-card.jpg',
    price: 50,
    originalPrice: 100,
    discount: 50,
    drawDate: '2025-12-20'
  },
  {
    id: '2',
    name: 'Netflix Premium',
    description: 'Suscripción Netflix Premium 3 meses',
    image: '/netflix-gift-card.jpg',
    price: 75,
    originalPrice: 150,
    discount: 50,
    drawDate: '2025-12-27'
  },
  {
    id: '3',
    name: 'Spotify Gold',
    description: 'Suscripción Spotify Premium 6 meses',
    image: '/spotify-gift-card.jpg',
    price: 100,
    originalPrice: 200,
    discount: 50,
    drawDate: '2026-01-10'
  },
  {
    id: '4',
    name: 'Amazon Prime',
    description: 'Membresía Amazon Prime 1 año',
    image: '/amazon-prime-gift-card.jpg',
    price: 120,
    originalPrice: 240,
    discount: 50,
    drawDate: '2026-01-15'
  }
]

export function Home({ onAddToCart, onGoToCart }: { onAddToCart: (product: CartItem) => void; onGoToCart: () => void }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleAddToCart = (product: Product) => {
    onAddToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      quantity: 1
    })
    setIsModalOpen(false)
  }

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
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

      {/* Hero Banner */}
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

      {/* Social Media */}
      <motion.section
        className="bg-secondary/30 py-4 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-center gap-6">
          <motion.span
            className="text-sm font-semibold text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.0 }}
          >
            Síguenos:
          </motion.span>
          <motion.a
            href="#"
            className="text-primary hover:underline text-sm"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2.1 }}
          >
            Instagram
          </motion.a>
          <motion.a
            href="#"
            className="text-primary hover:underline text-sm"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2.2 }}
          >
            Twitter
          </motion.a>
          <motion.a
            href="#"
            className="text-primary hover:underline text-sm"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2.3 }}
          >
            Facebook
          </motion.a>
        </div>
      </motion.section>

      {/* Products Section */}
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
          {PRODUCTS.map((product, index) => (
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
                onViewDetails={() => handleViewDetails(product)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-foreground/5 border-t border-border py-8 px-4 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 3.5 }}
      >
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 3.7 }}
          >
            &copy; 2025 Boladito. Rifas Digitales. Todos los derechos reservados.
          </motion.p>
          <motion.p
            className="mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 3.9 }}
          >
            Números ganadores basados en Lotería Nacional de México
          </motion.p>
        </div>
      </motion.footer>

      {/* Product Modal */}
      {selectedProduct && (
        <RaffleModal
          raffle={{
            id: selectedProduct.id,
            imageUrl: selectedProduct.image,
            title: selectedProduct.name,
            description: selectedProduct.description,
            pricePerTicket: selectedProduct.price,
            participations: selectedProduct.totalTickets || 0,
            timeLeft: "Calculando..."
          }}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </motion.div>
  )
}
