import NewsFeed from '@pages/NewsFeed';

const Root = () => {
  return (
    <div className="flex h-screen flex-col bg-white text-textPrimary dark:bg-gray-900 dark:text-textPrimary-dark">
      <NewsFeed />
    </div>
  );
};
export default Root;
