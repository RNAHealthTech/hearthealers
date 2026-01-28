// app/components/doctor/Blogs.tsx

'use client';

import React from 'react';

import { BlogContent } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

interface BlogsProps {
  blogs: BlogContent[];
  doctor?: 'drjay' | 'dranupam' | 'all';
}

const Blogs: React.FC<BlogsProps> = ({ blogs, doctor = 'all' }) => {
  // Debug the doctor parameter

  // Filter blogs based on doctor prop
  const filteredBlogs = doctor === 'all'
    ? blogs
    : blogs.filter(blog => blog.subdomain === doctor);


  // Get doctor name for page title
  const getDoctorName = (doctorCode: string) => {

    switch (doctorCode) {
      case 'drjay':
        return 'Medical Experts';
    }
  };

  // Get page description
  const getPageDescription = (doctorCode: string) => {

    switch (doctorCode) {
      case 'drjay':
        return 'Expert insights from our medical professionals on cardiology, heart health, and medical breakthroughs.';
    }
  };

  const doctorName = getDoctorName(doctor);
  const pageDescription = getPageDescription(doctor);
  const pageTitle = doctor === 'all' ? 'Medical Blogs' : `${doctorName} - Medical Blogs`;


  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="pediatric cardiology, heart defects, children health, medical blog" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section
          className="relative border-b border-gray-200 h-96 md:mt-20"
          style={{
            backgroundImage: "url('https://hearthealers.in/images/blog/blogs-bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-white/40 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {doctor === 'all' ? 'Medical Insights' : `${doctorName}'s Insights`}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {pageDescription}
              </p>


            </div>
          </div>
        </section>

        {/* Blog Cards Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-500 mb-2">No articles found</h3>
                  <p className="text-gray-400">
                    {doctor === 'all'
                      ? 'No blog articles are available at the moment.'
                      : `No articles found for ${doctorName}.`
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

interface BlogCardProps {
  blog: BlogContent;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Tags Overlay */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
            {blog.tags[0]}
          </span>
        </div>

        {/* Debug overlay (remove in production) */}
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-blue-500/90 backdrop-blur-sm rounded text-xs font-medium text-white">
            {blog.subdomain}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {blog.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {blog.description}
          </p>
        </div>

        {/* Read More Button */}
        <Link href={`/blogs/${blog.slug}`} className="block">
          <button className="w-full bg-gray-900 hover:bg-blue-600 text-white py-3 px-6 rounded-xl font-medium transition-colors duration-200 group-hover:bg-blue-600 cursor-pointer">
            Read Article
          </button>
        </Link>
      </div>
    </div>
  );
};


export default Blogs;