'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ExamData, Question, Paragraph } from '@/types/game'

type Phase = 'intro' | 'stage' | 'feedback' | 'complete'

type SentenceState = 'default' | 'selected' | 'correct' | 'wrong' | 'reveal'

export default function GameClient({ exam }: { exam: ExamData }) {
  const [phase, setPhase] = useState<Phase>('intro')
  const [stageIndex, setStageIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [selectedSentences, setSelectedSentences] = useState<string[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [showHint, setShowHint] = useState(false)

  const totalStages = exam.questions.length
  const question = exam.questions[stageIndex]
  const paragraph = exam.text.paragraphs.find((p) => p.id === question?.paragraphId)
  const totalPoints = exam.questions.reduce((s, q) => s + q.points, 0)

  function resetSelection() {
    setSelectedOption(null)
    setSelectedOptions([])
    setSelectedSentences([])
    setShowHint(false)
  }

  function checkAnswer() {
    let correct = false
    switch (question.type) {
      case 'multiple-choice':
        correct = selectedOption === question.correctOption
        break
      case 'multi-select-options': {
        const sortedSel = [...selectedOptions].sort().join(',')
        const sortedCor = [...(question.correctOptions ?? [])].sort().join(',')
        correct = sortedSel === sortedCor
        break
      }
      case 'click-text':
        correct =
          selectedSentences.length === 1 &&
          (question.correctSentenceIds?.includes(selectedSentences[0]) ?? false)
        break
      case 'click-text-multi': {
        const required = question.requiredSelections ?? 2
        correct =
          selectedSentences.length === required &&
          selectedSentences.every((id) => question.correctSentenceIds?.includes(id) ?? false)
        break
      }
    }
    setIsCorrect(correct)
    if (correct) setScore((prev) => prev + question.points)
    setPhase('feedback')
  }

  function nextStage() {
    if (stageIndex + 1 >= totalStages) {
      setPhase('complete')
    } else {
      setStageIndex((prev) => prev + 1)
      resetSelection()
      setIsCorrect(null)
      setPhase('stage')
    }
  }

  function handleSentenceClick(sentenceId: string) {
    if (phase !== 'stage') return
    if (question.type === 'click-text') {
      setSelectedSentences([sentenceId])
    } else if (question.type === 'click-text-multi') {
      const required = question.requiredSelections ?? 2
      setSelectedSentences((prev) => {
        if (prev.includes(sentenceId)) return prev.filter((id) => id !== sentenceId)
        if (prev.length >= required) return [...prev.slice(1), sentenceId]
        return [...prev, sentenceId]
      })
    }
  }

  function handleOptionSelect(idx: number) {
    if (phase !== 'stage') return
    if (question.type === 'multiple-choice') {
      setSelectedOption(idx)
    } else if (question.type === 'multi-select-options') {
      const required = question.requiredSelections ?? 2
      setSelectedOptions((prev) => {
        if (prev.includes(idx)) return prev.filter((i) => i !== idx)
        if (prev.length >= required) return [...prev.slice(1), idx]
        return [...prev, idx]
      })
    }
  }

  function isCheckEnabled(): boolean {
    switch (question?.type) {
      case 'multiple-choice':
        return selectedOption !== null
      case 'multi-select-options':
        return selectedOptions.length === (question.requiredSelections ?? 2)
      case 'click-text':
        return selectedSentences.length === 1
      case 'click-text-multi':
        return selectedSentences.length === (question.requiredSelections ?? 2)
    }
  }

  function getSentenceState(sentenceId: string): SentenceState {
    const isSelected = selectedSentences.includes(sentenceId)
    const isInCorrectSet = question.correctSentenceIds?.includes(sentenceId) ?? false

    if (phase === 'feedback') {
      if (isSelected && isInCorrectSet) return 'correct'
      if (isSelected && !isInCorrectSet) return 'wrong'
      if (!isSelected && isInCorrectSet && !isCorrect) return 'reveal'
      return 'default'
    }
    return isSelected ? 'selected' : 'default'
  }

  const isClickQuestion =
    question?.type === 'click-text' || question?.type === 'click-text-multi'

  // ── INTRO ────────────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
        <div className="max-w-xl w-full text-center">
          <p className="text-xs text-amber-400 font-bold tracking-widest uppercase mb-2">
            {exam.subject} · {exam.year}
          </p>
          <h1 className="text-3xl font-black text-slate-100 mb-1">{exam.text.title}</h1>
          <p className="text-slate-400 mb-8 text-sm">
            {totalStages} stages · {totalPoints} points total
          </p>

          {/* Text preview */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-left mb-8 max-h-64 overflow-y-auto">
            {exam.text.paragraphs.map((para) => (
              <p key={para.id} className="text-slate-300 text-sm leading-relaxed mb-3">
                <span className="font-bold text-amber-400 mr-2">{para.id}</span>
                {para.sentences.map((s) => s.text).join(' ')}
              </p>
            ))}
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-left mb-6 text-sm text-slate-400">
            <p className="mb-1">
              <span className="text-slate-200 font-semibold">Multiple choice:</span> click the correct answer
            </p>
            <p className="mb-1">
              <span className="text-slate-200 font-semibold">Write questions:</span> click the correct sentence in the text
            </p>
            <p>
              <span className="text-slate-200 font-semibold">Hint:</span> helps you think, does not give the answer
            </p>
          </div>

          <button
            onClick={() => setPhase('stage')}
            className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-xl rounded-2xl transition-all"
          >
            START GAME →
          </button>
          <Link href="/" className="block mt-4 text-slate-500 hover:text-slate-300 text-sm transition-colors">
            ← Back to exams
          </Link>
        </div>
      </div>
    )
  }

  // ── COMPLETE ─────────────────────────────────────────────────────────────
  if (phase === 'complete') {
    const pct = Math.round((score / totalPoints) * 100)
    const grade = pct >= 90 ? '🏆 Excellent!' : pct >= 70 ? '👍 Good job!' : pct >= 55 ? '📚 Keep studying!' : '💪 Try again!'
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full text-center">
          <div className="text-6xl mb-4">{pct >= 70 ? '🎉' : '📖'}</div>
          <h1 className="text-3xl font-black text-amber-400 mb-2">Game Complete!</h1>
          <p className="text-slate-400 mb-8">{exam.text.title}</p>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-6">
            <div className="text-7xl font-black text-amber-400 mb-1">{score}</div>
            <div className="text-slate-400 text-lg">out of {totalPoints} points</div>
            <div className="mt-4 text-2xl font-bold text-slate-200">{pct}%</div>
            <div className="mt-2 text-slate-300 font-semibold">{grade}</div>

            {/* Score bar */}
            <div className="mt-6 bg-slate-700 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-amber-500 transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Per-question breakdown */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 mb-6 text-left">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">Stages</p>
            {exam.questions.map((q, i) => (
              <div key={q.id} className="flex justify-between text-sm text-slate-400 py-1 border-b border-slate-700 last:border-0">
                <span>Stage {i + 1} – Q{q.id}</span>
                <span>{q.points} pts</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setPhase('intro')
                setStageIndex(0)
                setScore(0)
                resetSelection()
                setIsCorrect(null)
              }}
              className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold rounded-xl transition-all"
            >
              Play Again
            </button>
            <Link
              href="/"
              className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-all text-center"
            >
              Other Exams
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ── STAGE / FEEDBACK ─────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-amber-400 font-bold tracking-widest uppercase">
              FIND YOUR WAY · BAGRUT
            </p>
            <p className="text-slate-400 text-xs">{exam.text.title}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-500">Score</p>
              <p className="font-bold text-amber-400">
                {score}/{totalPoints}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500">Stage</p>
              <p className="font-bold text-slate-200">
                {stageIndex + 1}/{totalStages}
              </p>
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="max-w-5xl mx-auto mt-2 bg-slate-800 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full bg-amber-500 transition-all duration-500"
            style={{ width: `${((stageIndex + (phase === 'feedback' ? 1 : 0)) / totalStages) * 100}%` }}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── LEFT: Paragraph ── */}
          <ParagraphCard
            paragraph={paragraph!}
            question={question}
            phase={phase}
            isClickable={isClickQuestion && phase === 'stage'}
            getSentenceState={getSentenceState}
            onSentenceClick={handleSentenceClick}
            selectedSentences={selectedSentences}
          />

          {/* ── RIGHT: Question + Controls ── */}
          <div className="flex flex-col gap-4">
            <QuestionCard
              question={question}
              stageIndex={stageIndex}
              phase={phase}
              selectedOption={selectedOption}
              selectedOptions={selectedOptions}
              isCorrect={isCorrect}
              onOptionSelect={handleOptionSelect}
            />

            {/* Hint */}
            {phase === 'stage' && (
              <div>
                {!showHint ? (
                  <button
                    onClick={() => setShowHint(true)}
                    className="w-full py-2.5 border border-slate-600 hover:border-amber-500 text-slate-400 hover:text-amber-300 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <span>💡</span> Show Hint
                  </button>
                ) : (
                  <div className="bg-amber-950/40 border border-amber-700/40 rounded-xl p-4">
                    <p className="text-xs font-bold text-amber-400 mb-1 uppercase tracking-widest">
                      Hint
                    </p>
                    <p className="text-amber-200 text-sm leading-relaxed">{question.hint}</p>
                  </div>
                )}
              </div>
            )}

            {/* Check / Next buttons */}
            {phase === 'stage' && (
              <button
                onClick={checkAnswer}
                disabled={!isCheckEnabled()}
                className="w-full py-4 rounded-2xl font-black text-lg bg-amber-500 hover:bg-amber-400 text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                CHECK ANSWER
              </button>
            )}

            {phase === 'feedback' && (
              <div className="space-y-3">
                <div
                  className={`p-4 rounded-xl text-center font-bold text-lg border ${
                    isCorrect
                      ? 'bg-green-900/40 text-green-300 border-green-700/50'
                      : 'bg-red-900/40 text-red-300 border-red-700/50'
                  }`}
                >
                  {isCorrect
                    ? '✓ Correct! Well done!'
                    : '✗ Not quite right – see the correct answer highlighted in the text'}
                </div>
                <button
                  onClick={nextStage}
                  className="w-full py-4 rounded-2xl font-black text-lg bg-amber-500 hover:bg-amber-400 text-slate-900 transition-all"
                >
                  {stageIndex + 1 >= totalStages ? 'SEE RESULTS 🏁' : 'NEXT STAGE →'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function ParagraphCard({
  paragraph,
  question,
  phase,
  isClickable,
  getSentenceState,
  onSentenceClick,
  selectedSentences,
}: {
  paragraph: Paragraph
  question: Question
  phase: Phase
  isClickable: boolean
  getSentenceState: (id: string) => SentenceState
  onSentenceClick: (id: string) => void
  selectedSentences: string[]
}) {
  const selectionCount = selectedSentences.length
  const required = question.requiredSelections ?? 1
  const needsClick = question.type === 'click-text' || question.type === 'click-text-multi'

  const sentenceColors: Record<SentenceState, string> = {
    default: isClickable
      ? 'hover:bg-blue-500/20 hover:text-slate-100 cursor-pointer rounded-lg px-2 py-1 -mx-2 transition-all'
      : 'rounded-lg px-2 py-1 -mx-2',
    selected: 'bg-blue-500/30 text-blue-200 border border-blue-500/40 rounded-lg px-2 py-1 -mx-2',
    correct: 'bg-green-500/30 text-green-200 border border-green-500/40 rounded-lg px-2 py-1 -mx-2',
    wrong: 'bg-red-500/30 text-red-200 border border-red-500/40 rounded-lg px-2 py-1 -mx-2',
    reveal: 'bg-amber-500/20 text-amber-200 border border-amber-500/40 rounded-lg px-2 py-1 -mx-2 animate-pulse',
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">
          Paragraph {paragraph.id}
        </span>
        {needsClick && phase === 'stage' && (
          <span className="text-xs text-slate-500">
            {question.type === 'click-text-multi'
              ? `Select ${required - selectionCount} more`
              : selectionCount === 0
              ? 'Click a sentence'
              : 'Selected – check or change'}
          </span>
        )}
        {needsClick && phase === 'feedback' && (
          <span className="text-xs text-slate-500">
            <span className="text-green-400">■</span> correct{' '}
            <span className="text-red-400">■</span> wrong{' '}
            <span className="text-amber-400">■</span> answer
          </span>
        )}
      </div>

      <div className="text-slate-300 text-sm leading-8 space-y-1">
        {paragraph.sentences.map((sentence) => {
          const state = getSentenceState(sentence.id)
          return (
            <span
              key={sentence.id}
              onClick={() => onSentenceClick(sentence.id)}
              className={`inline ${sentenceColors[state]}`}
            >
              {sentence.text}{' '}
            </span>
          )
        })}
      </div>
    </div>
  )
}

function QuestionCard({
  question,
  stageIndex,
  phase,
  selectedOption,
  selectedOptions,
  isCorrect,
  onOptionSelect,
}: {
  question: Question
  stageIndex: number
  phase: Phase
  selectedOption: number | null
  selectedOptions: number[]
  isCorrect: boolean | null
  onOptionSelect: (idx: number) => void
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
      {/* Stage badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-amber-500 text-slate-900 text-xs font-black px-2.5 py-1 rounded-full">
          STAGE {stageIndex + 1}
        </span>
        <span className="text-slate-500 text-xs font-semibold">
          {question.points} points
        </span>
      </div>

      {/* Question text */}
      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">
        {question.instruction}
      </p>
      <p className="text-slate-100 font-semibold text-base leading-snug mb-4">
        {question.question}
      </p>

      {/* Prefix for complete-the-answer questions */}
      {question.questionPrefix && (
        <div className="bg-slate-700/60 rounded-lg px-3 py-2 mb-4 text-slate-300 text-sm italic">
          {question.questionPrefix}
        </div>
      )}

      {/* Multiple choice options */}
      {(question.type === 'multiple-choice' || question.type === 'multi-select-options') &&
        question.options && (
          <div className="space-y-2">
            {question.options.map((opt, idx) => {
              const isSingleSelected = question.type === 'multiple-choice' && selectedOption === idx
              const isMultiSelected = question.type === 'multi-select-options' && selectedOptions.includes(idx)
              const isSelected = isSingleSelected || isMultiSelected

              let style = 'border-slate-700 bg-slate-700/40 text-slate-300 hover:border-slate-500 hover:bg-slate-700'
              if (phase === 'stage' && isSelected) {
                style = 'border-blue-500 bg-blue-500/20 text-blue-200'
              }
              if (phase === 'feedback') {
                const isCorrectOption =
                  question.type === 'multiple-choice'
                    ? idx === question.correctOption
                    : question.correctOptions?.includes(idx)
                if (isCorrectOption) {
                  style = 'border-green-500 bg-green-500/20 text-green-200'
                } else if (isSelected && !isCorrectOption) {
                  style = 'border-red-500 bg-red-500/20 text-red-200'
                } else {
                  style = 'border-slate-700 bg-slate-700/40 text-slate-500'
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => onOptionSelect(idx)}
                  disabled={phase === 'feedback'}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${style} ${phase === 'stage' ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        )}

      {/* Click-text instruction */}
      {(question.type === 'click-text' || question.type === 'click-text-multi') && (
        <div className="text-slate-400 text-sm bg-slate-700/40 rounded-xl p-3 flex items-start gap-2">
          <span className="text-lg">👆</span>
          <span>
            {question.type === 'click-text-multi'
              ? `Click on ${question.requiredSelections ?? 2} sentences in the text on the left.`
              : 'Click on the relevant sentence in the text on the left.'}
          </span>
        </div>
      )}
    </div>
  )
}
