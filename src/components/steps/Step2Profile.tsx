import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/Button'
import { cn } from '@/lib/utils'
import type { Profile, QuizData } from '@/types/quiz'

interface Step2ProfileProps {
  data: QuizData
  onUpdate: (patch: Partial<QuizData>) => void
  onNext: () => void
}

const profiles: Profile[] = ['Médico', 'Advogado', 'Mentor ou especialista', 'Empresário', 'Outro']

export function Step2Profile({ data, onUpdate, onNext }: Step2ProfileProps) {
  const [showInsight, setShowInsight] = useState(Boolean(data.profile))

  function selectProfile(profile: Profile) {
    onUpdate({ profile })
    setShowInsight(true)
  }

  const canContinue = data.name.trim().length > 0 && Boolean(data.profile)

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-lg px-4"
    >
      <h1 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
        Antes de começar, como podemos te chamar?
      </h1>
      <p className="mt-3 text-muted">
        Seu diagnóstico será personalizado com base no seu perfil, objetivo e mercado.
      </p>

      <input
        value={data.name}
        onChange={(e) => onUpdate({ name: e.target.value })}
        placeholder="Seu primeiro nome"
        className="mt-6 w-full rounded-xl border border-border bg-card px-4 py-4 text-base text-foreground outline-none placeholder:text-muted-2 focus:border-primary"
      />

      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">
        Qual opção melhor descreve você?
      </p>
      <div className="mt-3 flex flex-col gap-3">
        {profiles.map((p) => (
          <button
            key={p}
            onClick={() => selectProfile(p)}
            className={cn(
              'flex items-center gap-3 rounded-xl border px-4 py-4 text-left font-semibold transition-colors',
              data.profile === p
                ? 'border-primary bg-primary/10'
                : 'border-border bg-card hover:border-muted-2',
            )}
          >
            <span
              className={cn(
                'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2',
                data.profile === p ? 'border-primary' : 'border-muted-2',
              )}
            >
              {data.profile === p && <span className="h-2 w-2 rounded-full bg-primary" />}
            </span>
            {p}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {showInsight && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 overflow-hidden"
          >
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-5 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Dado do seu mercado
              </p>
              <p className="mt-2 text-3xl font-extrabold">60%</p>
              <p className="mt-1 text-sm text-muted">
                da decisão de compra acontece antes do primeiro contato comercial.
              </p>
              <p className="mt-3 text-sm text-muted-2">
                Marcas cujo fundador aparece e comunica geram mais confiança, atraem talentos e
                fecham negócios com menos esforço de prospecção ativa.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-muted-2">
                Fonte: Gartner — B2B Buying Journey
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8">
        <Button onClick={onNext} disabled={!canContinue}>
          Continuar análise →
        </Button>
      </div>
    </motion.section>
  )
}
