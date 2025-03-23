import SearchIcon from '@components/shared/icons/SearchIcon';
import { useFeedFilters } from '@contexts/feedFilterContext';
import useDebouncedCallback from '@hooks/useDebouncedCallback';
import React, { useEffect, useRef } from 'react';

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    setSearchQuery,
    setSelectedCategory,
    searchQuery
  } = useFeedFilters()
  const debouncedSetQuery = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
    setSelectedCategory(null)
  }, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedSetQuery(value);
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <form className="mx-4 w-full max-w-md">
      <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 gap-x-2">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className="
            block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-12 text-sm text-gray-900 
            focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 
            dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
          "
          placeholder="Search topics, locations, & Keywords..."
          value={searchQuery}
          onChange={handleChange}
          required
          ref={inputRef}
        />
        <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pr-3 gap-x-2">
          <span className='text-xs sm:hidden md:block text-gray-900 dark:text-white font-serif font-medium'>CTRL+K</span>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;