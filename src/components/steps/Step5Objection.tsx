import { SingleChoiceQuestion } from '@/components/SingleChoiceQuestion'

interface Step5ObjectionProps {
  onSelect: (option: string) => void
}

const options = [
  'Não tenho tempo para gravar',
  'Não sei o que falar nos vídeos',
  'Não consigo manter constância',
  'Eu gravo, mas meus vídeos não viralizam',
  'Não gosto de aparecer na câmera',
  'Já tentei contratar alguém, mas não tive resultado',
  'Outro motivo',
]

export function Step5Objection({ onSelect }: Step5ObjectionProps) {
  return (
    <SingleChoiceQuestion
      title="O que mais te impede de se posicionar nas redes sociais?"
      options={options}
      onSelect={onSelect}
    />
  )
}
