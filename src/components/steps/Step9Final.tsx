import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface Step9FinalProps {
  name: string
}

export function Step9Final({ name }: Step9FinalProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-2xl px-4"
    >
      <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-muted">
        <Sparkles className="h-3.5 w-3.5 text-primary" /> Diagnóstico concluído
      </span>

      <h1 className="mt-4 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
        Aplicação recebida{name ? `, ${name}` : ''}!
      </h1>
      <p className="mt-3 text-muted">
        Um especialista da Heat Company entrará em contato pelo seu WhatsApp.
      </p>

      <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-6">
        <p className="text-3xl font-extrabold text-primary">62% a mais</p>
        <p className="mt-2 text-sm font-semibold text-foreground">
          é o potencial de aumento em alcance e vendas, sem investir em tráfego pago, para quem
          transforma posicionamento em conteúdo constante.
        </p>
        <p className="mt-3 text-xs text-muted-2">
          Indicador de referência, não promessa de resultado. O desempenho varia conforme o nicho,
          oferta e consistência.
        </p>
      </div>
    </motion.section>
  )
}
