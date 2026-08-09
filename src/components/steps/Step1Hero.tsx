import { motion } from 'framer-motion'
import { Eye, Heart, MessageCircle } from 'lucide-react'
import { Button } from '@/components/Button'
import { VideoPlaceholder } from '@/components/VideoPlaceholder'

interface Step1HeroProps {
  onNext: () => void
}

const stats = [
  { icon: Eye, value: '854 mil', label: 'views' },
  { icon: Heart, value: '12 mil', label: 'curtidas' },
  { icon: MessageCircle, value: '1.240', label: 'comentários' },
]

export function Step1Hero({ onNext }: Step1HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center"
    >
      <h1 className="text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
        Viralize para o público <span className="text-primary">certo</span> sem gravar um único
        vídeo.
      </h1>
      <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
        A IA da Heat Company transforma sua imagem e voz em vídeos prontos para viralizar. Veja um
        vídeo feito 100% por IA.
      </p>

      <div className="mt-8 w-full max-w-xs">
        <VideoPlaceholder label="Vídeo gerado por IA — Heat Company" />
      </div>

      <div className="mt-6 grid w-full max-w-xs grid-cols-3 gap-3 rounded-xl border border-border bg-card p-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <Icon className="h-4 w-4 text-primary" />
            <span className="text-sm font-bold">{value}</span>
            <span className="text-[10px] uppercase tracking-wide text-muted-2">{label}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-md text-sm text-muted-2">
        Este vídeo foi criado pela IA com base no que estava performando nesse nicho: assunto,
        gancho, roteiro, avatar e edição.
      </p>

      <div className="mt-8 w-full max-w-xs">
        <Button onClick={onNext}>Começar análise do meu perfil →</Button>
        <p className="mt-3 text-xs text-muted-2">Leva menos de 2 minutos.</p>
      </div>
    </motion.section>
  )
}
