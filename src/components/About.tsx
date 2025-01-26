'use client'

import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
  {
    title: 'Cutting-edge Solutions',
    description: 'Leveraging the latest technologies to build modern applications',
    icon: CheckCircleIcon
  },
  {
    title: 'Expert Development',
    description: 'Team of skilled developers with years of industry experience',
    icon: CheckCircleIcon
  },
  {
    title: 'Agile Methodology',
    description: 'Flexible and iterative approach to project management',
    icon: CheckCircleIcon
  },
  {
    title: 'Innovation Focus',
    description: 'Constantly exploring new technologies and methodologies',
    icon: CheckCircleIcon
  }
]

const stats = [
  { label: 'Projects Completed', value: '100+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Team Members', value: '20+' },
  { label: 'Years Experience', value: '5+' }
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative">
      <div className="noise-contrast absolute inset-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-400">
                About Us
              </h2>
              <p className="text-lg text-purple-200/80">
                We are a forward-thinking technology company specializing in creating innovative digital solutions 
                for businesses worldwide. With years of experience and a passionate team of experts, 
                we transform ideas into powerful digital realities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="relative group"
                >
                  <div className={`absolute inset-0 rounded-lg -z-10 ${
                    index === 0 ? 'bg-gradient-to-r from-purple-600/10 to-fuchsia-600/10' :
                    index === 1 ? 'bg-gradient-to-r from-blue-600/10 to-cyan-600/10' :
                    index === 2 ? 'bg-gradient-to-r from-emerald-600/10 to-teal-600/10' :
                    'bg-gradient-to-r from-rose-600/10 to-pink-600/10'
                  }`} />
                  <div className="relative p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <feature.icon className={`h-5 w-5 ${
                        index === 0 ? 'text-purple-400' :
                        index === 1 ? 'text-blue-400' :
                        index === 2 ? 'text-emerald-400' :
                        'text-rose-400'
                      }`} />
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-purple-200/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Image */}
          <div className="mt-12 lg:mt-0 space-y-8">
            <div className="relative rounded-2xl overflow-hidden h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 mix-blend-overlay z-10" />
              <Image
                src="/about/team.jpg"
                alt="Our Team"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 rounded-xl backdrop-blur-sm ${
                    index === 0 ? 'bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10' :
                    index === 1 ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10' :
                    index === 2 ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10' :
                    'bg-gradient-to-r from-rose-500/10 to-pink-500/10'
                  }`}
                >
                  <div className={`text-2xl font-bold text-transparent bg-clip-text ${
                    index === 0 ? 'bg-gradient-to-r from-purple-400 to-fuchsia-400' :
                    index === 1 ? 'bg-gradient-to-r from-blue-400 to-cyan-400' :
                    index === 2 ? 'bg-gradient-to-r from-emerald-400 to-teal-400' :
                    'bg-gradient-to-r from-rose-400 to-pink-400'
                  }`}>
                    {stat.value}
                  </div>
                  <p className="text-purple-200/80 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 