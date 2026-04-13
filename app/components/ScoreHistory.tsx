'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import type { ScoreEntry } from '@/app/api/scores/route'

export default function ScoreHistory() {
  const { isSignedIn, isLoaded } = useUser()
  const [scores, setScores] = useState<ScoreEntry[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isSignedIn) return
    setLoading(true)
    fetch('/api/scores')
      .then((r) => r.json())
      .then((data) => setScores(Array.isArray(data) ? data : []))
      .catch(() => setScores([]))
      .finally(() => setLoading(false))
  }, [isSignedIn])

  if (!isLoaded || !isSignedIn) return null

  return (
    <div className="mt-10">
      <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
        Your Score History
      </h2>

      {loading && (
        <p className="text-slate-600 text-sm">Loading scores...</p>
      )}

      {!loading && scores.length === 0 && (
        <p className="text-slate-600 text-sm">No scores yet. Complete an exam to see your results here.</p>
      )}

      {!loading && scores.length > 0 && (
        <div className="space-y-2">
          {scores.slice(0, 10).map((entry, i) => {
            const pct = Math.round((entry.score / entry.totalPoints) * 100)
            const color = pct >= 70 ? 'text-green-400' : pct >= 55 ? 'text-amber-400' : 'text-red-400'
            const date = new Date(entry.date).toLocaleDateString('en-IL', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })
            return (
              <div
                key={i}
                className="flex items-center justify-between bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3"
              >
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{date}</div>
                  <div className="text-slate-300 text-sm font-medium">Exam #{entry.examId}</div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-black ${color}`}>{pct}%</div>
                  <div className="text-xs text-slate-500">
                    {entry.score}/{entry.totalPoints} pts
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
