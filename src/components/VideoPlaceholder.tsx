import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoPlaceholderProps {
  label?: string
  className?: string
}

export function VideoPlaceholder({ label = 'Vídeo de exemplo', className }: VideoPlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden rounded-2xl border border-dashed border-border bg-gradient-to-b from-card to-black',
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
          <Play className="h-6 w-6 fill-primary text-primary" />
        </div>
        <p className="text-sm text-muted-2">{label}</p>
      </div>
    </div>
  )
}
