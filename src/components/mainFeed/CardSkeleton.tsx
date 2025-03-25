const CardSkeleton = () => {
  return (
    <div className="flex h-full w-full animate-pulse flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md sm:flex-row md:flex-col dark:border-gray-700 dark:bg-gray-800">
      <div className="h-40 w-full flex-shrink-0 rounded-t-lg bg-gray-300 sm:w-1/3 sm:rounded-l-lg sm:rounded-t-none md:w-full md:rounded-lg dark:bg-gray-700"></div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="mb-4 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-4 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-4 w-2/3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2.5 w-40 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
