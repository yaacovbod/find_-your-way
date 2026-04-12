import { notFound } from 'next/navigation'
import { getExamById } from '@/data/exams'
import GameClient from './GameClient'

interface Props {
  params: Promise<{ examId: string }>
}

export default async function GamePage({ params }: Props) {
  const { examId } = await params
  const exam = getExamById(examId)

  if (!exam) notFound()

  return <GameClient exam={exam} />
}
