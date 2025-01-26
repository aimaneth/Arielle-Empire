'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CodeBracketIcon, DevicePhoneMobileIcon, CloudArrowUpIcon, CubeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface Technology {
  icon: string
  name: string
}

interface Metric {
  name: string
  value: string
  label: string
}

interface Service {
  title: string
  subtitle: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  borderGlow: string
  textAccent: string
  type: 'tech-list' | 'metrics'
  technologies?: Technology[]
  metrics?: Metric[]
}

const services: Service[] = [
  {
    title: 'Web Development',
    subtitle: 'Modern web solutions.',
    description: 'Full-stack development with the latest technologies and frameworks.',
    icon: CodeBracketIcon,
    gradient: 'from-blue-500/30 to-blue-600/30',
    borderGlow: '',
    textAccent: 'text-blue-400',
    type: 'tech-list',
    technologies: [
      { icon: '/tech/react.svg', name: 'React.js' },
      { icon: '/tech/next.svg', name: 'Next.js' },
      { icon: '/tech/node.svg', name: 'Node.js' },
      { icon: '/tech/typescript.svg', name: 'TypeScript' }
    ]
  },
  {
    title: 'Mobile Development',
    subtitle: 'Native & Cross-platform.',
    description: 'Build powerful mobile apps for iOS and Android platforms.',
    icon: DevicePhoneMobileIcon,
    gradient: 'from-purple-500/30 to-purple-600/30',
    borderGlow: '',
    textAccent: 'text-purple-400',
    type: 'tech-list',
    technologies: [
      { icon: '/tech/flutter.svg', name: 'Flutter' },
      { icon: '/tech/react-native.svg', name: 'React Native' },
      { icon: '/tech/swift.svg', name: 'Swift' },
      { icon: '/tech/kotlin.svg', name: 'Kotlin' }
    ]
  },
  {
    title: 'Cloud Solutions',
    subtitle: 'Scalable infrastructure.',
    description: 'Deploy and scale your applications seamlessly.',
    icon: CloudArrowUpIcon,
    gradient: 'from-emerald-500/30 to-emerald-600/30',
    borderGlow: '',
    textAccent: 'text-emerald-400',
    type: 'tech-list',
    technologies: [
      { icon: '/tech/aws.svg', name: 'AWS Cloud' },
      { icon: '/tech/gcp.svg', name: 'Google Cloud' },
      { icon: '/tech/azure.svg', name: 'Azure Cloud' },
      { icon: '/tech/docker.svg', name: 'Docker' }
    ]
  },
  {
    title: 'AI Integration',
    subtitle: 'Intelligent solutions.',
    description: 'Leverage machine learning and AI capabilities.',
    icon: CubeIcon,
    gradient: 'from-rose-500/30 to-rose-600/30',
    borderGlow: '',
    textAccent: 'text-rose-400',
    type: 'metrics',
    metrics: [
      { name: 'Machine Learning', value: 'Custom Models', label: 'Tailored Solutions' },
      { name: 'NLP', value: 'ChatGPT & GPT-4', label: 'AI Chatbots' },
      { name: 'Computer Vision', value: 'Image Analysis', label: 'Visual AI' }
    ]
  }
]

interface TechnologyIconProps {
  src: string
  alt: string
  className?: string
}

const TechnologyIcon: React.FC<TechnologyIconProps> = ({ src, alt, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative w-6 h-6 ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-700 rounded-full" />
      )}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-full">
          <span className="text-xs">?</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={24}
          height={24}
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
      )}
    </div>
  )
}

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] relative">
      <div className="noise-contrast absolute inset-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title Section */}
        <div className="space-y-2 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h2 className="text-4xl font-bold font-display sm:text-5xl">
              Our Services
            </h2>
            <p className="max-w-[900px] mx-auto text-gray-400">
              Comprehensive solutions for your digital needs. From web development to AI integration,
              we deliver cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredService(service.title)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative rounded-2xl overflow-hidden group"
            >
              {/* Card background with gradient */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-b ${service.gradient}`}
                animate={{
                  opacity: hoveredService === service.title ? 0.4 : 0.3,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Noise overlay for card */}
              <div className="noise-contrast absolute inset-0" />
              
              {/* Card content */}
              <motion.div 
                className="relative p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className={`w-6 h-6 ${service.textAccent}`} />
                  <h3 className="text-xl text-white font-medium">{service.title}</h3>
                </div>

                <h2 className={`text-2xl font-semibold mb-2 ${service.textAccent}`}>{service.subtitle}</h2>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {service.type === 'tech-list' && service.technologies && (
                  <div className="grid grid-cols-2 gap-3">
                    {service.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center gap-3 p-3 rounded-lg bg-black/30 hover:bg-black/40 transition-colors border border-transparent hover:border-${service.textAccent.split('-')[1]}/20`}
                      >
                        <TechnologyIcon src={tech.icon} alt={tech.name} />
                        <div>
                          <div className="text-white font-medium">{tech.name}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {service.type === 'metrics' && service.metrics && (
                  <div className="space-y-3">
                    {service.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center justify-between p-3 rounded-lg bg-black/30 hover:bg-black/40 transition-colors border border-transparent hover:border-${service.textAccent.split('-')[1]}/20`}
                      >
                        <span className="text-white">{metric.name}</span>
                        <div className="text-right">
                          <div className="text-white font-medium">{metric.value}</div>
                          <div className={`text-sm ${service.textAccent}`}>{metric.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 