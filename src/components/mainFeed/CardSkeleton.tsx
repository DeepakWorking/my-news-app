const CardSkeleton = () => {
    return (
        <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md sm:flex-row md:flex-col dark:border-gray-700 dark:bg-gray-800 animate-pulse">
            <div className="w-full flex-shrink-0 sm:w-1/3 md:w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none md:rounded-lg"></div>
            <div className="flex flex-1 flex-col justify-between p-4">
                <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-32 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4 mb-2.5"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-2/3 mb-2.5"></div>
                <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full w-40 mb-2.5"></div>
            </div>
        </div>
    );
};

export default CardSkeleton;
