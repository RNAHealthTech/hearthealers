'use client';

import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { blogs, BlogContent } from '@/data/blogs';
import Image from 'next/image';
import Head from 'next/head';

interface BlogTemplateProps {
  blog: BlogContent;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content={blog.tags.join(', ')} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.imageUrl} />
        <meta property="og:type" content="article" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 bg-opacity-80 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>

            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              {blog.description}
            </p>



          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-gray max-w-none">
              {blog.content.map((paragraph, index) => {
                // Handle different content types
                if (typeof paragraph === 'string') {
                  // Check if it's a heading
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-3xl font-bold text-gray-800 mt-12 mb-6">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('• ')) {
                    // Handle bullet points
                    return (
                      <ul key={index} className="list-disc ml-6 mb-6">
                        <li className="text-gray-600 leading-relaxed mb-2">
                          {paragraph.replace('• ', '')}
                        </li>
                      </ul>
                    );
                  } else {
                    // Regular paragraph
                    return (
                      <p key={index} className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {paragraph}
                      </p>
                    );
                  }
                } else {
                  // Handle ReactNode content
                  return (
                    <div key={index} className="mb-6">
                      {paragraph}
                    </div>
                  );
                }
              })}
            </article>



            {/* Related Tags */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Topics</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blog = blogs.find((blog) => blog.slug === params?.slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
  };
};

export default BlogTemplate;