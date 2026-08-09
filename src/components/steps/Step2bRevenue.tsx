import { SingleChoiceQuestion } from '@/components/SingleChoiceQuestion'

interface Step2bRevenueProps {
  onSelect: (option: string) => void
}

const options = [
  'Ainda não faturo R$ 50 mil',
  'De R$ 50 mil a R$ 200 mil',
  'De R$ 200 mil a meio milhão',
  'Mais de meio milhão',
]

export function Step2bRevenue({ onSelect }: Step2bRevenueProps) {
  return (
    <SingleChoiceQuestion
      title="Qual o faturamento atual do seu negócio?"
      subtitle="Isso ajuda a calibrar sua análise para o tamanho certo de operação."
      options={options}
      onSelect={onSelect}
    />
  )
}
