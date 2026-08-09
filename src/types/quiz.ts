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
