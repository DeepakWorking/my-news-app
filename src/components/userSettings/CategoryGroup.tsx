import { CATEGORIES_LIST } from '@constants/feed.constants';
import userPreference from '@services/userPreference.service';
import Chip from '@ui/Chip';
import { useMemo, useState } from 'react';
import { TFeedCategories } from 'types/feed.types';

const CategoryGroup = () => {
  const [selectedCategories, setSelectedCategories] = useState<
    TFeedCategories[]
  >(() => {
    return userPreference.get().categories;
  });

  const filteredCategories = useMemo(
    () =>
      CATEGORIES_LIST.filter(
        (cat) =>
          ![TFeedCategories.ALL_NEWS, TFeedCategories.MY_FEED].includes(cat.id),
      ),
    [],
  );

  const toggleCategory = (id: TFeedCategories) => {
    setSelectedCategories((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((c) => c !== id)
        : [...prev, id];
      userPreference.set({ categories: updated });
      return updated;
    });
  };

  return (
    <fieldset className="rounded-lg border border-gray-300 dark:border-gray-700">
      <legend className="font-medium text-textPrimary dark:text-textPrimary-dark">
        Categories
      </legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {filteredCategories.map(({ id, label }) => (
          <Chip
            key={id}
            label={label}
            selected={selectedCategories.includes(id)}
            onClick={() => toggleCategory(id)}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default CategoryGroup;
