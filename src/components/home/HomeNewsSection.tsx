import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RefreshCw, ArrowUpRight } from "lucide-react";
import newss from "../../assets/HeroImages/newss.png";

type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
};

export default function HomeNewsSection() {
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchNews = async () => {
    setRefreshing(true);
    try {
      const response = await fetch(
        `https://finnhub.io/api/v1/news?category=general&token=d85d5e9r01qke7mc0md0d85d5e9r01qke7mc0mdg`,
      );
      const data = await response.json();
      const newsArray: NewsItem[] = data.map((item: any) => ({
        title: item.headline || "",
        link: item.url || "",
        pubDate: new Date(item.datetime * 1000).toISOString(),
        source: item.source || "Stock Market",
      }));
      setAllNews(newsArray);
      setDisplayIndex(0);
    } catch (err) {
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = () => {
    if (allNews.length === 0) {
      fetchNews();
      return;
    }

    const nextIndex = displayIndex + 3;
    if (nextIndex >= allNews.length - 2) {
      // If we're near the end, fetch fresh news
      fetchNews();
    } else {
      setRefreshing(true);
      setTimeout(() => {
        setDisplayIndex(nextIndex);
        setRefreshing(false);
      }, 500); // Small delay for effect
    }
  };

  const displayedNews = allNews.slice(displayIndex, displayIndex + 3);
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
            Latest Market Insights & Investment Updates
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            {/* Get the latest financial news and trusted updates on Mutual Funds, Stocks, Commodities, and other investments. 
            Stay informed with expert insights and real-time market trends to make smart financial decisions. */}
            Access timely financial news, expert analysis, and market updates
            across key investment segments to help you make informed and
            confident financial decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Illustration */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <img
              src={newss}
              alt="Market News Illustration"
              className="w-full max-w-3xl object-contain"
            />
          </div>

          {/* Right Side: Live News Card */}
          <div className="order-1 lg:order-2">
            <div className="bg-[#0f0f0f] rounded-[40px] p-8 md:p-6 h-90 shadow-2xl relative overflow-hidden group">
              {/* Background gradient effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#99C336]/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-500 group-hover:bg-[#99C336]/20"></div>

              {/* Card Header */}
              <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-0 relative z-10">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    Live News
                    <button
                      type="button"
                      onClick={handleRefresh}
                      aria-label="Refresh live news"
                      className={`text-[#99C336] hover:text-[#bef264] transition-all transform ${refreshing ? "animate-spin" : "hover:rotate-180"}`}
                    >
                      <RefreshCw size={24} />
                    </button>
                  </h3>
                </div>
                <Link
                  to="/news"
                  className="text-white/60 hover:text-white transition-colors text-sm font-medium flex items-center gap-1 group/link"
                >
                  View All
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>

              {/* News List */}
              <div className="space-y-0 relative z-10 bg-white h-64 rounded-3xl overflow-hidden border border-gray-500 shadow-inner">
                {loading
                  ? Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="py-6 px-6 border-b border-gray-50 animate-pulse"
                        >
                          <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                          <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                        </div>
                      ))
                  : displayedNews.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/item block py-5 px-6 border-b border-gray-200 last:border-0 transition-all duration-300 hover:bg-gray-50 relative"
                      >
                        <div className="flex justify-between items-center gap-4">
                          <div className="flex-1">
                            {/* Title */}
                            <h4 className="text-[15px] md:text-[16px] font-medium leading-relaxed text-gray-800 transition-colors line-clamp-2 mb-2">
                              {item.title.split("-")[0].trim()}
                            </h4>

                            {/* News Source */}
                            <p className="text-xs text-gray-500">
                              {item.source}
                            </p>
                          </div>

                          <div className="text-[#99C336] opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                            <ArrowUpRight size={20} />
                          </div>
                        </div>
                      </a>    
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
