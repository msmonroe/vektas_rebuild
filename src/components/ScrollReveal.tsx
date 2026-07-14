import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type ScrollRevealProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  )
}
