'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function License() {
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
          <h1 className="text-3xl font-bold text-white mb-8">Company License & Registration</h1>
          <div className="prose prose-invert prose-purple max-w-none">
            <p className="text-purple-200/60">Last updated: {new Date().toLocaleDateString()}</p>

            <h2>Company Registration</h2>
            <p>
              Grit Studio is officially registered in Malaysia under the following details:
            </p>
            <ul>
              <li>Registration Number: 201903354986</li>
              <li>Business Registration (ROB): 003060459-U</li>
              <li>Incorporation Date: 2019</li>
              <li>Business Type: Enterprise (Partner)</li>
            </ul>

            <h2>Business Licenses</h2>
            <p>
              Our company holds all necessary licenses and permits required by Malaysian law to operate in the technology and software development sector, including:
            </p>
            <ul>
              <li>SSM Business License</li>
              <li>Local Authority Business Premise License</li>
              <li>MSC Malaysia Status (if applicable)</li>
            </ul>

            <h2>Compliance</h2>
            <p>
              We strictly adhere to all Malaysian regulations and standards, including:
            </p>
            <ul>
              <li>Companies Act 2016</li>
              <li>Personal Data Protection Act 2010</li>
              <li>Employment Act 1955</li>
              <li>Digital Signature Act 1997</li>
            </ul>

            <h2>Professional Memberships</h2>
            <p>
              We are proud members of various professional bodies in Malaysia:
            </p>
            <ul>
              <li>Malaysia Digital Economy Corporation (MDEC)</li>
              <li>Technology Innovation Federation of Malaysia</li>
              <li>Malaysia Digital Chamber of Commerce (MDCC)</li>
            </ul>

            <h2>Contact Information</h2>
            <p>
              For any inquiries regarding our business licenses and registrations, please contact us at:
            </p>
            <p>Email: gritstudiox@gmail.com</p>
            <p>Phone: +60 (17) 371-4084</p>
            <p>
              Registered Office Address:<br />
              No 20-2-2 Jalan 6/18A Taman Mastiara 5<br />
              OFF Jalan Ipoh<br />
              51200 Kuala Lumpur<br />
              Wilayah Persekutuan<br />
              Malaysia<br />
            </p>

            <div className="mt-8 p-4 bg-purple-900/10 rounded-lg border border-purple-900/20">
              <p className="text-sm text-purple-200/80">
                Note: All business activities are conducted in compliance with Malaysian law and regulations. 
                Our registration details can be verified through the Companies Commission of Malaysia (SSM).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 