import { useId } from 'react';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';

type DropdownProps = {
  options: { value: string; label: string }[];
  value?: { value: string; label: string } | null;
  onChange?: (selected: any) => void;
  isMulti?: boolean;
  placeholder?: string;
  className?: string;
  label?: string;
  id?: string;
  disabled?: boolean;
};

const Dropdown = ({
  options,
  id,
  value,
  onChange,
  isMulti = false,
  placeholder,
  className,
  label,
  disabled,
}: DropdownProps) => {
  const selectedId = id || useId();
  return (
    <div>
      {label && (
        <label
          htmlFor={selectedId}
          className="mb-2 text-xs font-medium text-textPrimary dark:text-textPrimary-dark"
        >
          {label}
        </label>
      )}
      <Select
        id={selectedId}
        options={options}
        value={value}
        onChange={onChange}
        unstyled
        isMulti={isMulti}
        isDisabled={disabled}
        placeholder={placeholder}
        aria-disabled={disabled}
        aria-label={typeof label === 'string' ? label : undefined}
        className={twMerge('w-fit min-w-32 text-sm', className)}
        classNames={{
          control: ({ isFocused }) =>
            twMerge(
              'px-2 py-1 flex items-center gap-2 border rounded-md transition-all shadow-sm text-sm text-textPrimary dark:text-textPrimary-dark',
              'border border-grey-800 dark:border-grey-200 bg-transparent shadow-sm rounded-md !cursor-pointer focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-primary-dark',
              isFocused
                ? 'border-primary ring-2 ring-primary dark:ring-primary-dark'
                : 'border-gray-300 dark:border-gray-600',
              'hover:border-blue-400 dark:hover:border-blue-500',
              'focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600',
            ),
          menu: () =>
            'absolute z-10 mt-1 text-sm m-auto w-full rounded-lg dark:bg-gray-800 bg-white shadow-lg border border-primary dark:border-primary-dark',
          menuList: () => 'max-h-60 overflow-y-auto',
          option: ({ isFocused, isSelected }) =>
            twMerge(
              'bg-transparent cursor-pointer px-4 py-2 transition-all rounded-sm text-sm',
              isSelected
                ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white'
                : isFocused
                  ? 'bg-gray-100 dark:bg-gray-700 dark:text-gray-200'
                  : 'text-gray-700 dark:text-gray-300',
              'hover:bg-blue-100 dark:hover:bg-blue-600',
            ),
          placeholder: () =>
            'bg-transparent text-sm text-textPrimary dark:text-textPrimary-dark text-sm',
          singleValue: () =>
            'text-textPrimary dark:text-textPrimary-dark text-sm',
          input: () => 'text-textPrimary dark:text-textPrimary-dark text-sm',
        }}
      />
    </div>
  );
};
export default Dropdown;
