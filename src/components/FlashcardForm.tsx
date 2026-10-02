import { useEffect, useState } from "react";
import type { Flashcard } from "../types/flashcard";

interface FlashcardFormProps {
  mode?: "add" | "edit";
  flashcard?: Flashcard;
  onSubmit?: (question: string, answer: string) => void;
  onCancel?: () => void;
}

function FlashcardForm({
  mode = "add",
  flashcard,
  onSubmit,
  onCancel,
}: FlashcardFormProps) {
  const [question, setQuestion] = useState(flashcard?.question ?? "");
  const [answer, setAnswer] = useState(flashcard?.answer ?? "");

  useEffect(() => {
    setQuestion(flashcard?.question ?? "");
    setAnswer(flashcard?.answer ?? "");
  }, [flashcard]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!question.trim() || !answer.trim()) {
      return;
    }

    onSubmit?.(question.trim(), answer.trim());
  };

  return (
    <div className="mt-8 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          {mode === "edit" ? "Edit Flashcard" : "Add New Flashcard"}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {mode === "edit"
            ? "Update the question and answer."
            : "Create a new question and answer."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="question"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Question
          </label>

          <textarea
            id="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Enter your question..."
            rows={4}
            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label
            htmlFor="answer"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Answer
          </label>

          <textarea
            id="answer"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="Enter the answer..."
            rows={4}
            className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {mode === "edit" ? "Save Changes" : "Add Card"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FlashcardForm;
