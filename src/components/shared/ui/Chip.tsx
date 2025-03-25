import { twMerge } from 'tailwind-merge';

type TChipProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
};

const Chip = ({ label, selected, onClick, className }: TChipProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={twMerge(
        'rounded-full px-3 py-1 text-sm font-medium transition-all',
        'border border-gray-400 text-gray-700 dark:border-gray-600 dark:text-gray-200',
        'hover:bg-gray-200 dark:hover:bg-gray-700',
        selected && 'border-primary bg-primary text-white',
        className,
      )}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
};

export default Chip;
