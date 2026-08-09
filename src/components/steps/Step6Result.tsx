import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/Button'
import type { Profile } from '@/types/quiz'

interface Step6ResultProps {
  name: string
  profile: Profile | null
}

const benefits = [
  'Roteiro, avatar, voz e edição gerados por IA a partir do seu conteúdo',
  'Vídeos pensados para o público certo do seu mercado',
  'Publicação recorrente sem precisar gravar nada',
]

export function Step6Result({ name, profile }: Step6ResultProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-lg px-4 text-center"
    >
      <span className="inline-block rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
        Análise concluída
      </span>
      <h1 className="mt-4 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
        {name ? `${name}, seu` : 'Seu'} perfil tem potencial de viralização{' '}
        <span className="text-primary">alto</span>
      </h1>
      <p className="mt-3 text-muted">
        Com base no seu perfil como {profile?.toLowerCase() ?? 'especialista'}, a Heat Company
        identificou uma oportunidade clara de gerar conteúdo em escala usando IA.
      </p>

      <div className="mt-6 flex flex-col gap-3 rounded-xl border border-border bg-card p-5 text-left">
        {benefits.map((b) => (
          <div key={b} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-muted">{b}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {/* TODO: trocar pelo link real de WhatsApp/Calendly da oferta antes de publicar */}
        <Button onClick={() => window.open('https://wa.me/5500000000000', '_blank')}>
          Falar com a Heat Company →
        </Button>
        <p className="mt-3 text-xs text-muted-2">
          Um especialista vai te mostrar como aplicar isso no seu perfil.
        </p>
      </div>
    </motion.section>
  )
}
