'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Privacy() {
  return (
    <section className="py-24 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/"
            className="text-purple-400 hover:text-purple-300 mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-purple max-w-none">
            <p className="text-purple-200/60">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including when you:
            </p>
            <ul>
              <li>Contact us through our website</li>
              <li>Sign up for our services</li>
              <li>Create an account</li>
              <li>Subscribe to our newsletter</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries</li>
              <li>Send you updates and marketing communications</li>
              <li>Improve our services</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and interests</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>Email: gritstudiox@gmail.com</p>
            <p>Phone: +60 (17) 371-4084</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 