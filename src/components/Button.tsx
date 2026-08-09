import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-base font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-40',
        variant === 'primary' &&
          'bg-primary text-white hover:bg-primary-hover active:scale-[0.98]',
        variant === 'outline' &&
          'border border-border bg-transparent text-foreground hover:border-primary',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
