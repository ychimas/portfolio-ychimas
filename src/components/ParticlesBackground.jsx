import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function ParticlesBackground() {
  const [particles, setParticles] = useState([])
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const slowDrift = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -160]),
    { stiffness: 70, damping: 20, mass: 0.45 }
  )
  const mediumDrift = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 110]),
    { stiffness: 70, damping: 20, mass: 0.4 }
  )
  const rotateLayer = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 10])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ y: slowDrift, rotate: rotateLayer }}
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.size > 3
                ? 'radial-gradient(circle, rgba(212, 165, 116, 0.6) 0%, transparent 70%)'
                : 'rgba(212, 165, 116, 0.3)',
              boxShadow: particle.size > 3 ? '0 0 10px rgba(212, 165, 116, 0.4)' : 'none',
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ y: mediumDrift }}
      >
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-secondary/8 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{ y: slowDrift }}
      >
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(212,165,116,0.08),_transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-[radial-gradient(circle_at_bottom,_rgba(82,58,39,0.18),_transparent_68%)]" />
      </motion.div>
    </div>
  )
}
