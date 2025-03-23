import Header from '@components/header';
import MainFeed from '@components/mainFeed';
import { FeedFiltersProvider } from '@contexts/feedFilterContext';

import NewsFeedNavigationBar from '@components/newsFeedNavigationBar';

const NewsFeed = () => {
  return (
    <FeedFiltersProvider>
      <div className="mx-auto flex flex-col justify-center">
        <Header />
        <NewsFeedNavigationBar />
        <MainFeed />
      </div>
    </FeedFiltersProvider>
  );
};
export default NewsFeed;
