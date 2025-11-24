import { getBlogPostBySlug } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { notFound } from "next/navigation";

export const revalidate = 3600;

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { file, title } = node.data.target.fields;
      return (
        <div className="my-8">
          <img
            src={`https:${file.url}`}
            alt={title || "Blog image"}
            width={800}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      return (
        <a
          href={node.data.uri}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { title, image, content, date } = post.fields as any;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <div className="mb-8 text-center">
          {date && (
            <p className="text-slate-500 mb-4">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
            {title}
          </h1>
        </div>

        {image && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={`https:${image.fields.file.url}`}
              alt={title}
              width={1200}
              height={675}
              className="w-full object-cover"
              // priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-slate prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800">
          {documentToReactComponents(content, renderOptions)}
        </div>
      </article>

      <FooterSection />
    </main>
  );
}
