'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroBanner } from '@/components/home/HeroBanner'
import { SocialMedia } from '@/components/home/SocialMedia'
import { RaffleModal } from '@/components/raffles/raffle-modal'

import type { Product, CartItem } from '@/types'
import { useState } from 'react'
import { ProductSection } from '@/components/home/ProductSection'

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

export default function Page() {
  const router = useRouter()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleAddToCart = (product: Product) => {
    router.push('/cart')
    setIsModalOpen(false)
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <Header />

        {/* Hero Banner */}
        <HeroBanner onGoToCart={() => router.push('/cart')} />

        {/* Social Media */}
        <SocialMedia />

        {/* Products Section */}
        <ProductSection products={PRODUCTS} onViewDetails={handleViewDetails} />

        <Footer />

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
    </AnimatePresence>
  )
}
