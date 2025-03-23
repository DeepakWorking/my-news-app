import NewsFeed from '@pages/NewsFeed';
const Root = () => {
  return (
    <div className="min-w-sm static relative h-screen bg-background-light lining-nums leading-normal text-textPrimary antialiased lg:overflow-x-hidden lg:overflow-y-scroll dark:bg-background-dark dark:text-textPrimary-dark">
      <NewsFeed />
    </div>
  );
};
export default Root;
