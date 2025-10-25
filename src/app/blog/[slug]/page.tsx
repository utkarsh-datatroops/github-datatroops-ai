"use client";
import BlogPostDetail from "@/sections/Blogs/BlogPostDetail";
import { useParams } from "next/navigation";

const Blog = () => {
  const { slug } = useParams();
  return <BlogPostDetail title={slug} />;
};

export default Blog;
