import { motion } from 'framer-motion'
import { Camera, Mic, MessageSquareText, Search, PenLine, Clapperboard, Rocket, Zap } from 'lucide-react'
import { Button } from '@/components/Button'
import { VideoPlaceholder } from '@/components/VideoPlaceholder'

interface Step6DiagnosisProps {
  onNext: () => void
}

const youDo = [
  { icon: Camera, label: 'Envia uma foto sua' },
  { icon: Mic, label: 'Grava um áudio de até 5 minutos' },
  { icon: MessageSquareText, label: 'Responde 5 perguntas rápidas' },
]

const weDo = [
  { icon: Search, label: 'Analisa o que viraliza no seu nicho' },
  { icon: PenLine, label: 'Cria o roteiro com o seu conhecimento' },
  { icon: Clapperboard, label: 'Gera o vídeo com sua imagem e sua voz' },
  { icon: Rocket, label: 'Entrega tudo pronto para postar' },
]

export function Step6Diagnosis({ onNext }: Step6DiagnosisProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-2xl px-4"
    >
      <div className="rounded-xl border border-primary/40 bg-primary/10 p-5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
          <Zap className="h-4 w-4" /> Seu diagnóstico
        </div>
        <h1 className="mt-2 text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
          É exatamente isso que a Heat Company elimina.
        </h1>
        <p className="mt-2 text-sm text-muted">
          Você fornece as informações uma única vez. Depois, a plataforma pesquisa, cria e entrega
          seus vídeos prontos.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-2">O que você faz</p>
          <div className="mt-3 flex flex-col gap-3">
            {youDo.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-muted">
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-muted-2">
            O que a Heat Company faz
          </p>
          <div className="mt-3 flex flex-col gap-3">
            {weDo.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-sm text-muted">
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <VideoPlaceholder label="Cliente A" className="aspect-square" />
        <VideoPlaceholder label="Cliente B" className="aspect-square" />
        <VideoPlaceholder label="Cliente C" className="aspect-square" />
      </div>

      <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-5 text-center">
        <p className="text-sm font-semibold text-foreground">
          Esses vídeos não viralizam por sorte. A IA alcança o seu público sem você investir em
          tráfego pago.
        </p>
        <p className="mt-2 text-sm text-muted-2">
          Você dá o contexto uma única vez. A IA transforma isso em conteúdo constante.
        </p>
      </div>

      <div className="mt-6">
        <Button onClick={onNext}>Ver os resultados →</Button>
      </div>
    </motion.section>
  )
}
