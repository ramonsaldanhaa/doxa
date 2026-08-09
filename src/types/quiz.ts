export type Profile = 'Médico' | 'Advogado' | 'Mentor ou especialista' | 'Empresário' | 'Outro'

export interface QuizData {
  name: string
  profile: Profile | null
  otherProfession: string
  revenue: string | null
  comparisonAnswer: 1 | 2 | null
  whatsapp: string
  email: string
  instagram: string
  objection: string | null
  motivation: string | null
}

export const initialQuizData: QuizData = {
  name: '',
  profile: null,
  otherProfession: '',
  revenue: null,
  comparisonAnswer: null,
  whatsapp: '',
  email: '',
  instagram: '',
  objection: null,
  motivation: null,
}

export const TOTAL_STEPS = 10

/**
 * Etapas de "relatório" ou de qualificação complementar não avançam o
 * número exibido no cabeçalho — elas ficam agrupadas com a etapa que as
 * originou, para o funil mostrar no máximo 6 etapas.
 */
export const DISPLAY_TOTAL_STEPS = 6
export const STEP_DISPLAY_MAP: Record<number, number> = {
  1: 1, // Hero
  2: 2, // Nome + perfil
  3: 2, // Faturamento (agrupada com a qualificação de perfil)
  4: 3, // Comparação
  5: 4, // Captura de lead
  6: 5, // Objeção
  7: 5, // Diagnóstico (relatório da objeção)
  8: 6, // Motivação
  9: 6, // Resultados (relatório da motivação)
  10: 6, // Confirmação final (relatório)
}
