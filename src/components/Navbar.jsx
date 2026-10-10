import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.a
            href="#inicio"
            className="font-display text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Yesith Chimás
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="nav-link text-foreground/80 hover:text-accent transition-colors text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.a
              href="#contacto"
              className="px-5 py-2.5 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(201, 162, 39, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Contáctame
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-accent transition-colors py-2 px-4 rounded-lg hover:bg-muted/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="px-5 py-3 bg-accent text-background font-semibold rounded-full text-center mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Contáctame
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
