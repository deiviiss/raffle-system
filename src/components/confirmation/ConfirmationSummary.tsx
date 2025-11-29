import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import type { CartItem } from '@/types'

export function ConfirmationSummary({
  cartItems,
  user,
  onConfirm
}: {
  cartItems: CartItem[]
  user: { name: string; email: string } | null
  onConfirm: () => void
}) {
  const [showReserveInfo, setShowReserveInfo] = useState(false)
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const generateMessage = () => {
    const items = cartItems
      .map(
        item =>
          `${item.name}: ${item.quantity} boleto(s) - ${(item.selectedTickets || []).map(t => `#${t}`).join(', ')}`
      )
      .join('\n')

    return `Hola, quiero reservar los siguientes boletos:\n\n${items}\n\nTotal: $${total}\n\nNombre: ${user?.name}\nEmail: ${user?.email}`
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(generateMessage())
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank')
    onConfirm()
  }

  return (
    <motion.div
      className="bg-card rounded-lg border border-border p-6 h-fit sticky top-20"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.8 }}
    >
      <motion.h3
        className="text-2xl font-bold text-foreground mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        Total: ${total}
      </motion.h3>

      <motion.button
        onClick={() => setShowReserveInfo(!showReserveInfo)}
        className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mb-4"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        <MessageCircle className="w-5 h-5" />
        Reservar por WhatsApp
      </motion.button>

      {showReserveInfo && (
        <motion.div
          className="bg-secondary/50 rounded-lg p-4 text-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className="text-foreground font-semibold mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Mensaje para WhatsApp:
          </motion.p>
          <motion.div
            className="bg-background rounded p-3 max-h-48 overflow-y-auto text-xs text-muted-foreground mb-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {generateMessage()}
          </motion.div>
          <motion.button
            onClick={handleWhatsAppClick}
            className="w-full bg-accent text-accent-foreground py-2 rounded font-semibold hover:bg-accent/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Abrir WhatsApp
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}