import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Smartphone, Rocket, Server, Palette } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    description: 'Creo sitios web modernos, rápidos y escalables que se adaptan a las necesidades de tu negocio.',
    features: ['React / Next.js', 'Diseño responsive', 'Optimización', 'Buenas prácticas'],
  },
  {
    icon: Smartphone,
    title: 'Desarrollo de Apps Móviles',
    description: 'Desarrollo aplicaciones móviles intuitivas con una experiencia de usuario fluida y rendimiento óptimo.',
    features: ['React Native', 'iOS & Android', 'Notificaciones push', 'Soporte offline'],
  },
  {
    icon: Rocket,
    title: 'Deploy & DevOps',
    description: 'Despliego y automatizo la puesta en producción de tus aplicaciones de forma segura y eficiente.',
    features: ['CI/CD', 'Contenedores Docker', 'Despliegue en la nube', 'Monitoreo'],
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Construyo backends robustos y APIs RESTful seguras, escalables y bien documentadas.',
    features: ['Node.js / Python', 'Bases de datos SQL / NoSQL', 'Autenticación JWT', 'Documentación de API'],
  },
  {
    icon: Palette,
    title: 'Diseño UI/UX',
    description: 'Diseño interfaces atractivas y fáciles de usar centradas en la experiencia de tus usuarios.',
    features: ['Interfaces intuitivas', 'Prototipos', 'Design Systems', 'User Research'],
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="servicios" ref={ref} className="py-20 lg:py-32 relative bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Lo que ofrezco</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Mis <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrezco soluciones digitales completas para ayudar a tu negocio 
            a destacar en el mundo digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div 
                className="glass-card p-5 sm:p-8 rounded-2xl h-full hover-lift border border-transparent hover:border-accent/30 transition-all"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </motion.div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2 text-foreground/70 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte.
          </p>
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-full"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 162, 39, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Cotización
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
