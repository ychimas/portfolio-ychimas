import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Github, Linkedin, ArrowDown, Download } from 'lucide-react'

const roles = ['Desarrollador Full Stack', 'Ingeniero de Sistemas', 'Especialista en Nube']
const profileImage = './foto.png'

export default function Hero() {
  const heroRef = useRef(null)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 110]),
    { stiffness: 90, damping: 24, mass: 0.4 }
  )
  const visualY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -90]),
    { stiffness: 90, damping: 24, mass: 0.4 }
  )
  const glowY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -140]),
    { stiffness: 75, damping: 20, mass: 0.5 }
  )
  const badgeY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -55]),
    { stiffness: 85, damping: 22, mass: 0.35 }
  )
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, prefersReducedMotion ? 1 : 0.35])

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ychimas', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ychimas', label: 'LinkedIn' },
  ]

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="hero-radial absolute left-[-10%] top-24 h-72 w-72 rounded-full"
        style={{ y: glowY }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-radial hero-radial-secondary absolute right-[-12%] bottom-16 h-96 w-96 rounded-full"
        style={{ y: badgeY }}
      />
      <div aria-hidden="true" className="hero-grid absolute inset-0 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="relative z-10" style={{ y: contentY, opacity: heroOpacity }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6 backdrop-blur-sm shadow-[0_0_30px_rgba(212,165,116,0.12)]"
              style={{ y: badgeY }}
            >
              👋 Hola, bienvenido a mi portafolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-4"
            >
              <span className="text-foreground">Soy </span>
              <span className="gradient-text">Yesith Chimás</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 h-10"
            >
              <span className="text-accent">{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-foreground/70 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Desarrollador con experiencia en desarrollo web, administración de bases de datos y despliegue de aplicaciones en la nube. Me apasiona crear soluciones innovadoras y de alto rendimiento, combinando código limpio, diseño intuitivo y enfoque en resultados, mientras afronto nuevos retos para crecer profesionalmente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#proyectos"
                className="px-8 py-4 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 162, 39, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Proyectos
              </motion.a>

              <motion.a
                href="#contacto"
                className="px-8 py-4 border-2 border-secondary/30 text-foreground font-semibold rounded-full hover:border-accent hover:text-accent transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Contactarme
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-secondary/30 text-foreground/70 hover:text-accent hover:border-accent transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center z-10"
            style={{ y: visualY }}
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <motion.div
                className="absolute inset-[-12%] rounded-full border border-accent/10"
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[-24%] rounded-full border border-primary/10"
                animate={prefersReducedMotion ? {} : { rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/30 shadow-[0_0_80px_rgba(212,165,116,0.2)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-card to-muted">
                  <img
                    src={profileImage}
                    alt="Foto de Yesith Chimas"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-accent/10" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(212,165,116,0.12)]"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-3xl">🐍</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(212,165,116,0.12)]"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-3xl">☁️</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-16 h-16 glass-card rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(212,165,116,0.12)]"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#sobre-mi" className="text-accent/60 hover:text-accent transition-colors">
          <ArrowDown size={28} />
        </a>
      </motion.div>
    </section>
  )
}
