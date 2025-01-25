'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { AnimatePresence } from 'framer-motion'

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  gradient: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: PhoneIcon,
    label: 'Phone (Whatsapp)',
    value: '+60 (17) 371-4084',
    gradient: 'from-purple-600 to-fuchsia-600',
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'gritstudiox@gmail.com',
    gradient: 'from-fuchsia-600 to-violet-600',
  },
  {
    icon: MapPinIcon,
    label: 'Address',
    value: 'NO 20-2-2 JALAN 6/18A TAMAN MASTIARA 5 OFF JALAN IPOH 51200 KUALA LUMPUR W.P KUALA LUMPUR',
    gradient: 'from-violet-600 to-purple-600',
  },
]

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required'
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }

  return errors
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Form validation
    const formErrors = validateForm(formData)
    setErrors(formErrors)
    if (Object.keys(formErrors).length > 0) return

    // Rate limiting - one submission per minute
    const now = Date.now()
    if (now - lastSubmitTime < 60000) {
      setSubmitStatus('error')
      setErrors({ message: 'Please wait a minute before submitting again' })
      return
    }

    setIsSubmitting(true)
    
    try {
      // Send email using your preferred email service
      // Example using a hypothetical API endpoint:
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setLastSubmitTime(now)
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
      setErrors({ message: 'Failed to send message. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }, [errors])

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-[0.07] before:mix-blend-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="gradient-text text-lg font-semibold tracking-wide uppercase">
            Contact Us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Get in Touch
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-purple-200/80 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      id={field}
                      value={formData[field as keyof FormData]}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-lg bg-[#121212] border border-purple-500/20 text-white px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                        errors[field as keyof FormErrors] ? 'ring-2 ring-red-500' : ''
                      }`}
                      aria-invalid={errors[field as keyof FormErrors] ? 'true' : 'false'}
                      aria-describedby={`${field}-error`}
                    />
                    {errors[field as keyof FormErrors] && (
                      <p id={`${field}-error`} className="mt-1 text-sm text-red-400">
                        {errors[field as keyof FormErrors]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-purple-200/80">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg bg-[#121212] border border-purple-500/20 text-white px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                    errors.subject ? 'ring-2 ring-red-500' : ''
                  }`}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby="subject-error"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-200/80">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-lg bg-[#121212] border border-purple-500/20 text-white px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${
                    errors.message ? 'ring-2 ring-red-500' : ''
                  }`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby="message-error"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold 
                    hover:from-purple-700 hover:to-fuchsia-700 transform transition-all shadow-lg shadow-purple-900/30
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </motion.div>
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400 text-center"
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.p>
                )}
                {submitStatus === 'error' && !errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-center"
                  >
                    Failed to send message. Please try again later.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#121212] border border-purple-500/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient}`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-purple-200/80">{item.label}</p>
                    <p className="mt-1 text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 