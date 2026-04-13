'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import type { ExamData, Question, Paragraph } from '@/types/game'

type Phase = 'intro' | 'stage' | 'feedback' | 'complete'

type AnswerResult = 'full' | 'partial' | 'wrong' | null

type SentenceState = 'default' | 'selected' | 'correct' | 'wrong' | 'reveal'

export default function GameClient({ exam }: { exam: ExamData }) {
  const { isSignedIn } = useUser()
  const [phase, setPhase] = useState<Phase>('intro')
  const [stageIndex, setStageIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<number[]>([])
  const [selectedSentences, setSelectedSentences] = useState<string[]>([])
  const [answerResult, setAnswerResult] = useState<AnswerResult>(null)
  const [score, setScore] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const scoreSavedRef = useRef(false)

  const totalStages = exam.questions.length
  const question = exam.questions[stageIndex]
  const paragraph = exam.text.paragraphs.find((p) => p.id === question?.paragraphId)
  const totalPoints = exam.questions.reduce((s, q) => s + q.points, 0)

  useEffect(() => {
    if (phase !== 'complete' || !isSignedIn || scoreSavedRef.current) return
    scoreSavedRef.current = true
    fetch('/api/scores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        examId: exam.id,
        examTitle: exam.text.title,
        score,
        totalPoints,
      }),
    }).catch(() => {})
  }, [phase, isSignedIn, exam.id, exam.text.title, score, totalPoints])

  function resetSelection() {
    setSelectedOption(null)
    setSelectedOptions([])
    setSelectedSentences([])
    setShowHint(false)
  }

  function checkAnswer() {
    let result: AnswerResult = 'wrong'
    let earned = 0

    switch (question.type) {
      case 'multiple-choice':
        result = selectedOption === question.correctOption ? 'full' : 'wrong'
        break
      case 'multi-select-options': {
        const correctSet = question.correctOptions ?? []
        const hits = selectedOptions.filter((i) => correctSet.includes(i)).length
        if (hits === correctSet.length) result = 'full'
        else if (hits > 0) result = 'partial'
        else result = 'wrong'
        break
      }
      case 'click-text':
        result =
          selectedSentences.length === 1 &&
          (question.correctSentenceIds?.includes(selectedSentences[0]) ?? false)
            ? 'full'
            : 'wrong'
        break
      case 'click-text-multi': {
        const correctSet = question.correctSentenceIds ?? []
        const hits = selectedSentences.filter((id) => correctSet.includes(id)).length
        if (hits === (question.requiredSelections ?? 2)) result = 'full'
        else if (hits > 0) result = 'partial'
        else result = 'wrong'
        break
      }
    }

    if (result === 'full') earned = question.points
    else if (result === 'partial') earned = Math.floor(question.points / 2)

    setAnswerResult(result)
    setScore((prev) => prev + earned)
    setPhase('feedback')
  }

  function nextStage() {
    if (stageIndex + 1 >= totalStages) {
      setPhase('complete')
    } else {
      setStageIndex((prev) => prev + 1)
      resetSelection()
      setAnswerResult(null)
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
      if (!isSelected && isInCorrectSet && answerResult !== 'full') return 'reveal'
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

          {/* Save score notice */}
          {!isSignedIn && (
            <p className="text-slate-500 text-xs mb-4">
              Sign in to save your scores and track your progress.
            </p>
          )}
          {isSignedIn && (
            <p className="text-green-500 text-xs mb-4">Score saved to your account.</p>
          )}

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
                setAnswerResult(null)
                scoreSavedRef.current = false
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
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2.5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-2">
          {/* Title – hidden on small screens to save space */}
          <p className="hidden sm:block text-xs text-amber-400 font-bold tracking-widest uppercase truncate">
            FIND YOUR WAY · BAGRUT
          </p>
          {/* Mobile: just show exam title short */}
          <p className="sm:hidden text-xs text-amber-400 font-bold truncate max-w-[140px]">
            {exam.text.title}
          </p>

          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-right">
              <p className="text-xs text-slate-500 leading-none">Score</p>
              <p className="font-bold text-amber-400 text-sm leading-tight">
                {score}<span className="text-slate-600">/{totalPoints}</span>
              </p>
            </div>
            <div className="bg-slate-700 rounded-lg px-2.5 py-1 text-center">
              <p className="text-xs text-slate-500 leading-none">Stage</p>
              <p className="font-black text-slate-200 text-sm leading-tight">
                {stageIndex + 1}<span className="text-slate-500">/{totalStages}</span>
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

      {/* Main content – extra bottom padding on mobile for fixed action bar */}
      <div className="max-w-5xl mx-auto p-4 lg:p-6 pb-40 lg:pb-6">
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

          {/* ── RIGHT: Question + desktop controls ── */}
          <div className="flex flex-col gap-4">
            <QuestionCard
              question={question}
              stageIndex={stageIndex}
              phase={phase}
              selectedOption={selectedOption}
              selectedOptions={selectedOptions}
              answerResult={answerResult}
              onOptionSelect={handleOptionSelect}
            />

            {/* Desktop-only controls (hidden on mobile – shown in fixed bar below) */}
            <ActionArea
              phase={phase}
              showHint={showHint}
              hint={question.hint}
              answerResult={answerResult}
              isCheckEnabled={isCheckEnabled()}
              isLastStage={stageIndex + 1 >= totalStages}
              onShowHint={() => setShowHint(true)}
              onCheck={checkAnswer}
              onNext={nextStage}
              className="hidden lg:flex flex-col gap-3"
            />
          </div>
        </div>
      </div>

      {/* ── Mobile fixed bottom action bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20 bg-slate-950/95 backdrop-blur-sm border-t border-slate-800 px-4 pt-3 pb-5">
        <ActionArea
          phase={phase}
          showHint={showHint}
          hint={question.hint}
          answerResult={answerResult}
          isCheckEnabled={isCheckEnabled()}
          isLastStage={stageIndex + 1 >= totalStages}
          onShowHint={() => setShowHint(true)}
          onCheck={checkAnswer}
          onNext={nextStage}
          className="flex flex-col gap-2"
        />
      </div>
    </div>
  )
}

// ── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function ActionArea({
  phase,
  showHint,
  hint,
  answerResult,
  isCheckEnabled,
  isLastStage,
  onShowHint,
  onCheck,
  onNext,
  className,
}: {
  phase: Phase
  showHint: boolean
  hint: string
  answerResult: AnswerResult
  isCheckEnabled: boolean
  isLastStage: boolean
  onShowHint: () => void
  onCheck: () => void
  onNext: () => void
  className: string
}) {
  return (
    <div className={className}>
      {phase === 'stage' && (
        <>
          {!showHint ? (
            <button
              onClick={onShowHint}
              className="w-full py-2.5 border border-slate-600 hover:border-amber-500 text-slate-400 hover:text-amber-300 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>💡</span> Show Hint
            </button>
          ) : (
            <div className="bg-amber-950/40 border border-amber-700/40 rounded-xl p-3">
              <p className="text-xs font-bold text-amber-400 mb-1 uppercase tracking-widest">Hint</p>
              <p className="text-amber-200 text-sm leading-relaxed">{hint}</p>
            </div>
          )}
          <button
            onClick={onCheck}
            disabled={!isCheckEnabled}
            className="w-full py-4 rounded-2xl font-black text-lg bg-amber-500 hover:bg-amber-400 text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            CHECK ANSWER
          </button>
        </>
      )}
      {phase === 'feedback' && (
        <>
          <div
            className={`p-3 rounded-xl text-center font-bold text-base border ${
              answerResult === 'full'
                ? 'bg-green-900/40 text-green-300 border-green-700/50'
                : answerResult === 'partial'
                ? 'bg-amber-900/40 text-amber-300 border-amber-700/50'
                : 'bg-red-900/40 text-red-300 border-red-700/50'
            }`}
          >
            {answerResult === 'full'
              ? '✓ Correct! Well done!'
              : answerResult === 'partial'
              ? '◑ Partially correct – 1 out of 2 (half points)'
              : '✗ Not quite right – see the correct answer highlighted'}
          </div>
          <button
            onClick={onNext}
            className="w-full py-4 rounded-2xl font-black text-lg bg-amber-500 hover:bg-amber-400 text-slate-900 transition-all"
          >
            {isLastStage ? 'SEE RESULTS 🏁' : 'NEXT STAGE →'}
          </button>
        </>
      )}
    </div>
  )
}

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

  const base = 'block rounded-lg px-3 py-3 transition-all text-sm leading-snug'
  const sentenceColors: Record<SentenceState, string> = {
    default: isClickable
      ? `${base} hover:bg-blue-500/20 hover:text-slate-100 cursor-pointer active:bg-blue-500/30`
      : `${base} cursor-default`,
    selected: `${base} bg-blue-500/30 text-blue-200 border border-blue-500/40`,
    correct:  `${base} bg-green-500/30 text-green-200 border border-green-500/40`,
    wrong:    `${base} bg-red-500/30 text-red-200 border border-red-500/40`,
    reveal:   `${base} bg-amber-500/20 text-amber-200 border border-amber-500/40 animate-pulse`,
  }

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">
          Paragraph {paragraph.id}
        </span>
        {needsClick && phase === 'stage' && (
          <span className="text-xs text-slate-500">
            {question.type === 'click-text-multi'
              ? selectionCount >= required
                ? '✓ Ready to check'
                : `Tap ${required - selectionCount} more`
              : selectionCount === 0
              ? 'Tap a sentence'
              : '✓ Selected'}
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

      {/* Scrollable on mobile so it doesn't push content off screen */}
      <div className="overflow-y-auto max-h-[38vh] lg:max-h-none space-y-1">
        {paragraph.sentences.map((sentence) => {
          const state = getSentenceState(sentence.id)
          return (
            <span
              key={sentence.id}
              role={isClickable ? 'button' : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onClick={() => onSentenceClick(sentence.id)}
              onKeyDown={(e) => e.key === 'Enter' && onSentenceClick(sentence.id)}
              className={sentenceColors[state]}
            >
              {sentence.text}
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
  answerResult,
  onOptionSelect,
}: {
  question: Question
  stageIndex: number
  phase: Phase
  selectedOption: number | null
  selectedOptions: number[]
  answerResult: AnswerResult
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
