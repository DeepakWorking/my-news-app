import { CATEGORIES_LIST } from '@constants/feed.constants';
import { useFeedFilters } from '@contexts/feedFilterContext';
import { twMerge } from 'tailwind-merge';
import { TFeedCategories } from 'types/feed.types';

type CategoryListProps = {
  className?: string;
};

const CategoryList = ({ className }: CategoryListProps) => {
  const { selectedCategory, setSelectedCategory, setSearchQuery } =
    useFeedFilters();

  const handleItemClick = (id: TFeedCategories) => {
    setSelectedCategory(id);
    setSearchQuery('');
  };

  return (
    <ul className={twMerge('space-y-2', className)}>
      {CATEGORIES_LIST.map((item) => (
        <li key={item.id}>
          <button
            className={twMerge(
              'block w-full rounded-md px-4 py-2 text-left text-gray-900 transition dark:text-white',
              selectedCategory === item.id
                ? 'bg-blue-600 text-white dark:bg-blue-500'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700',
            )}
            onClick={() => handleItemClick(item.id)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
