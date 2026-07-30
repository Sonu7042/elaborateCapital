import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Share2,
  Filter,
} from "lucide-react";

type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  image?: string;
  summary?: string;
};

interface StockNewsProps {
  limit?: number;
}

const categories = ["All", "Stocks", "Mutual Funds", "IPO", "Economy"];

export default function StockNews({ limit }: StockNewsProps) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchNewsForCategory = (category: string) => {
    setLoading(true);

    const query =
      category === "All" ? "general" : category.toLowerCase();

    fetch(
      `https://finnhub.io/api/v1/news?category=${query}&token=d85d5e9r01qke7mc0md0d85d5e9r01qke7mc0mdg`
    )
      .then((res) => res.json())
      .then((data) => {
        const newsArray: NewsItem[] = data.map((item: any) => ({
          title: item.headline || "",
          link: item.url || "",
          pubDate: new Date(item.datetime * 1000).toISOString(),
          source: item.source || "Stock Market",
          image: item.image || "",
          summary: item.summary || "",
        }));

        setNews(newsArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNewsForCategory(activeCategory);
  }, [activeCategory]);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedNews = limit
    ? filteredNews.slice(0, limit)
    : filteredNews;

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <h1 className="sr-only">Latest Market News</h1>

      {/* Controls Bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Categories */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter size={18} className="text-gray-400 mr-2 shrink-0" />

              {/* Mobile Dropdown */}
              <div className="md:hidden w-full relative">
                <select
                  aria-label="Filter news by category"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full h-11 px-4 pr-10 bg-gray-100 border-none rounded-xl text-sm font-semibold text-gray-800 appearance-none focus:ring-2 focus:ring-[#99C336] outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                      activeCategory === cat
                        ? "bg-[#0f0f0f] text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                aria-label="Search news headlines"
                placeholder="Search headlines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#99C336] text-gray-800 placeholder-gray-400 font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {loading ? (
          <div className="flex flex-col justify-center items-center py-40 gap-4">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#99C336] border-transparent"></div>

            <p className="text-gray-500 font-medium animate-pulse">
              Syncing latest updates...
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {displayedNews.map((item, index) => (
                <motion.a
                  key={item.link}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#99C336]/10 transition-all duration-500 flex flex-col overflow-hidden"
                >
                  {/* Image */}
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-52 object-cover rounded-2xl mb-5"
                    />
                  )}

                  {/* Top */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gray-100 text-black text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest border border-gray-200">
                      {item.source}
                    </span>

                    <button
                      type="button"
                      aria-label={`Share article: ${item.title}`}
                      className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>

                  {/* Title */}
                  <h2 className="font-bold text-gray-900 text-xl leading-tight group-hover:text-[#587A00] transition-colors mb-4 line-clamp-3">
                    {item.title}
                  </h2>

                  {/* Summary */}
                  <p className="text-sm text-gray-700 line-clamp-3 mb-6">
                    {item.summary}
                  </p>

                  {/* Bottom */}
                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    {/* <div className="flex items-center text-xs text-gray-400 font-medium">
                      <Clock size={14} className="mr-1.5" />

                      {new Date(item.pubDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div> */}

                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-[#99C336] group-hover:text-black transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* No Results */}
        {!loading && displayedNews.length === 0 && (
          <div className="text-center py-40">
            <Search size={48} className="mx-auto text-gray-200 mb-4" />

            <h2 className="text-2xl font-bold text-gray-400">
              No matching insights found
            </h2>

            <p className="text-gray-500 mt-2">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
