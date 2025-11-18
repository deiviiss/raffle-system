'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, MessageCircle } from 'lucide-react'
import type { CartItem } from '@/types'

export function Confirmation({
  cartItems,
  user,
  onConfirm,
  onBack
}: {
  cartItems: CartItem[]
  user: { name: string; email: string } | null
  onConfirm: () => void
  onBack: () => void
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
      className="min-h-screen bg-background"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <motion.header
        className="bg-primary text-primary-foreground p-4 sticky top-0 z-50"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <motion.button
            onClick={onBack}
            className="p-2 hover:bg-primary-foreground/20 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Confirmación de Reserva
          </motion.h1>
        </div>
      </motion.header>

      <motion.div
        className="max-w-7xl mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {/* User Info */}
            <motion.div
              className="bg-card rounded-lg border border-border p-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <motion.h3
                className="text-xl font-bold text-foreground mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                Información de Usuario
              </motion.h3>
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <p className="text-sm text-muted-foreground">Nombre</p>
                  <p className="text-lg font-semibold text-foreground">{user?.name}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.0 }}
                >
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold text-foreground">{user?.email}</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Items */}
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

            {/* Info */}
            <motion.div
              className="bg-secondary/50 rounded-lg border border-border p-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 2.5 }}
            >
              <motion.h3
                className="font-semibold text-foreground mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.6 }}
              >
                Próximos Pasos:
              </motion.h3>
              <motion.ol
                className="list-decimal list-inside space-y-2 text-sm text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.7 }}
              >
                {[
                  "Reserva tus boletos a través de WhatsApp",
                  "Envía el comprobante de pago",
                  "Espera confirmación del pago",
                  "Tus boletos estarán listados en tu historial"
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 2.8 + index * 0.1 }}
                  >
                    {step}
                  </motion.li>
                ))}
              </motion.ol>
            </motion.div>
          </motion.div>

          {/* Summary */}
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
        </div>
      </motion.div>
    </motion.div>
  )
}
