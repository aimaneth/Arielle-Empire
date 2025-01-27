'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { useBanner } from '@/context/BannerContext'

export default function Banner() {
  const { isBannerVisible, setIsBannerVisible } = useBanner()

  if (!isBannerVisible) return null

  return (
    <AnimatePresence>
      {isBannerVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 right-0 z-[60] flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 px-4 py-2 sm:py-1.5 sm:px-3.5"
        >
          <div className="absolute left-[40%] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-purple-400 to-fuchsia-400 opacity-30"
              style={{
                clipPath:
                  'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
              }}
            />
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <p className="text-xs leading-5 text-white text-center">
              <strong className="font-semibold">Chinese New Year Special!</strong>
              <span className="hidden sm:inline ml-2">Get 30% off on all services until February 25th</span>
              <span className="sm:hidden ml-2 block">30% OFF - Limited Time!</span>
            </p>
            <a
              href="#contact"
              className="flex-none rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              Claim Now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <button
            type="button"
            className="flex-none p-1 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsBannerVisible(false)}
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-4 w-4" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 