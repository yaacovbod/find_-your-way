'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ExamData } from '@/types/game'

type ModuleFilter = 'all' | 'C' | 'E'

export default function ExamList({ exams }: { exams: ExamData[] }) {
  const [active, setActive] = useState<ModuleFilter>('all')

  const filtered = exams.filter((exam) => {
    if (active === 'C') return exam.subject.includes('Module C')
    if (active === 'E') return exam.subject.includes('Module E')
    return true
  })

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mr-1">
          Module
        </span>
        {(['all', 'C', 'E'] as ModuleFilter[]).map((m) => (
          <button
            key={m}
            onClick={() => setActive(m)}
            className={`px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase transition-all border ${
              active === m
                ? 'bg-amber-500 text-slate-900 border-amber-500'
                : 'bg-transparent text-slate-400 border-slate-700 hover:border-amber-500 hover:text-amber-300'
            }`}
          >
            {m === 'all' ? 'All' : `Module ${m}`}
          </button>
        ))}
        <span className="ml-auto text-xs text-slate-600">
          {filtered.length} exam{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Exam cards */}
      <div className="space-y-4">
        {filtered.map((exam) => (
          <Link
            key={exam.id}
            href={`/game/${exam.id}`}
            className="block bg-slate-800 border border-slate-700 hover:border-amber-500 rounded-2xl p-6 transition-all hover:bg-slate-700 group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-amber-400 font-bold tracking-widest uppercase mb-1">
                  {exam.subject} · {exam.year}
                </div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {exam.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  {exam.questions.length} stages ·{' '}
                  {exam.questions.reduce((s, q) => s + q.points, 0)} points
                </p>
              </div>
              <div className="text-2xl text-slate-600 group-hover:text-amber-400 transition-colors">
                →
              </div>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="text-slate-600 text-sm text-center py-8">
            No exams available for this module yet.
          </p>
        )}
      </div>
    </div>
  )
}
