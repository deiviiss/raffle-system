'use client'

import { useRouter } from 'next/navigation'
import { Confirmation } from '@/components/confirmation/confirmation'
import type { CartItem } from '@/types'

interface ConfirmationPageProps {
  searchParams: {
    cart?: string
    user?: string
  }
}

export default function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const router = useRouter()

  // Parse cart and user from URL params (simplified for demo)
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
  const user = { name: 'Juan Pérez', email: 'juan@example.com' }

  const handleConfirm = () => {
    // Implement confirmation logic
    router.push('/history')
  }

  return (
    <Confirmation
      cartItems={cartItems}
      user={user}
      onConfirm={handleConfirm}
      onBack={() => router.push('/register')}
    />
  )
}