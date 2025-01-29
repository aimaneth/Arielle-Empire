'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

// Sample blog posts data with detailed content
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI-powered tools to WebAssembly and Edge Computing.',
    category: 'Web Development',
    date: 'Feb 15, 2024',
    readTime: '5 min read',
    image: '/blog/web-dev-2024.png',
    author: {
      name: 'Ariffin Yusof',
      avatar: '/team/ariffin.jpg',
      role: 'CEO & Lead Developer'
    },
    tags: ['Web Development', 'JavaScript', 'AI', 'Edge Computing'],
    content: `
      The web development landscape is evolving rapidly, and 2024 brings exciting new possibilities. Here's what's shaping the future of web development:

      1. AI-Powered Development Tools
      - Copilot-style code assistants becoming mainstream
      - AI-driven testing and debugging
      - Automated code optimization and refactoring

      2. WebAssembly (Wasm) Evolution
      - More languages supporting Wasm
      - Better performance for complex web applications
      - Enhanced browser capabilities

      3. Edge Computing & Serverless
      - Distributed computing at the edge
      - Faster response times and better performance
      - Reduced server costs and complexity

      4. Enhanced Web APIs
      - Web GPU for better graphics performance
      - Web NFC and Bluetooth improvements
      - Advanced file system access

      5. Improved Developer Experience
      - Better build tools and bundlers
      - Enhanced debugging capabilities
      - More efficient development workflows
    `
  },
  {
    id: 2,
    title: 'Building Scalable Applications with Microservices',
    excerpt: 'A comprehensive guide to designing, implementing, and maintaining microservices architecture for modern applications.',
    category: 'Architecture',
    date: 'Feb 12, 2024',
    readTime: '7 min read',
    image: '/blog/microservices.png',
    author: {
      name: 'Emir Asyraf',
      avatar: '/team/emir.jpg',
      role: 'Lead Solutions Architect'
    },
    tags: ['Microservices', 'Architecture', 'DevOps', 'Cloud'],
    content: `
      Microservices architecture has become the standard for building large-scale applications. Here's your guide to implementing it effectively:

      1. Core Principles
      - Service independence and loose coupling
      - Single responsibility principle
      - API-first design approach
      - Data isolation and management

      2. Key Technologies
      - Container orchestration with Kubernetes
      - Service mesh implementation
      - API gateway solutions
      - Event-driven architecture

      3. Best Practices
      - Service discovery and registration
      - Circuit breakers and fault tolerance
      - Monitoring and observability
      - Security considerations

      4. Common Challenges
      - Data consistency across services
      - Service communication patterns
      - Testing strategies
      - Deployment complexity

      5. Implementation Strategy
      - Starting with monolith
      - Identifying service boundaries
      - Gradual migration approach
      - Monitoring and scaling
    `
  },
  {
    id: 3,
    title: 'AI Integration in Modern Applications',
    excerpt: 'Learn how to effectively integrate AI capabilities into your applications, from natural language processing to computer vision.',
    category: 'AI & ML',
    date: 'Feb 10, 2024',
    readTime: '6 min read',
    image: '/blog/ai-integration.png',
    author: {
      name: 'Aiman Asyraf',
      avatar: '/team/aiman.jpg',
      role: 'AI Solutions Architect'
    },
    tags: ['AI', 'Machine Learning', 'NLP', 'Computer Vision'],
    content: `
      Integrating AI into modern applications can significantly enhance their capabilities. Here's how to do it effectively:

      1. Natural Language Processing
      - Text analysis and sentiment detection
      - Language translation services
      - Chatbot implementation
      - Voice recognition integration

      2. Computer Vision
      - Image recognition and classification
      - Object detection and tracking
      - Face recognition systems
      - OCR implementation

      3. Machine Learning Models
      - Model selection and training
      - Model deployment strategies
      - Performance optimization
      - Continuous learning systems

      4. Integration Patterns
      - API-based integration
      - Edge computing deployment
      - Hybrid cloud solutions
      - Real-time processing

      5. Best Practices
      - Data privacy and security
      - Model versioning
      - Performance monitoring
      - Ethical considerations
    `
  },
  {
    id: 4,
    title: 'Web3 Development: Building for the Decentralized Web',
    excerpt: 'A deep dive into Web3 development, blockchain integration, and creating decentralized applications (dApps).',
    category: 'Web3',
    date: 'Feb 8, 2024',
    readTime: '8 min read',
    image: '/blog/web3-dev.png',
    author: {
      name: 'Ariffin Yusof',
      avatar: '/team/ariffin.jpg',
      role: 'CEO & Lead Developer'
    },
    tags: ['Web3', 'Blockchain', 'Ethereum', 'Smart Contracts'],
    content: `
      Web3 is revolutionizing how we build and interact with applications. Here's what you need to know:

      1. Blockchain Fundamentals
      - Understanding distributed ledgers
      - Consensus mechanisms
      - Smart contract development
      - Token standards and implementation

      2. Development Tools
      - Web3.js and ethers.js
      - Hardhat and Truffle
      - IPFS integration
      - MetaMask integration

      3. Smart Contract Development
      - Solidity best practices
      - Testing and deployment
      - Security considerations
      - Gas optimization

      4. Frontend Integration
      - Web3 wallet connection
      - Transaction handling
      - Event listening
      - State management

      5. Advanced Topics
      - Layer 2 solutions
      - Cross-chain development
      - NFT implementation
      - DeFi protocols
    `
  }
]

const categories = ['All', 'Web Development', 'Architecture', 'AI & ML', 'Web3', 'Mobile', 'Cloud']

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <>
      <Banner />
      <main className="min-h-screen bg-[#0A0A0A] pt-24">
        {/* Header Section */}
        <div className="relative py-16 bg-gradient-to-b from-purple-900/20 to-transparent">
          <div className="noise-contrast absolute inset-0" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Our Latest{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                  Insights
                </span>
              </h1>
              <p className="mt-4 text-lg text-purple-200/60 max-w-2xl mx-auto">
                Stay updated with the latest trends, insights, and best practices in technology and development.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white'
                    : 'text-purple-200/80 hover:text-purple-400 bg-purple-900/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#121212] rounded-2xl overflow-hidden border border-purple-900/20 hover:border-purple-500/30 transition-colors group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-purple-900/20" />
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-purple-200/60">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-purple-200/60 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="rounded-full"
                        />
                        <div>
                          <p className="text-sm font-medium text-white">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-purple-200/60">
                            {post.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                        Read more &rarr;
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 