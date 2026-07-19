
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

export async function generateMetadata({ params }) {
  const blog = blogs.find((item) => item.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seo.title,
    description: blog.seo.description,
    keywords: blog.seo.keywords,

    openGraph: {
      title: blog.seo.title,
      description: blog.seo.description,
      images: [blog.coverImage],
    },
  };
}

export default async function BlogPage({ params }) {
  const {slug}=await params
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <>
      <ReadingProgress />

      <main className="bg-white">

        {/* Hero */}

        <section className="border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-10">

            <Breadcrumb blog={blog} />

            <BlogHero blog={blog} />

          </div>
        </section>

        {/* Content */}

     <section className="mx-auto max-w-[1500px] px-6 py-14">

  <div className="grid gap-10 xl:grid-cols-[260px_minmax(0,1fr)_320px]">

    {/* Left Sidebar */}

    <aside className="hidden xl:block">

      <div className="sticky top-28">
        <TableOfContents content={blog.content} />
      </div>

    </aside>

    {/* Main Content */}

    <article className="min-w-0">

      <BlogContent content={blog.content} />

      <FAQSection faq={blog.faq} />
<RelatedPackages
    relatedPackages={blog.relatedPackages}
/>
      <ShareButtons blog={blog} />

      <PreviousNext
        currentBlog={blog}
        blogs={blogs}
      />

    </article>

    {/* Right Sidebar */}

    <aside className="hidden lg:block">

      <BlogSidebar
        currentBlog={blog}
        blogs={blogs}
      />

    </aside>

  </div>

</section>

        {/* Related */}

        <section className="border-t border-gray-100 bg-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-20">

            <RelatedPosts blogs={relatedBlogs} />

          </div>

        </section>

      </main>
    </>
  );
}