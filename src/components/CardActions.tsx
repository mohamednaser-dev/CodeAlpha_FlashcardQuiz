interface CardActionsProps {
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

function CardActions({ onAdd, onEdit, onDelete }: CardActionsProps) {
  return (
    <div className="mt-6 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
      <button
        type="button"
        onClick={onAdd}
        className="flex-1 rounded-lg border border-indigo-200 bg-indigo-50 px-5 py-3 text-sm font-semibold text-indigo-700 transition-colors duration-200 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        + Add Card
      </button>

      <button
        type="button"
        onClick={onEdit}
        className="flex-1 rounded-lg border border-amber-200 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-700 transition-colors duration-200 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
      >
        Edit Card
      </button>

      <button
        type="button"
        onClick={onDelete}
        className="flex-1 rounded-lg border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition-colors duration-200 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Delete Card
      </button>
    </div>
  );
}

export default CardActions;
