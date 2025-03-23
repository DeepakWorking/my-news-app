import { TFeedCategories, TNewsSourceKey } from '@types/feed.types';
import { createContext, useContext, useState } from 'react';

type FeedFiltersContextType = {
  searchQuery: string;
  selectedSources: TNewsSourceKey[];
  selectedCategory: TFeedCategories | null;
  selectedDate: string;
  setSearchQuery: (query: string) => void;
  setSelectedSources: (sources: TNewsSourceKey[]) => void;
  setSelectedCategory: (categories: TFeedCategories | null) => void;
  setSelectedDate: (date: string) => void;
};

const FeedFiltersContext = createContext<FeedFiltersContextType | undefined>(
  undefined,
);

export const FeedFiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSources, setSelectedSources] = useState<TNewsSourceKey[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<TFeedCategories | null>(TFeedCategories.ALL_NEWS);
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <FeedFiltersContext.Provider
      value={{
        searchQuery,
        selectedSources,
        selectedCategory,
        selectedDate,
        setSearchQuery,
        setSelectedSources,
        setSelectedCategory,
        setSelectedDate,
      }}
    >
      {children}
    </FeedFiltersContext.Provider>
  );
};

export const useFeedFilters = () => {
  const context = useContext(FeedFiltersContext);
  if (!context) {
    throw new Error('useFeedFilters must be used within a FeedFiltersProvider');
  }
  return context;
};
