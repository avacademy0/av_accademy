import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { getBlogPosts } from "@/lib/contentful";

export const revalidate = 3600; 

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      {/* Hero — using PageTemplate pattern for metadata and consistent header */}
      <header className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 text-center">
        <span className="inline-block bg-[#48F4DC] text-[14px] px-4 py-1 rounded-full font-medium text-black">
          Blogs
        </span>

        <h1 className="mt-8 text-4xl md:text-6xl  text-slate-900 ">
          Our latest news and trending topics
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-base md:text-lg">
          Every brand has a story worth telling. Our blog is more than just a
          collection of articles; it's a community of forward-thinkers,
          dreamers, and doers ready to make their mark on the digital world.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-semibold transition hover:bg-black hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get in touch
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-full text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Cards container with rounded background like screenshot */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pb-20">
        <div className="bg-gray-100 rounded-[20px] p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <article
                key={post.sys.id}
                className="bg-white rounded-xl p-4 border border-transparent shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform flex flex-col"
              >
                <div className="rounded-lg overflow-hidden mb-4">
                  {post.fields.image && (
                    <img
                      src={`https:${post.fields.image.fields.file.url}`}
                      alt={post.fields.title}
                      width={800}
                      height={520}
                      className="w-full h-44 md:h-40 lg:h-44 object-cover"
                    />
                  )}
                </div>

                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-slate-900 mb-2">
                  {post.fields.title}
                </h3>

                <p className="text-sm text-slate-600 flex-1">
                  {post.fields.excerpt}
                </p>

                <div className="mt-4 text-sm">
                  <a
                    href={`/blog/${post.fields.slug}`}
                    className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                  >
                    <span>View blog</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
