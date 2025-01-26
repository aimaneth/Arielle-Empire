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
        {/* Static gradient background */}
        <div className="absolute inset-0">
          <div className="absolute -inset-[10px] opacity-30">
            <div className="absolute -top-20 -left-4 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full mix-blend-screen filter blur-[120px]" />
            <div className="absolute top-20 -right-4 w-[900px] h-[900px] bg-gradient-to-l from-fuchsia-600/20 to-pink-600/20 rounded-full mix-blend-screen filter blur-[130px]" />
            <div className="absolute -bottom-20 left-1/3 w-[850px] h-[850px] bg-gradient-to-tr from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[125px]" />
          </div>
        </div>

        {/* Static noise overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center z-10">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            Building Tomorrow&apos;s
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400">
              Digital Solutions
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-purple-200/80 mb-12 max-w-3xl">
            Transforming ideas into powerful digital experiences with cutting-edge technology and innovative design
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-purple-700 hover:to-fuchsia-700 shadow-lg shadow-purple-900/30"
            >
              Get Started
            </button>
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 bg-transparent border-2 border-purple-500/50 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Static scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="relative w-6 h-10 rounded-full border-2 border-purple-400/80 p-1.5 shadow-[0_0_15px_rgba(168,85,247,0.35)] backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-gradient-to-b from-purple-300 to-fuchsia-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
            <div className="absolute inset-0 rounded-full bg-purple-500/5 backdrop-blur-sm" />
          </div>
          <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300">
            Scroll
          </span>
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