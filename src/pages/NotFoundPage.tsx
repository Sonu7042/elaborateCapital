import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found | Elaborate Capital";
  }, []);

  return (
    <section className="min-h-[60vh] px-6 py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900">Page not found</h1>
      <p className="mt-4 text-gray-700">The page you requested does not exist.</p>
      <Link className="mt-8 inline-block font-semibold text-[#7b0020] underline" to="/">
        Return to the home page
      </Link>
    </section>
  );
}
