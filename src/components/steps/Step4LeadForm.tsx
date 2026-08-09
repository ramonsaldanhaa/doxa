import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/Button'
import { motion } from 'framer-motion'
import type { QuizData } from '@/types/quiz'

interface Step4LeadFormProps {
  data: QuizData
  onUpdate: (patch: Partial<QuizData>) => void
  onNext: () => void
  name: string
}

const revenueOptions = [
  'Começando agora',
  'De 10k a 30k',
  'De 30 a 50k',
  'De 50 a 100k',
  'Mais de 100k',
]

export function Step4LeadForm({ data, onUpdate, onNext, name }: Step4LeadFormProps) {
  const canContinue =
    data.whatsapp.trim().length >= 8 &&
    data.email.includes('@') &&
    data.instagram.trim().length > 0 &&
    Boolean(data.revenue)

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

      <div className="mt-6 flex flex-col gap-4">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Seu melhor WhatsApp
          </label>
          <input
            value={data.whatsapp}
            onChange={(e) => onUpdate({ whatsapp: e.target.value })}
            placeholder="(00) 00000-0000"
            inputMode="tel"
            className="w-full rounded-xl border border-border bg-card px-4 py-4 text-base outline-none placeholder:text-muted-2 focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Seu melhor e-mail
          </label>
          <input
            value={data.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            placeholder="voce@email.com"
            type="email"
            className="w-full rounded-xl border border-border bg-card px-4 py-4 text-base outline-none placeholder:text-muted-2 focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Qual é o seu Instagram?
          </label>
          <input
            value={data.instagram}
            onChange={(e) => onUpdate({ instagram: e.target.value })}
            placeholder="@seuusuario"
            className="w-full rounded-xl border border-border bg-card px-4 py-4 text-base outline-none placeholder:text-muted-2 focus:border-primary"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Faturamento atual do seu negócio
          </label>
          <div className="relative">
            <select
              value={data.revenue ?? ''}
              onChange={(e) => onUpdate({ revenue: e.target.value || null })}
              className="w-full appearance-none rounded-xl border border-border bg-card px-4 py-4 text-base text-foreground outline-none focus:border-primary"
            >
              <option value="" disabled className="text-muted-2">
                Selecione uma faixa
              </option>
              {revenueOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button onClick={onNext} disabled={!canContinue}>
          Continuar minha análise →
        </Button>
      </div>
    </motion.section>
  )
}
