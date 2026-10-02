interface CardNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  isFirstCard?: boolean;
  isLastCard?: boolean;
}

function CardNavigation({
  onPrevious,
  onNext,
  isFirstCard = false,
  isLastCard = false,
}: CardNavigationProps) {
  return (
    <div className="mt-6 flex w-full max-w-2xl items-center justify-between gap-4">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstCard}
        className="flex flex-1 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Previous
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isLastCard}
        className="flex flex-1 items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next →
      </button>
    </div>
  );
}

export default CardNavigation;
