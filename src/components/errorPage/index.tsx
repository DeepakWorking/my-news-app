import Button from "@components/shared/ui/Button";

const Error = () => {
    const handleReload = () => {
        window.location.reload();
    }
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">OOPS!</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Your request could not be completed.</p>
                    <Button onClick={handleReload}>Reload Page</Button>
                </div>
            </div>
        </section>
    )
}
export default Error;