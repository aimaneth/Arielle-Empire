'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ContactModal from './Modal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-black">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary gradient blobs */}
          <div className="absolute -inset-[10px] opacity-50">
            <motion.div 
              animate={{
                scale: [1, 1.2, 1.1, 1],
                x: [0, 30, -20, 0],
                y: [0, -30, 20, 0],
                rotate: [0, 45, -45, 0],
                opacity: [0.5, 0.7, 0.6, 0.5]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-20 -left-4 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/40 to-violet-600/40 rounded-full mix-blend-screen filter blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.3, 1.2],
                x: [0, -40, 20, 0],
                y: [0, 30, -20, 0],
                rotate: [0, -45, 45, 0],
                opacity: [0.5, 0.8, 0.6, 0.5]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-20 -right-4 w-[900px] h-[900px] bg-gradient-to-l from-fuchsia-600/40 to-pink-600/40 rounded-full mix-blend-screen filter blur-[130px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.4, 1.2, 1],
                x: [0, 40, -30, 0],
                y: [0, -40, 30, 0],
                rotate: [0, 30, -30, 0],
                opacity: [0.5, 0.7, 0.6, 0.5]
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-20 left-1/3 w-[850px] h-[850px] bg-gradient-to-tr from-violet-600/40 via-purple-600/40 to-fuchsia-600/40 rounded-full mix-blend-screen filter blur-[125px]"
            />
          </div>

          {/* Secondary floating blobs */}
          <div className="absolute -inset-[10px] opacity-40">
            <motion.div
              animate={{
                x: [0, 60, -40, 0],
                y: [0, -40, 60, 0],
                scale: [1, 1.1, 0.9, 1],
                opacity: [0.4, 0.6, 0.5, 0.4]
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-violet-600/30 rounded-full mix-blend-screen filter blur-[100px]"
            />
            <motion.div
              animate={{
                x: [0, -50, 30, 0],
                y: [0, 60, -40, 0],
                scale: [1, 0.9, 1.1, 1],
                opacity: [0.4, 0.6, 0.5, 0.4]
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-pink-600/30 via-fuchsia-600/30 to-purple-600/30 rounded-full mix-blend-screen filter blur-[110px]"
            />
          </div>
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Building Tomorrow&apos;s
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400">
              Digital Solutions
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-purple-200/80 mb-12 max-w-3xl"
          >
            Transforming ideas into powerful digital experiences with cutting-edge technology and innovative design
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-fuchsia-700 transform hover:scale-105 transition-all shadow-lg shadow-purple-900/30"
            >
              Get Started
            </button>
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 bg-transparent border-2 border-purple-500/50 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10 transform hover:scale-105 transition-all"
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="relative w-6 h-10 rounded-full border-2 border-purple-400/80 p-1.5 shadow-[0_0_15px_rgba(168,85,247,0.35)] backdrop-blur-sm"
          >
            <motion.div
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.8, 0.2, 0.8],
                scale: [1, 0.9, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 bg-gradient-to-b from-purple-300 to-fuchsia-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500/5 backdrop-blur-sm" />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300"
          >
            Scroll
          </motion.span>
        </div>

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/30 to-[#0A0A0A] pointer-events-none"></div>
      </section>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
} 