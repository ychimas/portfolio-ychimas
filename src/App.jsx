import { useState, useEffect } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'

function App() {
  const [loading, setLoading] = useState(true)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const ambientY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -220]),
    { stiffness: 80, damping: 24, mass: 0.3 }
  )
  const ambientYReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 180]),
    { stiffness: 80, damping: 24, mass: 0.35 }
  )
  const ambientX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 90]),
    { stiffness: 70, damping: 22, mass: 0.4 }
  )
  const ambientXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -70]),
    { stiffness: 70, damping: 22, mass: 0.42 }
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="relative min-h-screen bg-background">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <motion.div
          className="app-ambient app-ambient-primary"
          style={{ y: ambientY, x: ambientX }}
        />
        <motion.div
          className="app-ambient app-ambient-accent"
          style={{ y: ambientYReverse }}
        />
        <motion.div
          className="app-ambient app-ambient-secondary"
          style={{ y: ambientY, x: ambientXReverse }}
        />
      </motion.div>
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
