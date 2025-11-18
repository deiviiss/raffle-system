'use client'

import { useRouter } from 'next/navigation'
import { RegisterForm } from '@/components/register-form/register-form'
import type { CartItem } from '@/types'

interface RegisterPageProps {
  searchParams: {
    cart?: string
  }
}

export default function RegisterPage({ searchParams }: RegisterPageProps) {
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

  const handleRegister = (userData: { name: string; email: string }) => {
    // Implement registration logic
    router.push('/confirmation')
  }

  return (
    <RegisterForm
      onRegister={handleRegister}
      onBack={() => router.push('/tickets')}
      cartItems={cartItems}
    />
  )
}