import { auth } from '@clerk/nextjs/server'
import { put, list } from '@vercel/blob'
import { NextResponse } from 'next/server'

export interface ScoreEntry {
  examId: string
  examTitle: string
  score: number
  totalPoints: number
  date: string
}

export async function GET() {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { blobs } = await list({ prefix: `scores/${userId}.json` })
    if (blobs.length === 0) return NextResponse.json([])

    const res = await fetch(blobs[0].url)
    const scores: ScoreEntry[] = await res.json()
    return NextResponse.json(scores)
  } catch {
    return NextResponse.json([])
  }
}

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { examId, examTitle, score, totalPoints } = await req.json()

  let scores: ScoreEntry[] = []
  try {
    const { blobs } = await list({ prefix: `scores/${userId}.json` })
    if (blobs.length > 0) {
      const res = await fetch(blobs[0].url)
      scores = await res.json()
    }
  } catch {
    scores = []
  }

  const newEntry: ScoreEntry = {
    examId,
    examTitle,
    score,
    totalPoints,
    date: new Date().toISOString(),
  }

  scores.unshift(newEntry)

  await put(`scores/${userId}.json`, JSON.stringify(scores), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
  })

  return NextResponse.json({ ok: true })
}
