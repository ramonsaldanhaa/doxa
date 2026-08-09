import { cn } from '@/lib/utils'

interface MediaThumbnailProps {
  src: string
  caption: string
  className?: string
}

export function MediaThumbnail({ src, caption, className }: MediaThumbnailProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border border-border bg-black',
        className,
      )}
    >
      <img src={src} alt={caption} className="h-full w-full object-cover" />
    </div>
  )
}
