import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          className="relative w-24 h-24 mx-auto mb-8"
        >
          <motion.div
            className="absolute inset-0 border-4 border-accent/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ boxShadow: '0 0 20px rgba(212, 165, 116, 0.2)' }}
          />
          <motion.div
            className="absolute inset-2 border-4 border-t-accent border-r-transparent border-b-transparent border-l-transparent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ boxShadow: '0 0 15px rgba(212, 165, 116, 0.3)' }}
          />
          <motion.div
            className="absolute inset-4 border-4 border-secondary/50 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ boxShadow: '0 0 10px rgba(196, 168, 130, 0.2)' }}
          />
        </motion.div>
        
        <motion.h2
          className="font-display text-3xl gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Bienvenido
        </motion.h2>
        
        <motion.div
          className="mt-4 flex gap-1 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
