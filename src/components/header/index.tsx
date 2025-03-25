import SearchInput from '@components/header/SearchInput';
import GitHubIcon from '@components/shared/icons/GithubIcon';
import UserSettings from '@components/userSettings';
import Button from '@ui/Button';
import Subscribe from './Subscribe';

const Header = () => {
  return (
    <header className="border-b-2 border-solid border-gray-200 px-2 py-2 dark:border-gray-700 sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-lg font-bold whitespace-nowrap flex items-center gap-2">
          <img
            src="https://img.icons8.com/arcade/64/real-time-news.png"
            alt="Newspaper Icon"
            className="w-6 h-6"
          />
          <span className="hidden sm:inline">ABC News</span>
        </h1>
        <div className="flex-1 mx-auto flex justify-center">
          <SearchInput />
        </div>
        <div className="flex items-center gap-2">
          <Subscribe />
          <UserSettings />
          <Button variant="outlined" className="px-2 py-2 rounded-full" onClick={(e) => {
            e.preventDefault();
            window.open('https://github.com/DeepakWorking/my-news-app')
          }}>
            <GitHubIcon />
          </Button>
        </div>
      </div>
    </header >
  );
};

export default Header;
