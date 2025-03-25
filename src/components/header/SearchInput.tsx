import CrossIcon from '@components/shared/icons/CrossIcon';
import SearchIcon from '@components/shared/icons/SearchIcon';
import { useFeedFilters } from '@contexts/feedFilterContext';
import React, { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setSearchQuery, setSelectedCategory } = useFeedFilters();
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    setSearchQuery(inputValue);
    setSelectedCategory(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, []);
  const handleClear = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  return (
    <form className="relative mx-4 w-full max-w-md">
      <div className="relative flex items-center">
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-4 pr-20 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search topics, locations, & keywords..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />

        {!inputValue && (
          <div className="absolute right-14 top-1/2 hidden -translate-y-1/2 items-center rounded-md bg-gray-200 px-2 py-1 text-xs text-gray-700 sm:flex dark:bg-gray-600 dark:text-gray-300">
            CTRL + K
          </div>
        )}
        {inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-12 top-1/2 -translate-y-1/2 px-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <CrossIcon />
          </button>
        )}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          disabled={!inputValue}
          className={twMerge(
            'absolute end-0 top-0 h-full rounded-e-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700',
            !inputValue && 'pointer-events-none opacity-50',
          )}
        >
          <SearchIcon />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
