import Error from '@components/errorPage';
import NewsFeedFilters from '@components/newsFeedFilter';
import { NEWS_API_ORG_SOURCES } from '@constants/feed.constants';
import { useFeedFilters } from '@contexts/feedFilterContext';
import {
  useGetNewsForHome,
  useGetNewsForSections,
} from '@hooks/Query/useNewsApi';
import { useSearchNewQuery } from '@hooks/Query/useSearchNews';
import { useUserNewsQuery } from '@hooks/Query/useUserNewsQuery';
import { TFeedCategories } from '@types/feed.types';
import { TNewsAPIArticle } from 'types/newApi.types';
import NewsCardItem from './CardItem';
const getAllSources = () => Object.keys(NEWS_API_ORG_SOURCES).join(',');
const MainFeed = () => {
  const { selectedCategory, selectedSources, searchQuery } = useFeedFilters();
  const isSectionNews = !!selectedCategory &&
    ![TFeedCategories.MY_FEED, TFeedCategories.ALL_NEWS].includes(
      selectedCategory,
    );
  const isSearchNews = !selectedCategory && !!searchQuery;
  const isAllSourceNews = selectedCategory === TFeedCategories.ALL_NEWS;
  const isUserFeed = selectedCategory === TFeedCategories.MY_FEED;
  const {
    isLoading: categoryIsLoading,
    data: categoryData,
    isError: categoryError,
  } = useGetNewsForSections(
    {
      pageSize: 20,
      page: 1,
      category: selectedCategory || undefined,
    },
    {
      enabled: isSectionNews
    },
  );
  const {
    isLoading: allSourceIsLoading,
    data: allSourcesData,
    isError: allSourceError,
  } = useGetNewsForHome(
    {
      pageSize: 20,
      page: 1,
      sources: selectedSources.length
        ? selectedSources.join(',')
        : getAllSources(),
    },
    {
      enabled: isAllSourceNews,
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
    enabled: isSearchNews,
  });
  const { data: userData, isLoading: userDataIsLoading, isError: userDataError } = useUserNewsQuery({
    page: 1,
    pageSize: 20
  }, {
    enabled: isUserFeed
  })
  const newsData = [
    ...(isSectionNews ? categoryData?.articles ?? [] : []),
    ...(isAllSourceNews ? allSourcesData?.articles ?? [] : []),
    ...(isSearchNews ? searchData ?? [] : []),
    ...(isUserFeed ? userData ?? [] : [])
  ];
  console.log('error', categoryError, allSourceError, searchError, userDataError)
  console.log('loading', categoryIsLoading, allSourceIsLoading, searchIsLoading, userDataIsLoading)
  if (categoryError || allSourceError || searchError || userDataError) return <Error />
  return (
    <main className="px-2">
      {
        selectedCategory === TFeedCategories.ALL_NEWS && <NewsFeedFilters />
      }
      <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {newsData?.map((news: TNewsAPIArticle, index) => (
          <NewsCardItem key={`${news.url}-${index}`} news={news} />
        ))}
      </div>
    </main>
  );
};

export default MainFeed;
