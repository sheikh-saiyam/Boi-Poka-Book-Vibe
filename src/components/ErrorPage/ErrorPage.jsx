const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="mb-8">
            <h2 className="mt-6 text-6xl font-extrabold text-gray-900 dark:text-gray-100">
              404
            </h2>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Page not found
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Sorry, we could not find the page you are looking for.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/"
              className="btn btn-wide btn-primary text-white text-lg font-semibold"
            >
              <svg
                className="mr-2 -ml-1 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h18m-9-9l9 9-9 9"
                />
              </svg>
              Go back home
            </a>
          </div>
        </div>
        <div className="mt-16 w-full max-w-2xl">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
