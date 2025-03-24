import { twMerge } from "tailwind-merge";

type TCheckboxProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
    label?: string;
    disabled?: boolean;
};

const Checkbox = ({ checked, onChange, className, label, disabled }: TCheckboxProps) => {
    return (
        <label
            className={twMerge(
                "flex items-center gap-2 text-sm cursor-pointer select-none text-textPrimary dark:text-textPrimary-dark",
                disabled && "cursor-not-allowed opacity-60",
                className
            )}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
                className="h-4 w-4 border-gray-300 rounded-md text-primary focus:ring-primary dark:focus:ring-primary-dark dark:border-gray-600"
                aria-checked={checked}
            />
            {label && <span>{label}</span>}
        </label>
    );
};
export default Checkbox;