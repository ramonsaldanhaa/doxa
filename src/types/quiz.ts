export type Profile = 'Médico' | 'Advogado' | 'Mentor ou especialista' | 'Empresário' | 'Outro'

export interface QuizData {
  name: string
  profile: Profile | null
  comparisonAnswer: 1 | 2 | null
  whatsapp: string
  email: string
  instagram: string
  objection: string | null
  motivation: string | null
  otherProfession: string
}

export const initialQuizData: QuizData = {
  name: '',
  profile: null,
  comparisonAnswer: null,
  whatsapp: '',
  email: '',
  instagram: '',
  objection: null,
  motivation: null,
  otherProfession: '',
}

export const TOTAL_STEPS = 9

/**
 * Etapas de "relatório" (diagnóstico, resultados, confirmação final) não
 * avançam o número exibido no cabeçalho — elas ficam agrupadas com a
 * pergunta que as originou, para o funil mostrar no máximo 6 etapas.
 */
export const DISPLAY_TOTAL_STEPS = 6
export const STEP_DISPLAY_MAP: Record<number, number> = {
  1: 1, // Hero
  2: 2, // Nome + perfil
  3: 3, // Comparação
  4: 4, // Captura de lead
  5: 5, // Objeção
  6: 5, // Diagnóstico (relatório da objeção)
  7: 6, // Motivação
  8: 6, // Resultados (relatório da motivação)
  9: 6, // Confirmação final (relatório)
}
