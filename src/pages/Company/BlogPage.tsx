import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "../../data/blogData";
import type { BlogPost } from "../../data/blogData";
import blog_hero_vector from "../../../public/blogImages/blog_hero_vector.svg";

const BlogCard = ({ post }: { post: BlogPost }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article
      onClick={handleClick}
      className="flex flex-col cursor-pointer group"
    >
      {/* Image Container */}
      <div className="aspect-4/3 overflow-hidden rounded-sm mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h2 className="text-gray-900 font-bold text-xl leading-tight mb-3 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-4 line-clamp-3 font-light">
          {post.excerpt}
        </p>
        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
          {post.date}
        </p>
      </div>
    </article>
  );
};

const BlogPage = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const visiblePosts = blogPosts.slice(0, visibleCount);
  const hasMore = visibleCount < blogPosts.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Blog Hero Section */}
      <div className="relative w-full bg-[#F7F9F5] pt-24 md:pt-32 pb-16 md:pb-24 px-6 overflow-hidden border-b border-gray-50">
        {/* Topographic Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.1] pointer-events-none"
          style={{
            backgroundImage: `url(${blog_hero_vector})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Blog Badge */}
          {/* <div className="inline-block px-8 py-2 rounded-full border border-gray-100 text-gray-400 text-sm font-medium mb-10 bg-white/50 backdrop-blur-sm shadow-sm">
            Blog
          </div> */}

          {/* Heading */}
          <h1 className="heading text-4xl md:text-[56px] font-bold text-gray-900 mb-8 tracking-tight max-w-4xl leading-[1.1]">
            Exploring the World of ETFs
          </h1>

          {/* Description */}
          <p className="para text-gray-500 text-lg md:text-[18px] max-w-3xl font-normal leading-relaxed">
            In the ever-evolving landscape of investment options,
            Exchange-Traded Funds (ETFs) have gained significant popularity
            among both individual and institutional investors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Blog Grid Header */}
        <div className="mb-14">
          <h2 className="heading text-3xl md:text-[32px] font-bold text-gray-900 mb-4">
            All Articles
          </h2>
          <p className="para text-[16px] text-gray-600 max-w-2xl leading-relaxed">
            In the ever-evolving landscape of investment options,{" "}
            <br className="hidden md:block" />
            Exchange-Traded Funds (ETFs) have gained significant popularity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() =>
                setVisibleCount((c) => Math.min(c + 8, blogPosts.length))
              }
              className="bg-[#99C336] hover:bg-[#8fd12a] text-black font-bold px-12 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 text-sm"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
