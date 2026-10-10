import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'Soporte de Aplicaciones',
    company: 'JFSoftware sas',
    period: 'Actualidad',
    description: 'Me encargo del desarrollo y mantenimiento de aplicaciones web, trabajando en función de los requerimientos de la empresa. Además, manejo bases de datos según las tareas asignadas por la gerencia. Mi labor también incluye la identificación y corrección de errores, así como la implementación de mejoras en los sistemas. Colaboro en diversas tareas técnicas y administrativas que me son indicadas por el jefe.',
    skills: ['Python', 'Django', 'SQL', 'JavaScript'],
  },
  {
    type: 'work',
    title: 'Desarrollador Frontend',
    company: 'SOFACTIA SAS',
    period: 'Anteriormente',
    description: 'Participé en el desarrollo de aplicaciones internas orientadas a la automatización de procesos corporativos y a la creación de cursos e-learning empresariales. Apoyé el diseño, programación y optimización de soluciones web utilizando tecnologías como React, TypeScript, HTML, JS, PHP y CSS. También colaboré en procesos de despliegue, implementación y mejora de plataformas digitales, contribuyendo al desarrollo de herramientas que optimizaron el flujo de trabajo y la gestión de contenidos para diferentes clientes corporativos.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'PHP'],
  },
]

const education = [
  {
    type: 'education',
    title: 'Ingeniería de Sistemas',
    company: 'Universidad Popular del Cesar',
    period: '2020 - 2025 (Noveno Semestre)',
    description: 'Formación integral en desarrollo de software, bases de datos y arquitectura de sistemas.',
  },
  {
    type: 'education',
    title: 'Bachiller Académico',
    company: 'Institución Educativa Los Fundadores',
    period: '2018',
    description: 'Educación secundaria completa en Villanueva, La Guajira.',
  },
  {
    type: 'certification',
    title: 'Introducción a la Ciberseguridad',
    company: 'CISCO Networking Academy',
    period: 'Sep 2023',
    description: 'Curso de 6 horas virtual sobre fundamentos de seguridad informática.',
  },
  {
    type: 'certification',
    title: 'Seguridad de Terminales',
    company: 'CISCO Networking Academy',
    period: 'Nov 2023',
    description: 'Curso de 27 horas virtual sobre seguridad de dispositivos.',
  },
  {
    type: 'certification',
    title: 'Máster en SQL Server',
    company: 'Udemy',
    period: 'Ene 2023',
    description: 'Curso de 16 horas virtual sobre administración de SQL Server desde cero a nivel profesional.',
  },
]

const TimelineIcon = ({ type }) => {
  switch (type) {
    case 'work':
      return <Briefcase className="w-5 h-5" />
    case 'education':
      return <GraduationCap className="w-5 h-5" />
    case 'certification':
      return <Award className="w-5 h-5" />
    default:
      return <Briefcase className="w-5 h-5" />
  }
}

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="experiencia" ref={ref} className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Mi Trayectoria</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">Experiencia</span> & Educación
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi camino profesional y formación académica que me han preparado 
            para enfrentar desafíos técnicos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-accent" />
              Experiencia Laboral
            </h3>

            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-transparent" />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-8 sm:pl-12"
                  >
                    <div className="absolute left-0 w-6 h-6 sm:w-8 sm:h-8 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center text-accent">
                      <TimelineIcon type={exp.type} />
                    </div>
                    
                    <div className="glass-card p-6 rounded-2xl hover-lift group">
                      <span className="text-accent text-sm font-medium">{exp.period}</span>
                      <h4 className="font-display text-lg font-bold text-foreground mt-1 group-hover:text-accent transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                      <p className="text-foreground/70 text-sm mb-4">{exp.description}</p>
                      
                      {exp.skills && (
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-muted text-foreground/70 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent" />
              Educación & Certificaciones
            </h3>

            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-transparent" />
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="relative pl-8 sm:pl-12"
                  >
                    <div className="absolute left-0 w-6 h-6 sm:w-8 sm:h-8 bg-accent/20 border-2 border-accent rounded-full flex items-center justify-center text-accent">
                      <TimelineIcon type={edu.type} />
                    </div>
                    
                    <div className="glass-card p-6 rounded-2xl hover-lift group">
                      <span className="text-accent text-sm font-medium">{edu.period}</span>
                      <h4 className="font-display text-lg font-bold text-foreground mt-1 group-hover:text-accent transition-colors">
                        {edu.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-3">{edu.company}</p>
                      <p className="text-foreground/70 text-sm">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
