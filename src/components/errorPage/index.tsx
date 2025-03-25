import ReloadIcon from "@components/shared/icons/ReloadIcon";
import Button from "@components/shared/ui/Button";

type TErrorProps = {
    message?: string
}
const Error = ({ code, message }: TErrorProps) => {
    const handleReload = () => {
        window.location.reload();
    }
    return (
        <section className="bg-white dark:bg-gray-900 h-full">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">OOPS!</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Your request could not be completed</p>
                    <p className="mb-4 tracking-tight font-medium text-gray-900 dark:text-white">Try loading the other tabs. We are working on fixing the issues.</p>
                    {
                        message && <p className="mb-4  tracking-tight text-sm text-gray-900 dark:text-white">{message}</p>
                    }
                    <Button onClick={handleReload}>
                        <div className="inline-flex gap-x-2 items-center">
                            <ReloadIcon className="w-4 h-4" />
                            <span className="text-md">Reload Page</span>
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default Error;