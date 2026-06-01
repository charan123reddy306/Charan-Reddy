/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SURVIVAL_QUIZ } from "../data/campusData";
import { HelpCircle, CheckCircle2, XCircle, Trophy, RefreshCw, ChevronRight } from "lucide-react";

export default function SurvivalQuiz() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const activeQuestion = SURVIVAL_QUIZ[currentIdx];

  const handleOptionSelect = (optIdx: number) => {
    if (isAnswered) return;
    setSelectedAns(optIdx);
    setIsAnswered(true);

    if (optIdx === activeQuestion.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < SURVIVAL_QUIZ.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAns(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedAns(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const getBadgingAndMsg = (s: number) => {
    if (s === 5) return { badge: "Zen Senior in Disguise 🎓", css: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400", desc: "You absolute legend! You know Amrita's guidelines inside out. You'll make custom attendance buffers, eat Thursday paneer of course, and avoid DISCO committee rooms with breeze." };
    if (s >= 4) return { badge: "Savvy Hosteler 🍔", css: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-400", desc: "Fantastic job! You've grasped all critical survival tips. You are fully ready to settle into Vyas or Gargi blocks without panic." };
    if (s >= 3) return { badge: "Survivor Candidate 🏃", css: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400", desc: "Decent score! You know the core things but might get stopped by biometric scanners or ID checks once. Read the guides one more time!" };
    return { badge: "Clueless Fresher 🍼", css: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-400", desc: "Oh dear! You are bound to get lost in the academic block, dress in round t-shirts, or trigger curfew sirens. Spend some time reviewing the guide sections!" };
  };

  const badgeInfo = getBadgingAndMsg(score);

  return (
    <div id="survival-readiness-quiz" className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-6 shadow-sm">
      {!quizFinished ? (
        <div>
          {/* Quiz Header info */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-150 dark:border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950/40 flex items-center justify-center text-rose-600">
                <HelpCircle className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Amrita Survival Readiness Quiz</h3>
                <p className="text-[10px] text-zinc-500">Test if you can survive the first 30 days!</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-zinc-650">
                Question {currentIdx + 1} of {SURVIVAL_QUIZ.length}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-5">
            <h4 className="text-sm font-bold text-zinc-850 dark:text-zinc-150 leading-relaxed" id="lbl-quiz-question">
              {activeQuestion.question}
            </h4>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-5">
            {activeQuestion.options.map((option, idx) => {
              const isSelected = selectedAns === idx;
              const isCorrectOpt = idx === activeQuestion.correctAnswerIndex;
              let btnStyle = "bg-zinc-50 hover:bg-zinc-100 border-zinc-200 dark:bg-zinc-950/10 dark:hover:bg-zinc-900/55 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200";

              if (isAnswered) {
                if (isCorrectOpt) {
                  btnStyle = "bg-emerald-50 border-emerald-300 text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-800 dark:text-emerald-455";
                } else if (isSelected) {
                  btnStyle = "bg-red-50 border-red-300 text-red-850 dark:bg-red-950/20 dark:border-red-900 dark:text-red-405";
                } else {
                  btnStyle = "bg-zinc-50/40 border-zinc-100 text-zinc-400 dark:bg-zinc-950/5 dark:border-zinc-850 dark:text-zinc-600 cursor-not-allowed";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs font-semibold leading-relaxed transition-all duration-200 flex items-center justify-between ${btnStyle}`}
                  id={`btn-opt-${idx}`}
                >
                  <span>{option}</span>
                  {isAnswered && (
                    <span className="shrink-0 ml-2">
                      {isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      {isSelected && !isCorrectOpt && <XCircle className="w-4 h-4 text-red-500" />}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanatory notes */}
          {isAnswered && (
            <div className="bg-blue-50/50 dark:bg-blue-950/10 p-3.5 rounded-xl border border-blue-100/30 dark:border-blue-900/20 text-xs text-zinc-700 dark:text-zinc-300 mb-5 leading-relaxed">
              <strong className="text-blue-800 dark:text-blue-400 block mb-1">Senior's Insight:</strong>
              {activeQuestion.explanation}
            </div>
          )}

          {/* Nav Controls */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-black font-semibold text-xs px-4 py-2 rounded-xl transition-all"
                id="btn-quiz-next"
              >
                <span>{currentIdx + 1 === SURVIVAL_QUIZ.length ? "Finish Quiz" : "Next Question"}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Finished State */
        <div className="text-center py-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center mx-auto mb-4 border border-amber-200/40">
            <Trophy className="w-8 h-8 animate-bounce" />
          </div>

          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">Survival Drill Completed!</h3>
          <p className="text-xs text-zinc-500 mb-4">You scored <strong className="text-rose-500 font-mono text-sm">{score}</strong> out of <strong className="font-mono">{SURVIVAL_QUIZ.length}</strong> questions.</p>

          <div className="max-w-md mx-auto mb-6 bg-zinc-50 dark:bg-zinc-950/30 border border-zinc-150 dark:border-zinc-800 rounded-2xl p-5">
            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 shadow-sm ${badgeInfo.css}`}>
              {badgeInfo.badge}
            </span>
            <p className="text-xs text-zinc-600 dark:text-zinc-350 leading-relaxed">
              {badgeInfo.desc}
            </p>
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-zinc-150 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-xl font-bold text-xs transition-colors"
            id="btn-quiz-restart"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retake Survival Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
}
