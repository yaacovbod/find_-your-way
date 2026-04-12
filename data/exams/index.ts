import { exam16382 } from './16382'
import { exam163821 } from './163821'
import type { ExamData } from '@/types/game'

export const allExams: ExamData[] = [exam16382, exam163821]

export function getExamById(id: string): ExamData | undefined {
  return allExams.find((e) => e.id === id)
}
