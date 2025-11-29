'use client'

import { useRouter } from 'next/navigation'
import { CartHeader } from '@/components/cart/CartHeader'
import { CartSummary } from '@/components/cart/CartSummary'
import type { CartItem as CartItemType } from '@/types'
import { CartItem } from '@/components/cart/CartItem'
import { AnimatePresence, motion } from 'framer-motion'

interface CartPageProps {
  searchParams: {
    cart?: string
    user?: string
  }
}

export default function CartPage({ searchParams }: CartPageProps) {
  const router = useRouter()

  // Parse cart and user from URL params (simplified for demo)
  const cart: CartItemType[] = [
    {
      id: '1',
      name: 'Producto de ejemplo',
      description: 'Descripción del producto',
      image: '/placeholder.svg',
      price: 50,
      quantity: 1
    }
  ]
  const user = null

  const removeFromCart = (productId: string) => {
    // Implement cart removal logic
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalTickets = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="cart"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <CartHeader onBack={() => router.push('/')} />

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  index={index}
                />
              ))}
            </div>

            {/* Summary */}
            <CartSummary items={cart} onNext={() => router.push('/register')} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}