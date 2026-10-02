import { useState } from "react";
import type { Flashcard as FlashcardType } from "../types/flashcard";

interface FlashcardProps {
  flashcard: FlashcardType;
}

function Flashcard({ flashcard }: FlashcardProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="flex min-h-[320px] w-full flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-lg transition-all duration-300 sm:min-h-[360px] sm:p-10">
        <span
          className={`mb-4 text-xs font-semibold uppercase tracking-wider ${
            showAnswer ? "text-emerald-600" : "text-indigo-600"
          }`}
        >
          {showAnswer ? "Answer" : "Question"}
        </span>

        <div className="flex min-h-[100px] items-center justify-center">
          <p className="max-w-xl text-xl font-bold leading-relaxed text-slate-900 sm:text-2xl">
            {showAnswer ? flashcard.answer : flashcard.question}
          </p>
        </div>

        <button
          type="button"
          onClick={handleShowAnswer}
          className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {showAnswer ? "Show Question" : "Show Answer"}
        </button>
      </div>
    </div>
  );
}

export default Flashcard;
