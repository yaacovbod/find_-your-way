import { exam16382 } from './16382'
import { exam163821 } from './163821'
import { exam1638212 } from './1638212'
import { exam1638213 } from './1638213'
import { exam1638214 } from './1638214'
import { exam1638215 } from './1638215'
import type { ExamData } from '@/types/game'

export const allExams: ExamData[] = [exam16382, exam163821, exam1638212, exam1638213, exam1638214, exam1638215]

export function getExamById(id: string): ExamData | undefined {
  return allExams.find((e) => e.id === id)
}
