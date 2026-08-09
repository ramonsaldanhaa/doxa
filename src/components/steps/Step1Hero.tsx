import { motion } from 'framer-motion'
import { Eye, Heart, MessageCircle } from 'lucide-react'
import { Button } from '@/components/Button'
import { VideoPlayer } from '@/components/VideoPlayer'

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
      <h1 className="text-lg font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
        Viralize para o público <span className="text-primary">certo</span> sem gravar um único
        vídeo.
      </h1>
      <p className="mt-1.5 max-w-xl text-[11px] leading-snug text-muted sm:mt-5 sm:text-lg">
        A IA da Heat Company transforma sua imagem e voz em vídeos prontos para viralizar. Veja um
        vídeo feito 100% por IA.
      </p>

      {/* Largura fixa (não dvh) — dvh tem suporte instável em navegadores in-app como o do WhatsApp */}
      <div className="mt-2 w-[34vw] max-w-[130px] sm:mt-8 sm:w-full sm:max-w-xs">
        <VideoPlayer src="/videos/hero.mp4" />
      </div>

      <div className="mt-2 grid w-full max-w-xs grid-cols-3 gap-2 rounded-xl border border-border bg-card p-2 sm:mt-6 sm:gap-3 sm:p-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-0.5 sm:gap-1">
            <Icon className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
            <span className="text-xs font-bold sm:text-sm">{value}</span>
            <span className="text-[8px] uppercase tracking-wide text-muted-2 sm:text-[10px]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-2 max-w-md text-[11px] text-muted-2 sm:mt-4 sm:text-sm">
        Este vídeo foi criado pela IA com base no que estava performando nesse nicho: assunto,
        gancho, roteiro, avatar e edição.
      </p>

      <div className="mt-3 w-full max-w-xs sm:mt-6">
        <Button onClick={onNext} className="py-2.5 text-sm sm:py-4 sm:text-base">
          Começar análise do meu perfil →
        </Button>
        <p className="mt-1.5 text-[10px] text-muted-2 sm:mt-3 sm:text-xs">Leva menos de 2 minutos.</p>
      </div>
    </motion.section>
  )
}
