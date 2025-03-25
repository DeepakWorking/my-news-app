import Header from '@components/header/index';
import MainFeed from '@components/mainFeed';
import NewsFeedNavigationBar from '@components/newsFeedNavigationBar';
import { FeedFiltersProvider } from '@contexts/feedFilterContext';

const NewsFeed = () => {
  return (
    <FeedFiltersProvider>
      <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="sticky top-[50px] z-40">
          <NewsFeedNavigationBar />
        </div>
        <main className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-700 dark:scrollbar-track-gray-800 flex-1 overflow-y-auto">
          <MainFeed />
        </main>
      </div>
    </FeedFiltersProvider>
  );
};
export default NewsFeed;
