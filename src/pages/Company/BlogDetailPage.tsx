import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogBySlug, getRelatedBlogs } from "../../data/blogData";
import type { BlogPost } from "../../data/blogData";

/* ── Content Renderer ── */
const renderContent = (content: string): React.ReactElement[] => {
  const lines = content.trim().split("\n");
  const elements: React.ReactElement[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      key++;
      continue;
    }

    // Handling Section Titles (e.g., ## Introduction, 1. Understanding ETFs:, Conclusion:)
    if (line.startsWith("##") || (line.includes(":") && line.length < 60)) {
      const cleanLine = line.replace(/## /g, "").replace(/\*\*/g, "");
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {cleanLine}
        </h2>,
      );
    } else {
      // Support for bold text within paragraphs
      const parts = line.replace(/## /g, "").split(/(\*\*.*?\*\*)/g);
      elements.push(
        <p
          key={key++}
          className="text-gray-600 text-lg leading-relaxed mb-6 font-light"
        >
          {parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={index} className="font-bold text-gray-900">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>,
      );
    }
  }
  return elements;
};

/* ── Suggested Blog Card ── */
const SuggestedCard = ({ post }: { post: BlogPost }) => {
  const navigate = useNavigate();
  return (
    <article
      onClick={() => {
        navigate(`/blog/${post.slug}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="flex flex-col cursor-pointer group"
    >
      <div className="aspect-video overflow-hidden rounded-sm mb-3">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="text-gray-900 font-bold text-base leading-tight mb-2 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-2 italic">
        {post.excerpt}
      </p>
      <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">
        {post.date}
      </p>
    </article>
  );
};

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const post = slug ? getBlogBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedBlogs(slug, 4) : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => navigate("/blog")}
          className="text-[#99C336] font-bold"
        >
          Blog Not Found - Return home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-[1440px] mx-auto px-6 pt-10">
        {/* Top Centered Image */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-lg aspect-4/3 overflow-hidden rounded-sm shadow-sm">
            {!imgError ? (
              <img
                src={post.image}
                alt={post.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                Image Preview
              </div>
            )}
          </div>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
        </div>

        {/* Article Body */}
        <div className="article-body">{renderContent(post.content)}</div>

        {/* Suggested Blogs Section */}
        <div className="mt-20 pt-10 border-t border-[#99C336]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedPosts.map((related) => (
              <SuggestedCard key={related.id} post={related} />
            ))}
          </div>
        </div>

        {/* Footer Back Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/blog")}
            className="text-gray-400 hover:text-[#99C336] text-sm font-semibold transition-colors"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
