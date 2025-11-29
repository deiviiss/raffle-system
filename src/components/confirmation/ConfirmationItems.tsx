import { motion } from 'framer-motion'
import type { CartItem } from '@/types'

export function ConfirmationItems({ cartItems }: { cartItems: CartItem[] }) {
  return (
    <motion.div
      className="bg-card rounded-lg border border-border p-6"
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1.1 }}
    >
      <motion.h3
        className="text-xl font-bold text-foreground mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        Resumen de Boletos
      </motion.h3>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      >
        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="border-b border-border pb-4 last:border-b-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
          >
            <motion.h4
              className="font-semibold text-foreground mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
            >
              {item.name}
            </motion.h4>
            <motion.p
              className="text-sm text-muted-foreground mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.6 + index * 0.1 }}
            >
              Cantidad: {item.quantity} boleto{item.quantity > 1 ? 's' : ''}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2 mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.7 + index * 0.1 }}
            >
              {(item.selectedTickets || []).map((ticket, ticketIndex) => (
                <motion.span
                  key={ticket}
                  className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 1.8 + index * 0.1 + ticketIndex * 0.05 }}
                >
                  Boleto #{ticket}
                </motion.span>
              ))}
            </motion.div>
            <motion.p
              className="text-lg font-bold text-accent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.9 + index * 0.1 }}
            >
              ${item.price * item.quantity}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}