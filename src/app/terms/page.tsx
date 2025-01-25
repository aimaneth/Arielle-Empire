'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Terms() {
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
          <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-purple max-w-none">
            <p className="text-purple-200/60">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Arielle Empire provides web and mobile application development services, including but not limited to:
            </p>
            <ul>
              <li>Custom software development</li>
              <li>Web application development</li>
              <li>Mobile app development</li>
              <li>Cloud solutions</li>
              <li>Digital transformation consulting</li>
            </ul>

            <h2>3. User Responsibilities</h2>
            <p>
              You agree to:
            </p>
            <ul>
              <li>Provide accurate information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use our services legally and responsibly</li>
              <li>Respect intellectual property rights</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by Arielle Empire and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              Arielle Empire shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>

            <h2>6. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
            </p>
            <p>Email: arielleofficialhq@gmail.com</p>
            <p>Phone: +60 (17) 371-4084</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 