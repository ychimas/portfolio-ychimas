import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  Palette,
  Rocket,
  Users
} from 'lucide-react'

const stats = [
  { number: '26+', label: 'Tecnologías', icon: Code2 },
  { number: 'AWS', label: 'Nube', icon: Rocket },
  { number: 'Docker', label: 'Contenedores', icon: Palette },
  { number: 'SQL', label: 'Bases de Datos', icon: Users },
]

const profileImage = './foto.png'

const techLogos = [
  { name: 'Python', logo: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-python-an-interpreted-high-level-general-purpose-programming-language-logo-bold-tal-revivo.png' },
  { name: 'React', logo: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-bold-tal-revivo.png' },
  { name: 'Node.js', logo: 'https://img.icons8.com/windows/96/node-js.png' },
  { name: 'Django', logo: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-bold-tal-revivo.png' },
  { name: 'Tailwind CSS', logo: 'https://img.icons8.com/fluency/96/tailwind_css.png' },
  { name: 'Next.js', logo: 'https://img.icons8.com/color/480/nextjs.png' },
  { name: 'MongoDB', logo: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png' },
  { name: 'MySQL', logo: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-mysql-an-open-source-relational-database-management-system-logo-bold-tal-revivo.png' },
  { name: 'Oracle', logo: 'https://img.icons8.com/color/480/oracle-logo.png' },
  { name: 'PostgreSQL', logo: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-bold-tal-revivo.png' },
  { name: 'C#', logo: 'https://dl.svgcdn.com/png/simple-icons/csharp-800.png' },
  { name: 'FastAPI', logo: 'https://dl.svgcdn.com/png/logos/fastapi-icon-800.png' },
  { name: 'Docker', logo: 'https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-docker-a-set-of-coupled-software-as-a-service-logo-bold-tal-revivo.png' },
  { name: 'AWS', logo: 'https://img.icons8.com/material-outlined/96/amazon-web-services.png' },
  { name: 'Vercel', logo: 'https://img.icons8.com/ios-filled/50/vercel.png' },
  { name: 'GitHub Copilot', logo: 'tech-icons/copilot.png' },
  { name: 'Trae', logo: '/tech-icons/trae.png' },
  { name: 'PHP', logo: 'https://img.icons8.com/nolan/64/php--v2.png' },
  { name: 'ASP.NET', logo: '/tech-icons/aspnet.png' },
  { name: 'ChatGPT', logo: 'https://img.icons8.com/ios/50/chatgpt.png' },
  { name: 'Claude', logo: '/tech-icons/claude.png' },
  { name: 'Gemini', logo: '/tech-icons/gemini.png' },
  { name: 'Scrum', logo: '/tech-icons/scrum.png' },
  { name: 'Git', logo: 'https://img.icons8.com/ios-filled/50/git.png' },
  { name: 'Jira', logo: '/tech-icons/jira.png' },
  { name: 'SQL Server', logo: '/tech-icons/sqlserver.png' },
]

// Dos filas para el carrusel (se mueven en direcciones opuestas)
const halfIndex = Math.ceil(techLogos.length / 2)
const techRowOne = techLogos.slice(0, halfIndex)
const techRowTwo = techLogos.slice(halfIndex)

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="sobre-mi" ref={ref} className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Conóceme</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ingeniero de Sistemas apasionado por la tecnología y las soluciones innovadoras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="relative h-full glass-card rounded-3xl overflow-hidden border border-accent/20">
                <div className="relative w-full h-full bg-gradient-to-br from-card to-muted">
                  <img
                    src={profileImage}
                    alt="Foto de Yesith Chimas"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-accent/10" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-center bg-gradient-to-t from-background/80 to-transparent">
                    <p className="font-display text-2xl gradient-text">Yesith Chimás</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Sobre Mí
            </h3>

            <p className="text-foreground/70 leading-relaxed">
              Soy una persona con una actitud positiva y una gran motivación para aprender y dominar nuevos programas y tecnologías. Me adapto fácilmente a los cambios del entorno y tengo una gran capacidad para integrarme en diferentes equipos y proyectos.
            </p>

            <p className="text-foreground/70 leading-relaxed">
              Poseo una notable competencia tecnológica, con experiencia en desarrollo web, administración de bases de datos y despliegue de aplicaciones en la nube. Me considero una persona con gran capacidad de aprendizaje, siempre dispuesta a adquirir nuevas habilidades y conocimientos que contribuyan al éxito de mi equipo y de la organización.
            </p>

            <p className="text-foreground/70 leading-relaxed">
              Mi conocimiento en Python y JavaScript me ha permitido desarrollar aplicaciones web eficientes y escalables. Además, manejo bases de datos relacionales como Oracle, MySQL y PostgreSQL, y herramientas de contenedorización y despliegue como Docker y AWS.
            </p>
          </motion.div>
        </div>

        {/* Tech Stack Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="font-display text-2xl font-bold text-center mb-12">
            Tecnologías que manejo
          </h3>
          <div className="space-y-6">
            {/* Fila 1: se mueve a la izquierda */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-8 w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ x: { duration: 25, repeat: Infinity, ease: 'linear' } }}
              >
                {[...techRowOne, ...techRowOne].map((tech, index) => (
                  <div key={`fila1-${index}`} className="flex-shrink-0 glass-card p-6 rounded-2xl flex flex-col items-center gap-3 min-w-[120px] hover-lift">
                    <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(59%) sepia(93%) saturate(4086%) hue-rotate(153deg) brightness(96%) contrast(101%)' }} />
                    <span className="text-foreground/80 font-medium">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Fila 2: se mueve a la derecha */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-8 w-max"
                animate={{ x: ['-50%', '0%'] }}
                transition={{ x: { duration: 25, repeat: Infinity, ease: 'linear' } }}
              >
                {[...techRowTwo, ...techRowTwo].map((tech, index) => (
                  <div key={`fila2-${index}`} className="flex-shrink-0 glass-card p-6 rounded-2xl flex flex-col items-center gap-3 min-w-[120px] hover-lift">
                    <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(59%) sepia(93%) saturate(4086%) hue-rotate(153deg) brightness(96%) contrast(101%)' }} />
                    <span className="text-foreground/80 font-medium">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 rounded-2xl text-center hover-lift group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ borderColor: 'rgba(201, 162, 39, 0.5)' }}
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-display text-3xl lg:text-4xl font-bold gradient-text">{stat.number}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
