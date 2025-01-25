'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface FooterLink {
  name: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface SocialLink {
  name: string
  href: string
  icon: string
  hoverColor: string
}

const footerLinks: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Team', href: '#team' },
      { name: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#blog' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Documentation', href: '#' },
      { name: 'Guides', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'License', href: '/license' },
    ],
  },
]

const socialLinks: SocialLink[] = [
  { 
    name: 'GitHub', 
    href: '#', 
    icon: '/github.svg',
    hoverColor: 'hover:text-gray-400'
  },
  { 
    name: 'Twitter', 
    href: '#', 
    icon: '/twitter.svg',
    hoverColor: 'hover:text-blue-400'
  },
  { 
    name: 'LinkedIn', 
    href: '#', 
    icon: '/linkedin.svg',
    hoverColor: 'hover:text-blue-600'
  },
  { 
    name: 'Instagram', 
    href: '#', 
    icon: '/instagram.svg',
    hoverColor: 'hover:text-pink-500'
  },
]

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address')
      return
    }

    setSubscriptionStatus('loading')
    setErrorMessage('')

    try {
      // Call your newsletter subscription API
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error('Subscription failed')

      setSubscriptionStatus('success')
      setEmail('')
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setSubscriptionStatus('error')
      setErrorMessage('Failed to subscribe. Please try again later.')
    }
  }

  return (
    <footer className="bg-[#0A0A0A] relative before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-[0.07] before:mix-blend-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-purple-900/20">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold gradient-text">
                ARIELLE EMPIRE
              </Link>
              <p className="mt-4 text-purple-200/60 max-w-sm">
                Building tomorrow's digital solutions with cutting-edge technology and innovative design.
              </p>
              <p className="mt-2 text-purple-200/40 text-sm">
                201903354986 (003060459-U)
              </p>

              {/* Newsletter Subscription */}
              <div className="mt-6">
                <h4 className="text-white font-medium mb-2">Subscribe to our newsletter</h4>
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-l-lg glass-effect text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                    <button
                      type="submit"
                      disabled={subscriptionStatus === 'loading'}
                      className={`px-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-r-lg 
                        hover:from-purple-700 hover:to-fuchsia-700 transition-all
                        ${subscriptionStatus === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {subscriptionStatus === 'loading' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Subscribing...
                        </span>
                      ) : 'Subscribe'}
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  )}
                  {subscriptionStatus === 'success' && (
                    <p className="text-green-400 text-sm">Successfully subscribed!</p>
                  )}
                </form>
              </div>

              <div className="mt-6 flex space-x-4">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ y: -3 }}
                    className={`p-2 rounded-full glass-effect hover:bg-purple-500/10 transition-all ${item.hoverColor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${item.name}`}
                  >
                    <span className="sr-only">{item.name}</span>
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-purple-200/60 hover:text-purple-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-purple-200/60 text-sm">
              © {new Date().getFullYear()} Arielle Empire. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link
                href="/privacy"
                className="text-purple-200/60 hover:text-purple-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-purple-200/60">•</span>
              <Link
                href="/terms"
                className="text-purple-200/60 hover:text-purple-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 