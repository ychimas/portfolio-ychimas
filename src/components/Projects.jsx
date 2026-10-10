import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Fershop',
    description: 'Plataforma integral para la operación de un negocio de importación y venta cross-border: se compran productos en USD (EE. UU.) y se venden en COP (Colombia), con control completo del ciclo: cotización, compra, envío internacional, aduana, entrega local, venta y cobro.',
    image: '/fershop.png',
    tags: ['Next.js', 'React 19', 'Tailwind CSS', 'Express', 'Prisma', 'MySQL'],
    liveUrl: 'https://fershop-frontend-mkvntv10y-yesithchimas-9748s-projects.vercel.app/',
    githubUrl: '#',
    category: 'web',
  },
  {
    id: 2,
    title: 'SF CoursePress',
    description: 'Sistema de autoría de cursos e-learning con generador automático de paquetes SCORM 1.2, editor visual con lecciones multimedia (slider, video, interactivos, quiz), subida de assets y exportación ZIP, con panel de gestión de proyectos.',
    image: '/sfcourses.png',
    tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind', 'shadcn/ui', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://traesf-coursepressjdb7.vercel.app/',
    githubUrl: '#',
    category: 'web',
  },
  {
    id: 3,
    title: 'Laik',
    description: 'Panel para gestionar agentes de inteligencia artificial integrados con WhatsApp: conexión por QR con sesión persistente y reconexión automática, respuestas autónomas con múltiples proveedores de IA, historial de chats, gestión de clientes, remarketing y autenticación protegida.',
    image: '/laik.png',
    tags: ['Next.js', 'TypeScript', 'Baileys', 'NextAuth', 'OpenAI', 'Gemini', 'Groq'],
    liveUrl: 'https://traewhats-app-ai-agentp27o.vercel.app',
    githubUrl: '#',
    category: 'web',
  },
  {
    id: 4,
    title: 'AlphaForce Gym',
    description: 'Sistema de gestión de gimnasio con módulos de clientes, membresías, planes, pagos, clases, rutinas, empleados y caja, además de control de acceso biométrico por huella integrado con lector DigitalPersona.',
    image: '/alphaforcegym.png',
    tags: ['NestJS', 'TypeScript', 'React + Vite', 'Next.js', 'JWT', '.NET'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'web',
  },
  {
    id: 5,
    title: 'Audio Transcriber',
    description: 'Herramienta de transcripción de audio a texto estructurado y verificable: sube el archivo, transcribe con marcas de tiempo por palabra, reproduce, revisa, edita el texto y los segmentos, y exporta la transcripción en JSON.',
    image: '/audio-transcriber.png',
    tags: ['Python', 'Flask', 'React', 'Vite', 'Tailwind CSS', 'OpenAI Whisper'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'web',
  },
]

// Paleta de colores para los puntos de las tecnologías
const tagColors = [
  'bg-accent',
  'bg-blue-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-violet-500',
  'bg-cyan-500',
  'bg-orange-500',
]

// Color consistente: la misma tecnología siempre tiene el mismo punto de color
const getTagColor = (tag) => {
  let hash = 0
  for (let i = 0; i < tag.length; i++) {
    hash = (hash * 31 + tag.charCodeAt(i)) >>> 0
  }
  return tagColors[hash % tagColors.length]
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    if (selectedProject) {
      window.addEventListener('keydown', handleEsc)
    }
    return () => window.removeEventListener('keydown', handleEsc)
  }, [selectedProject])

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="proyectos" ref={ref} className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Mi Trabajo</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi pasión por crear 
            experiencias digitales excepcionales.
          </p>
          <p className="text-muted-foreground/60 text-sm max-w-xl mx-auto mt-3">
            Estos son algunos de los más recientes e importantes (no son todos).
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="wait">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div
                      className="glass-card rounded-2xl overflow-hidden hover-lift cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                          <motion.a
                            href={project.liveUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="p-3 bg-accent text-background rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Ver proyecto"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            onClick={(e) => e.stopPropagation()}
                            className="p-3 bg-foreground/10 backdrop-blur text-foreground rounded-full"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Ver código"
                          >
                            <Github size={20} />
                          </motion.a>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted text-foreground/70 text-xs rounded-full"
                            >
                              <span className={`w-2 h-2 rounded-full ${getTagColor(tag)}`} />
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="mt-4 inline-block text-xs text-accent font-medium">
                          Ver detalles →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="lg:hidden">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={projects[currentIndex]?.image}
                      alt={projects[currentIndex]?.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {projects[currentIndex]?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {projects[currentIndex]?.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[currentIndex]?.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted text-foreground/70 text-xs rounded-full"
                        >
                          <span className={`w-2 h-2 rounded-full ${getTagColor(tag)}`} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={projects[currentIndex]?.liveUrl}
                        className="flex-1 py-3 bg-accent text-background text-center rounded-full font-medium"
                      >
                        Ver Proyecto
                      </a>
                      <a
                        href={projects[currentIndex]?.githubUrl}
                        className="p-3 border border-secondary/30 rounded-full"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={prevProject}
                  className="p-3 glass-card rounded-full hover:bg-accent/20 transition-colors"
                  aria-label="Proyecto anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? 'bg-accent w-6' : 'bg-muted'
                      }`}
                      aria-label={`Ir al proyecto ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextProject}
                  className="p-3 glass-card rounded-full hover:bg-accent/20 transition-colors"
                  aria-label="Siguiente proyecto"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal con la información completa del proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-2xl max-w-lg w-full overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur rounded-full text-foreground hover:bg-accent hover:text-background transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted text-foreground/70 text-xs rounded-full"
                    >
                      <span className={`w-2 h-2 rounded-full ${getTagColor(tag)}`} />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {selectedProject.liveUrl !== '#' && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-accent text-background text-center rounded-full font-medium inline-flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} /> Ver Proyecto
                    </a>
                  )}
                  {selectedProject.githubUrl !== '#' && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-secondary/30 rounded-full"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {selectedProject.liveUrl === '#' && selectedProject.githubUrl === '#' && (
                    <p className="text-muted-foreground text-sm text-center w-full py-2">
                      Próximamente
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
