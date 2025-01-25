'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe',
    category: 'web',
    image: '/portfolio/ecommerce.png',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and intuitive mobile banking application',
    category: 'mobile',
    image: '/portfolio/banking.png',
  },
  {
    title: 'Cloud Management Dashboard',
    description: 'Enterprise cloud resource management system',
    category: 'cloud',
    image: '/portfolio/cloud.png',
  },
  {
    title: 'Healthcare Platform',
    description: 'Digital healthcare management system',
    category: 'web',
    image: '/portfolio/healthcare.png',
  },
  {
    title: 'ICO Landing Page',
    description: 'Decentralised Crypto ICO Platform',
    category: 'web',
    image: '/portfolio/cryptoico.png',
  },
  {
    title: 'Crypto Dashboard',
    description: 'Decentralised Crypto Dashboard',
    category: 'web',
    image: '/portfolio/cryptodashboard.png',
  },
]

const categories = ['all', 'web', 'mobile', 'cloud']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = portfolioItems.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  )

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A] relative before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-[0.07] before:mix-blend-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="gradient-text text-lg font-semibold tracking-wide uppercase">
            Our Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>
        </motion.div>

        <div className="mt-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white'
                  : 'glass-effect text-purple-200/80 hover:text-purple-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="glass-effect rounded-2xl overflow-hidden bg-[#121212]">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={640}
                      height={360}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-[#121212]">
                    <h3 className="text-lg font-medium text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-purple-200/60">
                      {project.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
                      >
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
} 