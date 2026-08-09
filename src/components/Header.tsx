import logo from '@/assets/heat-company-logo.webp'
import { DISPLAY_TOTAL_STEPS, STEP_DISPLAY_MAP } from '@/types/quiz'

interface HeaderProps {
  step: number
  onBack?: () => void
}

export function Header({ step, onBack }: HeaderProps) {
  const displayStep = STEP_DISPLAY_MAP[step] ?? step
  const percent = Math.round((displayStep / DISPLAY_TOTAL_STEPS) * 100)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <img src={logo} alt="Heat Company" className="h-8 w-auto sm:h-9" />
        <div className="text-right">
          <span className="block text-xs font-semibold tracking-wider text-foreground">
            Etapa {displayStep}/{DISPLAY_TOTAL_STEPS}
          </span>
          <span className="block text-[11px] text-muted-2">{percent}%</span>
        </div>
      </div>
      <div className="h-[3px] w-full bg-border">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      {onBack && (
        <div className="mx-auto max-w-5xl px-4 pt-3 sm:px-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            ← Voltar
          </button>
        </div>
      )}
    </header>
  )
}
