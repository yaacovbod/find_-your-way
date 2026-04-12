export type QuestionType =
  | 'multiple-choice'
  | 'click-text'
  | 'multi-select-options'
  | 'click-text-multi'

export interface ParagraphSentence {
  id: string
  text: string
}

export interface Paragraph {
  id: string
  sentences: ParagraphSentence[]
}

export interface Question {
  id: number
  type: QuestionType
  paragraphId: string
  instruction: string
  question: string
  questionPrefix?: string
  options?: string[]
  correctOption?: number
  correctOptions?: number[]
  correctSentenceIds?: string[]
  requiredSelections?: number
  hint: string
  points: number
}

export interface ExamData {
  id: string
  title: string
  subject: string
  year: string
  text: {
    title: string
    paragraphs: Paragraph[]
  }
  questions: Question[]
}
