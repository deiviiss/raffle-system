import { motion } from 'framer-motion'

export function ConfirmationInfo() {
  return (
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
  )
}