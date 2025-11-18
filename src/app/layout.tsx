import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Providers } from '@/components/providers/providers';
import { ToogleDarkMode } from '@/components/dark-mode/toggle-dark-mode/toogle-dark-mode';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Boladito - Rifas Digitales',
  description: 'Compra boletos numerados para participar en rifas de tarjetas de regalo'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <Providers>
          {children}
          <ToogleDarkMode />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
