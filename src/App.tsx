import { useEffect, useState } from "react";
import Header from "./components/Header";
import Flashcard from "./components/Flashcard";
import CardNavigation from "./components/CardNavigation";
import CardActions from "./components/CardActions";
import FlashcardForm from "./components/FlashcardForm";
import { initialFlashcards } from "./data/initialFlashcards";
import type { Flashcard as FlashcardType } from "./types/flashcard";

const STORAGE_KEY = "flashcard-quiz-data";

function App() {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>(() => {
    const savedFlashcards = localStorage.getItem(STORAGE_KEY);

    if (savedFlashcards) {
      try {
        return JSON.parse(savedFlashcards) as FlashcardType[];
      } catch {
        return initialFlashcards;
      }
    }

    return initialFlashcards;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const [formMode, setFormMode] = useState<"add" | "edit" | null>(null);

  const currentFlashcard = flashcards[currentIndex];

  // Save flashcards whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(flashcards));
  }, [flashcards]);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleAddCard = () => {
    setFormMode("add");
  };

  const handleEditCard = () => {
    if (currentFlashcard) {
      setFormMode("edit");
    }
  };

  const handleDeleteCard = () => {
    if (!currentFlashcard) {
      return;
    }

    const updatedFlashcards = flashcards.filter(
      (flashcard) => flashcard.id !== currentFlashcard.id,
    );

    setFlashcards(updatedFlashcards);

    if (updatedFlashcards.length === 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= updatedFlashcards.length) {
      setCurrentIndex(updatedFlashcards.length - 1);
    }

    setFormMode(null);
  };

  const handleFormSubmit = (question: string, answer: string) => {
    if (formMode === "add") {
      const newFlashcard: FlashcardType = {
        id: Date.now().toString(),
        question,
        answer,
      };

      setFlashcards((prev) => [...prev, newFlashcard]);
      setCurrentIndex(flashcards.length);
    }

    if (formMode === "edit" && currentFlashcard) {
      setFlashcards((prev) =>
        prev.map((flashcard) =>
          flashcard.id === currentFlashcard.id
            ? {
                ...flashcard,
                question,
                answer,
              }
            : flashcard,
        ),
      );
    }

    setFormMode(null);
  };

  const handleCancelForm = () => {
    setFormMode(null);
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col">
        <Header />

        <section className="flex flex-1 flex-col items-center">
          {currentFlashcard ? (
            <>
              <div className="mb-4 text-sm font-medium text-slate-500">
                Card {currentIndex + 1} of {flashcards.length}
              </div>

              <Flashcard
                key={currentFlashcard.id}
                flashcard={currentFlashcard}
              />

              <CardNavigation
                onPrevious={handlePrevious}
                onNext={handleNext}
                isFirstCard={currentIndex === 0}
                isLastCard={currentIndex === flashcards.length - 1}
              />

              <CardActions
                onAdd={handleAddCard}
                onEdit={handleEditCard}
                onDelete={handleDeleteCard}
              />

              {formMode && (
                <FlashcardForm
                  mode={formMode}
                  flashcard={formMode === "edit" ? currentFlashcard : undefined}
                  onSubmit={handleFormSubmit}
                  onCancel={handleCancelForm}
                />
              )}
            </>
          ) : (
            <>
              <div className="w-full max-w-2xl rounded-2xl bg-white p-8 text-center shadow-lg sm:p-10">
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  No Flashcards Available
                </h2>

                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                  Add a new flashcard to start studying.
                </p>

                <button
                  type="button"
                  onClick={handleAddCard}
                  className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  + Add Card
                </button>
              </div>

              {formMode === "add" && (
                <FlashcardForm
                  mode="add"
                  onSubmit={handleFormSubmit}
                  onCancel={handleCancelForm}
                />
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
