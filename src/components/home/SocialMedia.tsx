'use client'

import { motion } from 'framer-motion'

export function SocialMedia() {
  return (
    <motion.section
      className="bg-secondary/30 py-4 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.8 }}
    >
      <div className="max-w-7xl mx-auto flex justify-center gap-6">
        <motion.span
          className="text-sm font-semibold text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.0 }}
        >
          Síguenos:
        </motion.span>
        <motion.a
          href="#"
          className="text-primary hover:underline text-sm"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 2.1 }}
        >
          Instagram
        </motion.a>
        <motion.a
          href="#"
          className="text-primary hover:underline text-sm"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 2.2 }}
        >
          Twitter
        </motion.a>
        <motion.a
          href="#"
          className="text-primary hover:underline text-sm"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 2.3 }}
        >
          Facebook
        </motion.a>
      </div>
    </motion.section>
  )
}