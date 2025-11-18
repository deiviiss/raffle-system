'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Home } from '@/components/home/home'

export default function Page() {
  const router = useRouter()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Home
          onAddToCart={(product) => {
            // For now, just navigate to cart - in a real app you'd manage state differently
            router.push('/cart')
          }}
          onGoToCart={() => router.push('/cart')}
        />
      </motion.div>
    </AnimatePresence>
  )
}
