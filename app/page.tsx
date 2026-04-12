import Link from 'next/link'
import { allExams } from '@/data/exams'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Logo / Title */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-6xl">🗺️</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-amber-400 mb-2">
            FIND YOUR WAY
          </h1>
          <p className="text-xl font-semibold text-slate-300 tracking-widest uppercase">
            Bagrut Version
          </p>
          <p className="mt-4 text-slate-400 text-sm">
            Practice English reading comprehension – one question per stage
          </p>
        </div>

        {/* Exam list */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-3">
            Available Exams
          </h2>
          {allExams.map((exam) => (
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
        </div>

        <p className="text-center text-slate-600 text-xs mt-10">
          Exam #{allExams[0]?.id} · Ministry of Education Israel
        </p>
      </div>
    </div>
  )
}
