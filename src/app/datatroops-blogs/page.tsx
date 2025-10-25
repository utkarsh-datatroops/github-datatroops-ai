"use client";
import { blogPosts } from "@/sections/Blogs/blogPosts";
import { Card, CardContent } from "@/sections/Blogs/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/sections/Blogs/button";
import BlogPostCard from "@/sections/Blogs/BlogPostCard";

const Blog = () => {
  const featuredPost = blogPosts.find((post) => post.id === "6") || blogPosts[0];
  const otherPosts = blogPosts.filter((post) => post.id !== featuredPost?.id);

  return (
    <>
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-purple-950 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              DataTroops.ai Blogs &amp; Insights
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              The latest trends and Blogs in AI, Machine Learning, and Data Science.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="col-span-1 md:col-span-2 lg:col-span-3"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div
                    className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center"
                    style={{
                      backgroundImage: `url('${featuredPost.imageUrl}')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-400 mb-6 mt-3">{featuredPost.excerpt}</p>
                    <Button variant="outline" className="group">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}

          {otherPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <BlogPostCard
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl || "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"}
                date={post.date}
                slug={post.slug}
                category={post.category}
              />
            </Link>
          ))}

          {blogPosts.length < 4 &&
            Array.from({ length: Math.max(0, 4 - blogPosts.length) }).map((_, index) => (
              <BlogPostCard
                key={`placeholder-${index}`}
                title="Upcoming article"
                excerpt="Stay tuned for more exciting articles about smart textiles and sensor technology."
                imageUrl={
                  index % 2 === 0
                    ? "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
                    : "/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png"
                }
                date="Coming soon"
                slug=""
                category="Upcoming"
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
