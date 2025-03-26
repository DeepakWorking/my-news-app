import ReloadIcon from '@components/shared/icons/ReloadIcon';
import Button from '@components/shared/ui/Button';

type TErrorPageProps = {
    message?: string;
};
const ErrorPage = ({ message }: TErrorPageProps) => {
    const handleReload = () => {
        window.location.reload();
    };
    return (
        <section className="h-full bg-white dark:bg-gray-900" >
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16" >
                <div className="mx-auto max-w-screen-sm text-center" >
                    <h1 className="text-primary-600 dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl" >
                        OOPS!
                    </h1>
                    < p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white" >
                        Your request could not be completed
                    </p>
                    < p className="mb-4 font-medium tracking-tight text-gray-900 dark:text-white" >
                        Try loading the other tabs.We are working on fixing the issues.
                    </p>
                    {
                        message && (
                            <p className="mb-4 text-sm tracking-tight text-gray-900 dark:text-white" >
                                {message}
                            </p>
                        )}
                    <Button onClick={handleReload}>
                        <div className="inline-flex items-center gap-x-2" >
                            <ReloadIcon className="h-4 w-4" />
                            <span className="text-md" > Reload Page </span>
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    );
};
export default ErrorPage;
