import { twMerge } from 'tailwind-merge';

type TCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  label?: string;
  disabled?: boolean;
};

const Checkbox = ({
  checked,
  onChange,
  className,
  label,
  disabled,
}: TCheckboxProps) => {
  return (
    <label
      className={twMerge(
        'flex cursor-pointer select-none items-center gap-2 text-sm text-textPrimary dark:text-textPrimary-dark',
        disabled && 'cursor-not-allowed opacity-60',
        className,
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="h-4 w-4 rounded-md border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:focus:ring-primary-dark"
        aria-checked={checked}
      />
      {label && <span>{label}</span>}
    </label>
  );
};
export default Checkbox;
