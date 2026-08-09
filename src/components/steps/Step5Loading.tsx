import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'

interface Step5LoadingProps {
  onDone: () => void
  name: string
}

const messages = [
  'Analisando seu perfil e mercado...',
  'Cruzando dados com os vídeos que mais viralizam no seu nicho...',
  'Montando seu diagnóstico personalizado...',
]

export function Step5Loading({ onDone, name }: Step5LoadingProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (activeIndex >= messages.length) {
      const timeout = setTimeout(onDone, 700)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => setActiveIndex((i) => i + 1), 1100)
    return () => clearTimeout(timeout)
  }, [activeIndex, onDone])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto flex max-w-md flex-col items-center px-4 text-center"
    >
      <h1 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
        {name ? `${name}, estamos` : 'Estamos'} gerando sua análise
      </h1>

      <div className="mt-10 flex flex-col gap-4 self-stretch text-left">
        {messages.map((msg, i) => {
          const state = i < activeIndex ? 'done' : i === activeIndex ? 'active' : 'pending'
          return (
            <div key={msg} className="flex items-center gap-3">
              {state === 'done' && <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />}
              {state === 'active' && (
                <Loader2 className="h-5 w-5 shrink-0 animate-spin text-primary" />
              )}
              {state === 'pending' && (
                <span className="h-5 w-5 shrink-0 rounded-full border-2 border-border" />
              )}
              <span
                className={
                  state === 'pending' ? 'text-sm text-muted-2' : 'text-sm text-foreground'
                }
              >
                {msg}
              </span>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}
