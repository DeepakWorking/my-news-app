import React from 'react';
import { twMerge } from 'tailwind-merge';

type TDatePickerProps = {
  value?: string;
  onChange?: (date: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
  maxDate?: string;
  minDate?: string;
};

const DatePicker: React.FC<TDatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select a date',
  isDisabled = false,
  maxDate,
  minDate,
}) => {
  return (
    <div className="relative w-40">
      <input
        type="date"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={isDisabled}
        placeholder={placeholder}
        max={maxDate}
        min={minDate}
        className={twMerge(
          'w-full rounded-md px-3 py-2 text-sm focus:outline-none',
          'border border-gray-600 bg-transparent text-white',
          'focus:ring-2 focus:ring-blue-500',
          'cursor-pointer appearance-none',
          isDisabled ? 'cursor-not-allowed opacity-50' : '',
        )}
      />
    </div>
  );
};

export default DatePicker;
