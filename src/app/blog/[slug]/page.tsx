import { blogPosts } from "@/sections/Blogs/blogPosts";
import BlogPostDetail from "@/sections/Blogs/BlogPostDetail";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPageProps {
  params: { slug: string };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return <div>Post Not Found</div>;

  return <BlogPostDetail post={post} />;
};

export default BlogPage;
