import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function RouteErrorPage() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <main id="main-content" className="min-h-screen px-6 py-24 text-center" tabIndex={-1}>
      <h1 className="text-4xl font-bold text-gray-900">
        {notFound ? "Page not found" : "Something went wrong"}
      </h1>
      <p className="mt-4 text-gray-700">
        {notFound
          ? "The page you requested does not exist."
          : "We could not display this page. Please try again."}
      </p>
      <Link className="mt-8 inline-block font-semibold text-[#7b0020] underline" to="/">
        Return to the home page
      </Link>
    </main>
  );
}
