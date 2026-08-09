import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/Button'
import { VideoPlaceholder } from '@/components/VideoPlaceholder'
import { cn } from '@/lib/utils'
import type { QuizData } from '@/types/quiz'

interface Step3ComparisonProps {
  data: QuizData
  onUpdate: (patch: Partial<QuizData>) => void
  onNext: () => void
  name: string
}

export function Step3Comparison({ data, onUpdate, onNext, name }: Step3ComparisonProps) {
  const answered = data.comparisonAnswer !== null

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-2xl px-4 text-center"
    >
      <h1 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
        {name ? `${name}, ` : ''}qual destes vídeos foi feito por IA?
      </h1>
      <p className="mt-3 text-muted">
        Assista aos dois vídeos e escolha aquele que você acredita ter sido criado pela Heat
        Company.
      </p>

      {!answered && (
        <div className="mt-5 flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary">
          <Sparkles className="h-4 w-4" />
          Toque em um dos vídeos para responder
        </div>
      )}

      <div className="mt-6 grid grid-cols-2 gap-4">
        {([1, 2] as const).map((n) => (
          <button
            key={n}
            onClick={() => onUpdate({ comparisonAnswer: n })}
            className={cn(
              'rounded-2xl border-2 p-1.5 text-left transition-colors',
              data.comparisonAnswer === n ? 'border-primary' : 'border-transparent',
            )}
          >
            <VideoPlaceholder label={`Vídeo ${n}`} />
            <span className="mt-2 block text-center text-sm font-semibold">
              Escolher vídeo {n}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-xl border border-border bg-card p-5 text-left"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-primary">Você errou</p>
            <h2 className="mt-1 text-lg font-bold">Na verdade, os dois foram feitos por IA.</h2>
            <p className="mt-2 text-sm text-muted">
              Os dois vídeos foram criados pela IA da Heat Company, incluindo voz, avatar, roteiro
              e edição.
            </p>
            <p className="mt-2 text-sm text-muted-2">
              Se você não percebeu, quem te segue também não vai perceber.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {answered && (
        <div className="mt-6">
          <Button onClick={onNext}>Entender como funciona →</Button>
        </div>
      )}
    </motion.section>
  )
}
