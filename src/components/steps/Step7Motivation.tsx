import { SingleChoiceQuestion } from '@/components/SingleChoiceQuestion'

interface Step7MotivationProps {
  onSelect: (option: string) => void
}

const options = [
  'Ter segurança com uma agenda cheia e previsível',
  'Parar de perder dinheiro com tráfego pago',
  'Ser reconhecido e cobrar o que meu trabalho realmente vale',
  'Ter mais tempo para mim e para minha família',
  'Ganhar mais sem depender de indicações',
]

export function Step7Motivation({ onSelect }: Step7MotivationProps) {
  return (
    <SingleChoiceQuestion
      title="O que mais mudaria sua vida se o seu posicionamento começasse a vender por você?"
      subtitle="Escolha o que mais faz sentido para você."
      options={options}
      onSelect={onSelect}
    />
  )
}
