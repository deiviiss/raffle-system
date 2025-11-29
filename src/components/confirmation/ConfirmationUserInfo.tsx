import { motion } from 'framer-motion'

export function ConfirmationUserInfo({
  user
}: {
  user: { name: string; email: string } | null
}) {
  return (
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
  )
}