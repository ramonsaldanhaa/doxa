import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'
import { Button } from '@/components/Button'
import { TestimonialCard } from '@/components/TestimonialCard'

interface Step8ResultsProps {
  onNext: () => void
}

const benefits = [
  'Vender mais sem investir em tráfego pago',
  'Sem perder tempo gravando vídeos',
  'Com a segurança de conteúdo feito para viralizar no seu nicho',
  'Autoridade construída todos os dias, no automático',
]

/**
 * Placeholders — substituir pelos clientes reais da Heat Company (nome, foto
 * e métricas verificadas, com autorização deles) antes de publicar.
 */
const testimonials = [
  {
    initials: 'CA',
    label: 'Cliente A',
    category: 'Médico',
    metric1: { label: 'Visualizações', value: '—' },
    metric2: { label: 'Seguidores', value: '—' },
    result: { label: 'Resultado', value: '—' },
  },
  {
    initials: 'CB',
    label: 'Cliente B',
    category: 'Mentor',
    metric1: { label: 'Visualizações', value: '—' },
    metric2: { label: 'Seguidores', value: '—' },
    result: { label: 'Resultado', value: '—' },
  },
  {
    initials: 'CC',
    label: 'Cliente C',
    category: 'Advogado',
    metric1: { label: 'Visualizações', value: '—' },
    metric2: { label: 'Seguidores', value: '—' },
    result: { label: 'Resultado', value: '—' },
  },
  {
    initials: 'CD',
    label: 'Cliente D',
    category: 'Empresário',
    metric1: { label: 'Visualizações', value: '—' },
    metric2: { label: 'Seguidores', value: '—' },
    result: { label: 'Resultado', value: '—' },
  },
]

export function Step8Results({ onNext }: Step8ResultsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-2xl px-4"
    >
      <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
        <p className="text-sm font-bold text-foreground">É exatamente isso que a Heat Company entrega:</p>
        <ul className="mt-3 flex flex-col gap-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-muted">
          <Rocket className="h-3.5 w-3.5 text-primary" /> Resultados comprovados
        </span>
        <h1 className="mt-3 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
          Resultados reais
        </h1>
        <p className="mt-2 max-w-md text-sm text-muted">
          Crescimento em audiência, seguidores e vendas com vídeos gerados por{' '}
          <span className="font-bold text-primary">IA</span>.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {testimonials.map((t) => (
          <TestimonialCard key={t.label} {...t} />
        ))}
      </div>

      <div className="mt-8">
        <Button onClick={onNext}>Quero aplicar isso ao meu perfil →</Button>
      </div>
    </motion.section>
  )
}
