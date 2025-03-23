import CategoryList from '@components/newsFeedNavigationBar/CategoryList';
import HamburgerIcon from '@components/shared/icons/HamburgerIcon';
import Popover from '@ui/Popover';

const NewsFeedNavigationBar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
        <Popover
          trigger={
            <button
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-label="Toggle navigation"
            >
              <HamburgerIcon />
            </button>
          }
        >
          <CategoryList />
        </Popover>
        <div className="hidden md:flex md:space-x-6">
          <CategoryList className={'flex items-center gap-x-4'} />
        </div>
      </div>
    </nav>
  );
};

export default NewsFeedNavigationBar;
