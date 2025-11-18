// =========================
// User
// =========================
export interface User {
  id: string
  name: string
  email: string
  passwordHash: string
  createdAt: Date
}


// =========================
// Raffle (la rifa mostrada en la UI)
// =========================
export interface Raffle {
  id: string
  title: string
  description: string
  imageUrl: string
  pricePerTicket: number
  raffleDate: Date
  totalTickets: number      // ejemplo: 1000
  createdAt: Date
  updatedAt: Date
}


// =========================
// Ticket
// =========================
export type TicketStatus = 'available' | 'reserved' | 'paid'

export interface Ticket {
  id: string
  number: number            // 1 – totalTickets
  raffleId: string
  status: TicketStatus
  userId?: string | null
  reservedAt?: Date | null
  paidAt?: Date | null
}


// =========================
// Cart (solo UI, no DB)
// =========================
export interface CartItem {
  id: string
  name: string
  description: string
  image: string
  price: number
  quantity: number
  selectedTickets?: number[]
}


// =========================
// Reservation (reserva enviada a WhatsApp)
// =========================
export type ReservationStatus =
  | 'pending_payment'
  | 'paid'
  | 'cancelled'

export type PaymentMethod = 'whatsapp' | 'paypal'

export interface Reservation {
  id: string
  userId: string
  raffleId: string
  tickets: number[]
  createdAt: Date
  status: ReservationStatus
  paymentMethod: PaymentMethod
}


// =========================
// Payment (confirmación de pago)
// =========================
export interface Payment {
  id: string
  reservationId: string
  amount: number
  proofImageUrl?: string
  confirmedByBot: boolean
  confirmedAt?: Date
}


// =========================
// Product (for home component)
// =========================
export interface Product {
  id: string
  name: string
  description: string
  image: string
  price: number
  originalPrice: number
  discount: number
  drawDate: string
  totalTickets?: number
}


// =========================
// UI Props – Componentes
// =========================
export interface RaffleCardProps {
  id: string
  title: string
  imageUrl: string
  pricePerTicket: number
  description: string
  participations: number
  timeLeft: string
  badge?: string
  onViewDetails?: () => void
}

export interface RaffleModalProps {
  isOpen: boolean
  onClose: () => void
  raffle: RaffleCardProps
}

export interface TicketItemProps {
  number: number
  status: TicketStatus
}

export interface CountdownProps {
  targetDate: Date
}


// =========================
// Screens control (opcional)
// =========================
export type Screen =
  | 'home'
  | 'cart'
  | 'tickets'
  | 'register'
  | 'confirmation'
  | 'history'


// =========================
// Legacy props (opcionales)
// =========================
export interface LegacyCartItem {
  id: string
  name: string
  description: string
  image: string
  price: number
  quantity: number
  selectedTickets: number[]
}
