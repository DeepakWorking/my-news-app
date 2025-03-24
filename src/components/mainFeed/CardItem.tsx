import ArrowIcon from '@components/shared/icons/ArrowIcon';
import PersonIcon from '@components/shared/icons/PersonIcon';
import { getFormattedDate } from '@utils/dateTime.utils';
import { twMerge } from 'tailwind-merge';
import { TNewsAPIArticle } from 'types/newApi.types';

const NewsCardItem = ({ news }: { news: TNewsAPIArticle }) => {
  return (
    <article
      className={twMerge(
        'flex h-full w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md sm:flex-row md:flex-col',
        'dark:border-gray-700 dark:bg-gray-800',
      )}
    >
      <a
        href={news.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex-shrink-0 sm:w-1/3 md:w-full"
      >
        {
          news.urlToImage ?
            <img
              className="h-40 w-full rounded-t-lg object-cover sm:h-full sm:rounded-l-lg sm:rounded-t-none md:h-40 md:rounded-lg"
              src={news.urlToImage}
              alt={news.title}
            />
            : <img
              className="h-40 w-full rounded-t-lg object-cover sm:h-full sm:rounded-l-lg sm:rounded-t-none md:h-40 md:rounded-lg"
              alt={news.title}
            />
        }

      </a>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>📅 {getFormattedDate(news.publishedAt)}</span>
          <span>📰 {news.source.name}</span>
        </div>
        <div className="mt-2 flex flex-1 flex-col">
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {news.title}
            </h5>
          </a>
          <p className="line-clamp-2 text-sm text-gray-700 dark:text-gray-400">
            {news.description}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-x-1">
            <PersonIcon className="h-4 w-4 flex-shrink-0" />
            <span className="min-w-0 flex-1 truncate text-xs text-gray-500 dark:text-gray-400">
              {news.author}
            </span>
          </div>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-shrink-0 items-center text-sm font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Read more
            <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
};

export default NewsCardItem;
