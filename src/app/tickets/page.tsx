'use client'

import { useRouter } from 'next/navigation'
import { TicketSelector } from '@/components/ticket-selector/ticket-selector'
import type { CartItem } from '@/types'

interface TicketsPageProps {
  searchParams: {
    product?: string
  }
}

export default function TicketsPage({ searchParams }: TicketsPageProps) {
  const router = useRouter()

  // Parse product from URL params (simplified for demo)
  const product: CartItem = {
    id: '1',
    name: 'Producto de ejemplo',
    description: 'Descripción del producto',
    image: '/placeholder.svg',
    price: 50,
    quantity: 1
  }

  const handleSelectTickets = (tickets: number[]) => {
    // Implement ticket selection logic
    router.push('/register')
  }

  return (
    <TicketSelector
      product={product}
      onSelectTickets={handleSelectTickets}
      onBack={() => router.push('/cart')}
    />
  )
}