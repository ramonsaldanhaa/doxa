interface TestimonialCardProps {
  initials: string
  name: string
  handle?: string
  category: string
  views: string
  followers: string
  resultValue: string
  resultDetail: string
  avatarUrl?: string
}

/**
 * Placeholder — troque pelos clientes reais da Heat Company (nome, foto e
 * métricas verificadas, com autorização deles) antes de publicar. Ver README.md.
 */
export function TestimonialCard({
  initials,
  name,
  handle,
  category,
  views,
  followers,
  resultValue,
  resultDetail,
  avatarUrl,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
            {initials}
          </div>
        )}
        <div>
          <p className="text-sm font-bold">{name}</p>
          {handle && <p className="text-xs text-muted-2">{handle}</p>}
          <p className="text-xs uppercase tracking-wide text-muted-2">{category}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-2">Visualizações</p>
          <p className="mt-1 text-sm font-bold">{views}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-2">Seguidores</p>
          <p className="mt-1 text-sm font-bold">{followers}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-2">Resultado</p>
          <p className="mt-1 text-sm font-bold text-primary">{resultValue}</p>
          <p className="text-[10px] leading-tight text-muted-2">{resultDetail}</p>
        </div>
      </div>
    </div>
  )
}
