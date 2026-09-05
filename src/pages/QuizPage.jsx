import React, { useState } from 'react';
import { QUIZZES } from '../data/quizzes';
import { Award, CheckCircle2, HelpCircle, Flame, RotateCcw, Sparkles } from 'lucide-react';

export default function QuizPage() {
  const quiz = QUIZZES[0];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const q = quiz.questions[currentIdx];

  const handleOptionClick = (idx) => {
    if (showAnswer) return;
    setSelectedOption(idx);
    setShowAnswer(true);
    if (idx === q.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quiz.questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6B1D2F]/30 border border-[#6B1D2F] text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
          <Award className="w-4 h-4 text-[#C85A32]" />
          Heritage Knowledge Arena
        </div>
        <h1 className="text-3xl sm:text-5xl font-heritage font-bold text-[#F7F3E9]">
          {quiz.title}
        </h1>
        <p className="text-sm text-[#EFE6D5]/70 max-w-xl mx-auto">
          {quiz.description}
        </p>
      </div>

      {/* Quiz Box */}
      {!completed ? (
        <div className="bg-[#1C1613] rounded-3xl p-6 sm:p-10 border-gold-glow space-y-6">
          <div className="flex items-center justify-between text-xs text-[#D4AF37] border-b border-[#362A24] pb-4">
            <span className="font-semibold flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#C85A32]" /> Question {currentIdx + 1} of {quiz.questions.length}
            </span>
            <span className="bg-[#C85A32]/20 text-[#C85A32] px-3 py-1 rounded-full font-bold">
              Current XP Score: {score * 35} XP
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-heritage font-bold text-[#F7F3E9] leading-snug">
            {q.question}
          </h2>

          <div className="space-y-3 pt-2">
            {q.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === q.correctAnswer;
              
              let btnStyle = "bg-[#241E1C] text-[#EFE6D5]/90 border-[#362A24] hover:border-[#D4AF37]/50";
              if (showAnswer) {
                if (isCorrect) btnStyle = "bg-emerald-950/70 text-emerald-300 border-emerald-500";
                else if (isSelected) btnStyle = "bg-rose-950/70 text-rose-300 border-rose-500";
              } else if (isSelected) {
                btnStyle = "bg-[#C85A32]/20 text-[#D4AF37] border-[#D4AF37]";
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleOptionClick(idx)}
                  className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {showAnswer && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                </button>
              );
            })}
          </div>

          {showAnswer && (
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#14100E] border border-[#D4AF37]/30 text-xs sm:text-sm text-[#EFE6D5]/90 leading-relaxed">
                <span className="font-bold text-[#D4AF37]">Historical Detail: </span>
                {q.explanation}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#B34726] text-white font-medium text-sm hover:shadow-lg transition-all"
                >
                  {currentIdx + 1 < quiz.questions.length ? "Next Question →" : "View Final Score"}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[#1C1613] rounded-3xl p-10 border-gold-glow text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C85A32] p-1 shadow-xl">
            <div className="w-full h-full bg-[#14100E] rounded-full flex items-center justify-center text-4xl">
              🏆
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-heritage font-bold text-[#F7F3E9]">Quest Completed!</h2>
            <p className="text-sm text-[#EFE6D5]/80">
              You scored <span className="text-[#D4AF37] font-bold">{score} / {quiz.questions.length}</span> correct answers!
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#241E1C] border border-[#D4AF37]/30 text-[#D4AF37] font-bold text-sm">
            <Sparkles className="w-4 h-4 text-[#C85A32]" />
            Unlocked Badge: Ancient Architect +100 XP
          </div>

          <div>
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#B34726] text-white font-medium text-sm flex items-center gap-2 mx-auto"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Challenge</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
