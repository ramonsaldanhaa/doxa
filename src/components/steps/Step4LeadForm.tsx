import { Button } from '@/components/Button'
import { motion } from 'framer-motion'
import type { QuizData } from '@/types/quiz'

interface Step4LeadFormProps {
  data: QuizData
  onUpdate: (patch: Partial<QuizData>) => void
  onNext: () => void
  name: string
}

export function Step4LeadForm({ data, onUpdate, onNext, name }: Step4LeadFormProps) {
  const canContinue =
    data.whatsapp.trim().length >= 8 && data.email.includes('@') && data.instagram.trim().length > 0

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-lg px-4"
    >
      <h1 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
        {name ? `${name}, falta` : 'Falta'} pouco para receber sua análise personalizada.
      </h1>
      <p className="mt-3 text-muted">
        Agora que você viu como é difícil identificar um vídeo feito por IA, preencha seus dados
        para analisarmos como a Heat Company pode aplicar essa tecnologia ao seu perfil.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <input
          value={data.whatsapp}
          onChange={(e) => onUpdate({ whatsapp: e.target.value })}
          placeholder="Seu melhor WhatsApp"
          inputMode="tel"
          className="w-full rounded-xl border border-border bg-card px-4 py-4 text-base outline-none placeholder:text-muted-2 focus:border-primary"
        />
        <input
          value={data.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
          placeholder="Seu melhor e-mail"
          type="email"
          className="w-full rounded-xl border border-border bg-card px-4 py-4 text-base outline-none placeholder:text-muted-2 focus:border-primary"
        />
        <input
          value={data.instagram}
          onChange={(e) => onUpdate({ instagram: e.target.value })}
          placeholder="Qual é o seu Instagram?"
          className="w-full rounded-xl border border-border bg-card px-4 py-4 text-base outline-none placeholder:text-muted-2 focus:border-primary"
        />
      </div>

      <div className="mt-8">
        <Button onClick={onNext} disabled={!canContinue}>
          Continuar minha análise →
        </Button>
      </div>
    </motion.section>
  )
}
