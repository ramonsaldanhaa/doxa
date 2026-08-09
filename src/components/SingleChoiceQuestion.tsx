import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface SingleChoiceQuestionProps {
  title: string
  subtitle?: string
  options: string[]
  onSelect: (option: string) => void
}

export function SingleChoiceQuestion({
  title,
  subtitle,
  options,
  onSelect,
}: SingleChoiceQuestionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-2xl px-4"
    >
      <h1 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">{title}</h1>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}

      <div className="mt-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary">
        <Sparkles className="h-4 w-4 shrink-0" />
        Toque em uma opção para continuar
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4 text-left font-semibold transition-colors hover:border-primary"
          >
            <span className="h-4 w-4 shrink-0 rounded-full border-2 border-muted-2" />
            {option}
          </button>
        ))}
      </div>
    </motion.section>
  )
}
