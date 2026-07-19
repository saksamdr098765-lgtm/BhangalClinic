
import { blogs } from "../data/blogs";
import BlogGrid from "./components/BlogGrid";
import BlogHero from "./components/BlogHero";
import FeaturedBlog from "./components/FeaturedBlog";
import HealthPackagesCTA from "./components/HealthPackagesCTA";


export default function BlogsPage() {
  const featuredBlog = blogs.find((blog) => blog.featured);
  const otherBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <>
      <BlogHero totalBlogs={blogs.length} />

      <FeaturedBlog blog={featuredBlog} />

      <BlogGrid blogs={otherBlogs} />

      <HealthPackagesCTA />
    </>
  );
}