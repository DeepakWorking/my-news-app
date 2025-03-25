import SearchInput from '@components/header/SearchInput';
import GitHubIcon from '@components/shared/icons/GithubIcon';
import UserSettings from '@components/userSettings';
import Button from '@ui/Button';
import Subscribe from './Subscribe';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-solid border-gray-200 bg-white px-2 py-2 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center justify-between gap-4">
        <h1 className="flex items-center gap-2 whitespace-nowrap text-lg font-bold">
          <img
            src="https://img.icons8.com/arcade/64/real-time-news.png"
            alt="Newspaper Icon"
            className="h-6 w-6"
          />
          <span className="hidden sm:inline">ABC News</span>
        </h1>
        <div className="mx-auto flex flex-1 justify-center">
          <SearchInput />
        </div>
        <div className="flex items-center gap-2">
          <Subscribe />
          <UserSettings />
          <Button
            variant="outlined"
            className="rounded-full px-2 py-2"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/DeepakWorking/my-news-app');
            }}
          >
            <GitHubIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
