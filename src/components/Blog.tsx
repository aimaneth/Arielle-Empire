'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    author: 'John Doe',
    date: '2024-03-15',
    image: '/blog/web-dev.jpg',
    category: 'Technology',
    gradient: 'from-purple-600 to-fuchsia-600',
  },
  {
    title: 'Mobile App Development Best Practices',
    excerpt: 'Essential tips and practices for building successful mobile applications.',
    author: 'Jane Smith',
    date: '2024-03-10',
    image: '/blog/mobile-dev.jpg',
    category: 'Development',
    gradient: 'from-fuchsia-600 to-violet-600',
  },
  {
    title: 'Cloud Computing Solutions',
    excerpt: 'Understanding modern cloud architecture and deployment strategies.',
    author: 'Mike Johnson',
    date: '2024-03-05',
    image: '/blog/cloud.jpg',
    category: 'Cloud',
    gradient: 'from-violet-600 to-purple-600',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0A0A0A] relative before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-[0.07] before:mix-blend-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="gradient-text text-lg font-semibold tracking-wide uppercase">
            Our Blog
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Latest Articles
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group glass-effect rounded-2xl overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-purple-200/60">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm text-purple-300/80">
                  <div className="flex items-center space-x-2">
                    <UserIcon className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center text-purple-400 hover:text-purple-300 cursor-pointer"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ y: -5 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-fuchsia-700 transform transition-all shadow-lg shadow-purple-900/30"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 