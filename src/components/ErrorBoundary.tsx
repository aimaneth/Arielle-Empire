'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full glass-effect rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-purple-200/60 mb-6">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold 
                hover:from-purple-700 hover:to-fuchsia-700 transform transition-all shadow-lg shadow-purple-900/30"
            >
              Refresh Page
            </button>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 