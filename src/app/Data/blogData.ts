import { BlogPost, BlogSectionConfig } from "@/app/Types/blogTypes";
import blogsImage from "@/assets/images/blogs.avif";
import blogsImage2 from "@/assets/images/test-2.avif";
import blogsImage3 from "@/assets/images/test-3.avif";
import blogsImage4 from "@/assets/images/test-4.jpg";

// Default category colors
export const categoryColors = {
  "AI Solutions": "bg-purple-100 text-purple-700",
  "Healthcare Innovation": "bg-green-100 text-green-700",
  "E-Commerce": "bg-pink-100 text-pink-700",
  FinTech: "bg-blue-100 text-blue-700",
} as const;

// Sample blog posts data
export const defaultBlogPosts: BlogPost[] = [
  {
    id: "ai-chatbot-guide",
    title: "How To Choose The Perfect AI Chatbot For Your Business",
    excerpt:
      "Learn how to select the ideal AI chatbot to enhance your customer service, automate responses, and improve operational efficiency for your business.",
    imageSrc: blogsImage,
    category: "AI Solutions",
    categoryColor: categoryColors["AI Solutions"],
    isHighlighted: true,
    url: "blogs/how-to-choose-perfect-ai-chatbot-for-your-business",
  },
  {
    id: "ai-healthcare",
    title: "AI in Healthcare: Revolutionizing Patient Care",
    excerpt:
      "Explore how AI is revolutionizing healthcare, improving diagnostics, patient care, and operational efficiency across the globe.",
    imageSrc: blogsImage2,
    category: "Healthcare Innovation",
    categoryColor: categoryColors["Healthcare Innovation"],
  },
  {
    id: "ai-ecommerce",
    title: "The Role of AI in E-Commerce: Enhancing User Experience",
    excerpt:
      "AI is transforming the e-commerce landscape by delivering personalized shopping experiences, optimizing inventory, and boosting sales. Learn how businesses can thrive using AI.",
    imageSrc: blogsImage3,
    category: "E-Commerce",
    categoryColor: categoryColors["E-Commerce"],
  },
  {
    id: "deep-learning-finance",
    title: "How Deep Learning Is Changing the Financial Industry",
    excerpt:
      "Discover how deep learning models are reshaping financial services by enabling better fraud detection, risk management, and predictive market insights.",
    imageSrc: blogsImage4,
    category: "FinTech",
    categoryColor: categoryColors["FinTech"],
  },
];

// Default configuration for the blog section
export const defaultBlogConfig: BlogSectionConfig = {
  title: "Our Latest Blogs",
  subtitle:
    "At DataTroops.ai, we share valuable insights on AI-driven solutions, the latest in tech innovations, and how AI is shaping industries. Stay updated with our articles.",
  posts: defaultBlogPosts,
  showGradientLine: true,
  maxWidth: "7xl",
  gridCols: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
};
