'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ExamData } from '@/types/game'

type ModuleFilter = 'C' | 'E'

export default function ExamList({ exams }: { exams: ExamData[] }) {
  const [active, setActive] = useState<ModuleFilter>('C')

  const filtered = exams.filter((exam) => {
    if (active === 'C') return exam.subject.includes('Module C')
    return exam.subject.includes('Module E')
  })

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="text-xs font-bold tracking-widest uppercase text-slate-500 mr-1">
          Module
        </span>
        {(['C', 'E'] as ModuleFilter[]).map((m) => (
          <button
            key={m}
            onClick={() => setActive(m)}
            className={`px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase transition-all border ${
              active === m
                ? 'bg-violet-600 text-white border-violet-600 shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                : 'bg-transparent text-slate-400 border-slate-700 hover:border-violet-500 hover:text-violet-300'
            }`}
          >
            {`Module ${m}`}
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
            className="block bg-slate-900/70 border border-slate-700/60 hover:border-violet-500 rounded-2xl p-6 transition-all hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-violet-400 font-bold tracking-widest uppercase mb-1">
                  {exam.subject} · {exam.year}
                </div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
                  {exam.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  {exam.questions.length} stages ·{' '}
                  {exam.questions.reduce((s, q) => s + q.points, 0)} points
                </p>
              </div>
              <div className="text-2xl text-slate-600 group-hover:text-violet-400 transition-colors">
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
