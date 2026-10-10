import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Ubicación', value: 'Villanueva, La Guajira, Colombia' },
  { icon: Mail, label: 'Email', value: 'yesithchimas3@gmail.com' },
  { icon: Phone, label: 'Teléfono', value: '+57 3005546355' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contacto" ref={ref} className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">Hablemos</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Ponte en <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharte. 
            Envíame un mensaje y te responderé lo antes posible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground mb-8">
                Estoy disponible para proyectos freelance, colaboraciones 
                o simplemente para charlar sobre tecnología.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 rounded-3xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-muted-foreground">
                    Gracias por contactarme. Te responderé pronto.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-foreground/80 text-sm mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-foreground/80 text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-foreground/80 text-sm mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground/80 text-sm mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent text-background font-semibold rounded-xl flex items-center justify-center gap-2 disabled:opacity-70"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(201, 162, 39, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-background border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
