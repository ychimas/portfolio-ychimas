import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [clickPulse, setClickPulse] = useState(0)

  // Seguimiento instantáneo: sin springs ni retrasos (directo al estado)
  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Detectar hover sobre elementos interactivos
  useEffect(() => {
    const handleOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, select, [role="button"]')
      setIsHovering(!!target)
    }
    document.addEventListener('mouseover', handleOver)
    return () => document.removeEventListener('mouseover', handleOver)
  }, [])

  // Pulso rápido al hacer clic
  useEffect(() => {
    const handleDown = () => setClickPulse((n) => n + 1)
    document.addEventListener('mousedown', handleDown)
    return () => document.removeEventListener('mousedown', handleDown)
  }, [])

  // Ocultar en móviles (ahí se usa el cursor nativo táctil)
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{ left: position.x, top: position.y }}
    >
      {/* Icono de ratón (flecha) dorado — no blanco */}
      <div className="absolute" style={{ left: -5, top: -3 }}>
        <motion.svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="#d4a574"
          stroke="#1c130a"
          strokeWidth="1.2"
          animate={{ scale: isHovering ? 1.2 : 1 }}
          transition={{ duration: 0.15 }}
        >
          <path d="M5.5 3.5 L19.5 12 L12.8 13.4 L10.4 19.5 L8.6 18.2 L11 12.2 L5.5 3.5 Z" />
        </motion.svg>
      </div>

      {/* Halo de efecto que se expande al pasar por elementos interactivos */}
      <motion.div
        className="absolute rounded-full border border-[#d4a574]/60"
        style={{ width: 36, height: 36, left: -18, top: -18 }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.9 : 0.4,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Pulso de clic (efecto rápido, sin retraso) */}
      <AnimatePresence>
        {clickPulse > 0 && (
          <motion.div
            key={clickPulse}
            className="absolute rounded-full border-2 border-[#d4a574]"
            style={{ width: 24, height: 24, left: -12, top: -12 }}
            initial={{ scale: 0.4, opacity: 1 }}
            animate={{ scale: 2.4, opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default CustomCursor
