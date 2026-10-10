import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, Heart, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/ychimas', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ychimas', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

const footerLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <motion.a
              href="#inicio"
              className="font-display text-3xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Yesith
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Desarrollador apasionado por crear experiencias digitales
              excepcionales que combinan diseño y tecnología.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-foreground/70 hover:text-accent hover:border-accent/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Newsletter
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Suscríbete para recibir actualizaciones sobre mis últimos proyectos.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 bg-muted/50 border border-border rounded-lg text-foreground text-sm placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <motion.button
                type="submit"
                className="px-4 py-2 bg-accent text-background rounded-lg font-medium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribir
              </motion.button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Yesith Chimás. Hecho con
            <Heart className="w-4 h-4 text-accent fill-accent" />
            en Colombia
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-3 glass-card rounded-full hover:bg-accent/20 transition-colors group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 text-foreground/70 group-hover:text-accent transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
