import { twMerge } from "tailwind-merge";

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
                "px-3 py-1 rounded-full text-sm font-medium transition-all",
                "border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200",
                "hover:bg-gray-200 dark:hover:bg-gray-700",
                selected && "bg-primary text-white border-primary",
                className
            )}
            aria-pressed={selected}
        >
            {label}
        </button>
    );
};

export default Chip;
