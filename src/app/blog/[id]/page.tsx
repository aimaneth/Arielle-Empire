'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useParams } from 'next/navigation'
import type { BlogPost } from '../data'
import { blogPosts } from '../data'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'

export default function BlogPost() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const currentPost = blogPosts.find(p => p.id.toString() === params.id)
    setPost(currentPost || null)

    // Find related posts based on category
    if (currentPost) {
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3)
      setRelatedPosts(related)
    }
  }, [params.id])

  const markdownComponents: Components = {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-white mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-purple-200/80 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="text-purple-200/80">{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
  }

  if (!post) {
    return (
      <>
        <Banner />
        <div className="min-h-screen bg-[#0A0A0A] pt-24 flex items-center justify-center">
          <div className="text-purple-200/60">Loading...</div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Banner />
      <main className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-purple-200/60">
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-white font-medium">{post.author.name}</p>
                  <p className="text-purple-200/60 text-sm">{post.author.role}</p>
                  <p className="text-purple-200/60 text-sm">{post.date}</p>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl mb-12">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={675}
                className="object-cover"
                priority
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-purple-200/60 bg-purple-900/20 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-purple max-w-none">
              <ReactMarkdown components={markdownComponents}>
                {post.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      width={400}
                      height={225}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-purple-200/60 mt-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
} 
