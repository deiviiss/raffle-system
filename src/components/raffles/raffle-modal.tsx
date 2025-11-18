'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ShoppingCart, Heart } from 'lucide-react'

import type { RaffleModalProps } from '@/types'

export function RaffleModal({ isOpen, onClose, raffle }: RaffleModalProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [quantity, setQuantity] = useState(1)

  if (!isOpen || !raffle) return null

  const handleAddToCart = () => {
    console.log(`[v0] Added ${quantity}x ${raffle.title} to cart`)
    // Cart logic here
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-card rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
          <div className="sticky top-0 bg-card border-b border-border flex items-center justify-between p-4 z-30">
            <h3 className="text-lg font-semibold text-foreground">Detalles de la Rifa</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-muted rounded-full transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-sm bg-muted rounded-lg overflow-hidden">
                <Image
                  src={raffle.imageUrl || "/placeholder.svg"}
                  alt={raffle.title}
                  fill
                  className="object-cover"
                  priority
                />
                {raffle.badge && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {raffle.badge}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {raffle.title}
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {raffle.description}
                </p>
              </div>

              {raffle.description && raffle.description.length > 0 && (
                <div className="bg-secondary/20 rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold text-foreground text-sm">Características:</h3>
                  {/* <ul className="space-y-1">
                    {raffle.description.map((description, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul> */}
                </div>
              )}

              <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Precio de entrada</p>
                  <p className="text-2xl font-bold text-primary">${raffle.pricePerTicket}</p>
                </div>
                {raffle.participations && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Participaciones</p>
                    <p className="text-2xl font-bold text-foreground">{raffle.participations}</p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-foreground">Cantidad:</label>
                <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Agregar al Carrito
              </button>
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`px-4 py-3 rounded-lg transition-colors border ${isLiked
                  ? 'bg-accent/10 border-accent text-accent'
                  : 'border-border hover:bg-muted'
                  }`}
                aria-label="Agregar a favoritos"
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Se enviarán detalles de tu compra al correo registrado
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
