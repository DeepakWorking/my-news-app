import NewsFeedFilters from '@components/newsFeedFilter';
import { NEWS_API_ORG_SOURCES } from '@constants/feed.constants';
import { useFeedFilters } from '@contexts/feedFilterContext';
import {
  useGetNewsForHome,
  useGetNewsForSections,
} from '@hooks/Query/useNewsApi';
import { useSearchNewQuery } from '@hooks/Query/useSearchNews';
import { TFeedCategories } from '@types/feed.types';
import { TNewsAPIArticle } from 'types/newApi.types';
import NewsCardItem from './CardItem';
const getAllSources = () => Object.keys(NEWS_API_ORG_SOURCES).join(',');
const MainFeed = () => {
  const { selectedCategory, selectedSources, searchQuery } = useFeedFilters();
  const {
    isLoading: categoryIsLoading,
    data: categoryData,
    error: categoryError,
  } = useGetNewsForSections(
    {
      pageSize: 20,
      page: 1,
      category: selectedCategory || undefined,
      //country: "us", // Implement country selection
    },
    {
      enabled:
        !!selectedCategory &&
        ![TFeedCategories.MY_FEED, TFeedCategories.ALL_NEWS].includes(
          selectedCategory,
        ),
    },
  );
  const {
    isLoading: allSourceIsLoading,
    data: allSourcesData,
    error: allSourceError,
  } = useGetNewsForHome(
    {
      pageSize: 20,
      page: 1,
      sources: selectedSources.length
        ? selectedSources.join(',')
        : getAllSources(),
      //country: "us", // Implement country selection
    },
    {
      enabled: !!selectedCategory && selectedCategory === TFeedCategories.ALL_NEWS,
    },
  );
  const {
    isLoading: searchIsLoading,
    data: searchData,
    isError: searchError,
  } = useSearchNewQuery({
    pageSize: 20,
    page: 1,
    q: searchQuery,
  }, {
    enabled: !selectedCategory && !!searchQuery,
  });
  const newsData = [
    ...(categoryData?.articles || []),
    ...(allSourcesData?.articles || []),
    ...(searchData || []),
  ];
  return (
    <main className="px-2">
      <NewsFeedFilters />
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newsData?.map((news: TNewsAPIArticle) => (
          <NewsCardItem key={news.title} news={news} />
        ))}
      </div>
    </main>
  );
};

export default MainFeed;
