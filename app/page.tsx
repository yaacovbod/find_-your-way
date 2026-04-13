import { allExams } from '@/data/exams'
import ScoreHistory from './components/ScoreHistory'
import ExamList from './components/ExamList'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-6 pt-12">
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

        {/* Exam list with module filter */}
        <ExamList exams={allExams} />

        {/* Score history – shown only when signed in */}
        <ScoreHistory />

        <p className="text-center text-slate-600 text-xs mt-10 pb-10">
          Ministry of Education Israel
        </p>
      </div>
    </div>
  )
}
