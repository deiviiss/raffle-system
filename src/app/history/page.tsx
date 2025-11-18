'use client'

import { useRouter } from 'next/navigation'
import { History } from '@/components/history/history'
import type { CartItem } from '@/types'

interface HistoryPageProps {
  searchParams: {
    cart?: string
  }
}

export default function HistoryPage({ searchParams }: HistoryPageProps) {
  const router = useRouter()

  // Parse cart from URL params (simplified for demo)
  const cartItems: CartItem[] = [
    {
      id: '1',
      name: 'Producto de ejemplo',
      description: 'Descripción del producto',
      image: '/placeholder.svg',
      price: 50,
      quantity: 1,
      selectedTickets: [1, 2, 3]
    }
  ]

  return (
    <History
      cartItems={cartItems}
      onBack={() => router.push('/')}
    />
  )
}