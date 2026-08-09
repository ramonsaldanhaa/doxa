interface TestimonialCardProps {
  initials: string
  label: string
  category: string
  metric1: { label: string; value: string }
  metric2: { label: string; value: string }
  result: { label: string; value: string }
}

/**
 * Placeholder — troque pelos clientes reais da Heat Company (com autorização deles)
 * antes de publicar. Ver README.md.
 */
export function TestimonialCard({
  initials,
  label,
  category,
  metric1,
  metric2,
  result,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
          {initials}
        </div>
        <div>
          <p className="text-sm font-bold">{label}</p>
          <p className="text-xs uppercase tracking-wide text-muted-2">{category}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-2">{metric1.label}</p>
          <p className="mt-1 text-sm font-bold">{metric1.value}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-2">{metric2.label}</p>
          <p className="mt-1 text-sm font-bold">{metric2.value}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-2">{result.label}</p>
          <p className="mt-1 text-sm font-bold text-primary">{result.value}</p>
        </div>
      </div>
    </div>
  )
}
