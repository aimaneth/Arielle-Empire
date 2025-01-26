'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => {
        onClose()
      }, 2000) // Close after 2 seconds so user can see success message
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="min-h-full flex items-center justify-center p-4">
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-lg relative"
              >
                <div className="relative bg-[#121212] rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-900/20 border border-purple-900/20 m-auto">
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-purple-200/60 hover:text-purple-300 transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>

                  <h2 className="text-2xl font-bold text-white mb-2">Let's Get Started</h2>
                  <p className="text-purple-200/60 mb-6">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-purple-200/80 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-purple-500/20 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-purple-200/80 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-purple-500/20 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-purple-200/80 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-purple-500/20 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <p className="text-green-400 text-sm text-center">
                        Message sent successfully!
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-red-400 text-sm text-center">
                        Failed to send message. Please try again.
                      </p>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 
                        text-white font-semibold hover:from-purple-700 hover:to-fuchsia-700 
                        transform transition-all shadow-lg shadow-purple-900/30
                        ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
} 