'use client'

import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { RaffleCardProps } from '@/types'

export function RaffleCard({
  id,
  imageUrl,
  title,
  description,
  pricePerTicket,
  participations,
  timeLeft,
  badge,
  onViewDetails,
}: RaffleCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute bottom-3 right-3 bg-card rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-lg line-clamp-2 text-balance">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Price and Participations */}
        <div className="space-y-2 pt-2 border-t border-border">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-primary">${pricePerTicket}</span>
            <span className="text-xs text-muted-foreground">
              {participations} participantes
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            ⏱️ Termina en: {timeLeft}
          </p>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            onClick={onViewDetails}
            className="border border-primary text-primary font-semibold py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
          >
            Ver Detalles
          </button>
          <button className="bg-primary text-primary-foreground font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm">
            <ShoppingCart className="w-4 h-4" />
            Carrito
          </button>
        </div>
      </div>
    </div>
  )
}
