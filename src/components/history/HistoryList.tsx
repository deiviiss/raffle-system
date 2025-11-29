'use client'

import { motion } from 'framer-motion'
import { Check, Clock, AlertCircle } from 'lucide-react'
import type { CartItem, TicketStatus } from '@/types'

interface HistoryListProps {
  cartItems: CartItem[]
}

export function HistoryList({ cartItems }: HistoryListProps) {
  const getStatusIcon = (status: TicketStatus) => {
    switch (status) {
      case 'paid':
        return <Check className="w-5 h-5 text-accent" />
      case 'reserved':
        return <Clock className="w-5 h-5 text-primary" />
      case 'available':
        return <AlertCircle className="w-5 h-5 text-destructive" />
    }
  }

  const getStatusText = (status: TicketStatus) => {
    switch (status) {
      case 'paid':
        return 'Pagado'
      case 'reserved':
        return 'Reservado'
      case 'available':
        return 'Pendiente'
    }
  }

  const getStatusColor = (status: TicketStatus) => {
    switch (status) {
      case 'paid':
        return 'bg-accent/10 text-accent border-accent/20'
      case 'reserved':
        return 'bg-primary/10 text-primary border-primary/20'
      case 'available':
        return 'bg-destructive/10 text-destructive border-destructive/20'
    }
  }

  if (cartItems.length === 0) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <motion.p
          className="text-2xl font-bold text-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          Sin historial
        </motion.p>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          Aún no tienes boletos reservados
        </motion.p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      {cartItems.map((item, idx) => {
        const status: TicketStatus = idx % 3 === 0 ? 'paid' : idx % 3 === 1 ? 'reserved' : 'available'
        return (
          <motion.div
            key={item.id}
            className="bg-card rounded-lg border border-border p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="flex items-start justify-between mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
            >
              <div>
                <motion.h3
                  className="text-xl font-bold text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + idx * 0.1 }}
                >
                  {item.name}
                </motion.h3>
                <motion.p
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + idx * 0.1 }}
                >
                  Cantidad: {item.quantity} boleto{item.quantity > 1 ? 's' : ''}
                </motion.p>
              </div>
              <motion.div
                className={`flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor(status)}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.0 + idx * 0.1 }}
              >
                {getStatusIcon(status)}
                <span className="text-sm font-semibold">{getStatusText(status)}</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.1 + idx * 0.1 }}
            >
              <div>
                <motion.p
                  className="text-xs font-semibold text-muted-foreground mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 + idx * 0.1 }}
                >
                  BOLETOS
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 + idx * 0.1 }}
                >
                  {(item.selectedTickets || []).map((ticket, ticketIndex) => (
                    <motion.span
                      key={ticket}
                      className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: 1.4 + idx * 0.1 + ticketIndex * 0.05 }}
                    >
                      #{ticket}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              <div>
                <motion.p
                  className="text-xs font-semibold text-muted-foreground mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 + idx * 0.1 }}
                >
                  MONTO TOTAL
                </motion.p>
                <motion.p
                  className="text-2xl font-bold text-accent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 + idx * 0.1 }}
                >
                  ${item.price * item.quantity}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}