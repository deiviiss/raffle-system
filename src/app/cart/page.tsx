'use client'

import { useRouter } from 'next/navigation'
import { Cart } from '@/components/cart/cart'
import type { CartItem } from '@/types'

interface CartPageProps {
  searchParams: {
    cart?: string
    user?: string
  }
}

export default function CartPage({ searchParams }: CartPageProps) {
  const router = useRouter()

  // Parse cart and user from URL params (simplified for demo)
  const cart: CartItem[] = [
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

  return (
    <Cart
      items={cart}
      onRemove={removeFromCart}
      onNext={() => router.push('/tickets')}
      onBack={() => router.push('/')}
    />
  )
}