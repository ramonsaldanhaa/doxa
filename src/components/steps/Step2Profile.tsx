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

interface MarketInsight {
  stat: string
  lead: string
  detail: string
  source: string
}

const marketInsights: Partial<Record<Profile, MarketInsight>> = {
  Médico: {
    stat: '83%',
    lead: 'dos pacientes pesquisam o profissional na internet antes de marcar consulta',
    detail:
      'Médicos com presença digital ativa relatam agenda mais previsível e menos dependência de convênio — o paciente chega já confiando, o que encurta a consulta e aumenta o valor percebido.',
    source: 'Software Advice / Capterra — Patient Reviews Survey',
  },
  Advogado: {
    stat: '1 em cada 3',
    lead: 'clientes escolhe o advogado pelo conteúdo que viu antes de qualquer indicação',
    detail:
      'Escritórios que publicam com constância recebem leads mais qualificados e conseguem cobrar honorários acima da média por serem vistos como especialistas, não como opção genérica.',
    source: 'American Bar Association — Legal Technology Survey Report',
  },
  'Mentor ou especialista': {
    stat: '5x',
    lead: 'mais conversão para especialistas reconhecidos como autoridade no tema',
    detail:
      'Quem posiciona conhecimento em vídeo vende com menos reuniões: a audiência já entendeu o método antes da conversa, o que reduz o ciclo de venda e aumenta o ticket.',
    source: 'Edelman–LinkedIn B2B Thought Leadership Impact Report',
  },
  Empresário: {
    stat: '60%',
    lead: 'da decisão de compra acontece antes do primeiro contato comercial',
    detail:
      'Empresas cujo fundador aparece e comunica geram mais confiança, atraem talentos e fecham negócios com menos esforço de prospecção ativa.',
    source: 'Gartner — B2B Buying Journey',
  },
}

export function Step2Profile({ data, onUpdate, onNext }: Step2ProfileProps) {
  const [showInsight, setShowInsight] = useState(Boolean(data.profile))

  function selectProfile(profile: Profile) {
    onUpdate({ profile })
    setShowInsight(true)
  }

  const insight = data.profile ? marketInsights[data.profile] : undefined
  const isOther = data.profile === 'Outro'

  const canContinue =
    data.name.trim().length > 0 &&
    Boolean(data.profile) &&
    (!isOther || data.otherProfession.trim().length > 0)

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
        {showInsight && isOther && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 overflow-hidden"
          >
            <label className="mb-1.5 block text-sm font-semibold text-foreground">
              Qual é a sua área de atuação?
            </label>
            <input
              value={data.otherProfession}
              onChange={(e) => onUpdate({ otherProfession: e.target.value })}
              placeholder="Ex.: nutricionista, arquiteto, consultor..."
              className="w-full rounded-xl border border-border bg-card px-4 py-4 text-base text-foreground outline-none placeholder:text-muted-2 focus:border-primary"
            />
          </motion.div>
        )}

        {showInsight && insight && (
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
              <p className="mt-2 text-3xl font-extrabold">{insight.stat}</p>
              <p className="mt-1 text-sm text-muted">{insight.lead}</p>
              <p className="mt-3 text-sm text-muted-2">{insight.detail}</p>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-muted-2">
                Fonte: {insight.source}
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
