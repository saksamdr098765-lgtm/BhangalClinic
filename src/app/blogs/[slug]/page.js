
import { blogs } from "@/app/data/blogs";
import ReadingProgress from "./components/ReadingProgress";
import Breadcrumb from "./components/Breadcrumb";
import BlogHero from "./components/BlogHero";
import BlogContent from "./components/BlogContent";
import BlogSidebar from "./components/BlogSideBar";
import PreviousNext from "./components/PreviousNext";
import RelatedPosts from "./components/RelatedPosts";
import FAQSection from "./components/FAQSection";
import ShareButtons from "./components/ShareButton";
import TableOfContents from "./components/TableOfContent";
import RelatedPackages from "./components/RelatedPackages";
import { getBlogSchema } from "@/schema/BlogSchema";
import SITE_CONFIG from "@/app/SITE_CONFIG";
import BlogCTA from "./components/BlogCTA";
import BlogQuickInfo from "./components/BlogQuickInfo";
import RelatedTests from "./components/RelatedTest";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
export async function generateMetadata({ params }) {
  const {slug}=await params
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {};
  }

  const url = `${SITE_CONFIG.url}/blogs/${blog.slug}`;

  return {
    title: blog.seo.title,

    description: blog.seo.description,

    keywords: blog.seo.keywords,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: blog.seo.title,

      description: blog.seo.description,

      url,

      siteName: SITE_CONFIG.name,

      type: "article",

      locale: "en_IN",

      publishedTime: blog.publishedAt,

      modifiedTime: blog.updatedAt || blog.publishedAt,

      authors: [blog.author.name],

      images: [
        {
          url: `${SITE_CONFIG.url}${blog.coverImage}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: blog.seo.title,

      description: blog.seo.description,

      images: [`${SITE_CONFIG.url}${blog.coverImage}`],
    },
  };
}

export default async function BlogPage({ params }) {
  const {slug}=await params
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }
 const schemas=getBlogSchema(blog)
  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <>
      {schemas.map((schema, index) => (
  <script
    key={index}
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />
))}
      <ReadingProgress />

      <main className="bg-white ">

        {/* Hero Section */}
        <section className="border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <Breadcrumb blog={blog} />
            <BlogHero blog={blog} />
            <BlogQuickInfo blog={blog} />
          </div>
        </section>

        {/* Content & Sidebars Section */}
        <section className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid gap-6 lg:gap-8 xl:grid-cols-[240px_minmax(0,1fr)_300px]">
            {/* Left Sidebar */}
            <aside className="hidden xl:block">
              <div className="sticky top-24">
                <TableOfContents content={blog.content} />
              </div>
            </aside>

            {/* Main Content */}
            <article className="min-w-0">
              <BlogContent content={blog.content} />
              <FAQSection faq={blog.faq} />
              <BlogCTA CTA={blog.cta} />
              <RelatedTests relatedTests={blog.relatedTests} />
              <RelatedPackages relatedPackages={blog.relatedPackages} />
              <ShareButtons blog={blog} />
              <PreviousNext currentBlog={blog} blogs={blogs} />
            </article>

            {/* Right Sidebar */}
            <aside className="hidden lg:block">
              <BlogSidebar currentBlog={blog} blogs={blogs} />
            </aside>
          </div>
        </section>

        {/* Related Posts Section */}
        <section className="border-t border-gray-100 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <RelatedPosts blogs={relatedBlogs} />
          </div>
        </section>

      </main>
    </>
  );
}