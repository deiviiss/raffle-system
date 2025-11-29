import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Boladito
            </h3>
            <p className="text-sm text-muted-foreground">
              Rifas digitales seguras y transparentes para todos.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Inicio</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Rifas</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacidad</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">Síguenos</h4>
            <div className="flex gap-3">
              <Link href="#" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Boladito. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
