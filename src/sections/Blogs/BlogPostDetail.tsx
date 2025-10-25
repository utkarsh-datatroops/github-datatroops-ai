'use client'; // BlogPostDetail can still be client

import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import EnhancedBlogContent from "./EnhancedBlogContent";

const BlogPostDetail = ({ post }: { post: any }) => {
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/datatroops-blogs">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="w-full pb-16 bg-white">
      {/* Hero Section */}
      <div className="banner-container h-96 sm:h-[450px] md:h-[500px] lg:h-[550px] relative overflow-hidden">
        {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="banner-overlay relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-start md:justify-center">
            <div className="w-full max-w-4xl mx-auto text-left md:text-center">
              <Link href="/datatroops-blogs" className="pt-16 inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors text-sm font-medium">
                <ArrowLeft className="mr-2 h-3 w-3" /> Back to Blog
              </Link>
              <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight break-words max-w-full drop-shadow-lg">
                {post.title}
              </h1>
              <div className="flex flex-col gap-3 text-white/90 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start md:justify-center gap-2 sm:gap-6">
                  <div className="flex items-center text-xs sm:text-base">
                    <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="drop-shadow-md">{post.date}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-base">
                    <User className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="drop-shadow-md">DataTroops.ai</span>
                  </div>
                </div>
              </div>
              <p className="text-white/95 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light drop-shadow-md">
                {post.excerpt}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Keep your EnhancedBlogContent client component */}
          <EnhancedBlogContent content={post.content} />
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
