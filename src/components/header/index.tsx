import SearchInput from '@components/header/SearchInput';
import GitHubIcon from '@components/shared/icons/GithubIcon';
import UserSettings from '@components/userSettings';
import Button from '@ui/Button';

const Header = () => {
  return (
    <header className="border-b-2 border-solid border-gray-200 px-4 py-2 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <h1 className="">ABC News</h1>
        <SearchInput />
        <div className="flex gap-x-4">
          <Button variant='link' className='underline'>Subscribe</Button>
          <UserSettings />
          <Button variant="outlined"><GitHubIcon /> </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
