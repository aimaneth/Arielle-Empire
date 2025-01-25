'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface SocialLinks {
  twitter?: string
  linkedin?: string
  github?: string
}

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  gradient: string
  social: SocialLinks
}

const team: TeamMember[] = [
  {
    name: 'Ariffin Yusof',
    role: 'CEO & Founder',
    image: '/team/ariffin.jpg',
    bio: 'Visionary leader with 7 years of experience in Business Development.',
    gradient: 'from-purple-600 to-fuchsia-600',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Aiman Asyraf',
    role: 'CTO',
    image: '/team/aiman.jpg',
    bio: 'Tech expert specializing in cloud architecture and AI.',
    gradient: 'from-fuchsia-600 to-violet-600',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Emir Asyraf',
    role: 'Lead Developer',
    image: '/team/emir.jpg',
    bio: 'Full-stack developer with a passion for clean code.',
    gradient: 'from-violet-600 to-purple-600',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Habib Abdullah',
    role: 'UX Designer',
    image: '/team/habib.jpg',
    bio: 'Creative designer focused on user-centered experiences.',
    gradient: 'from-purple-500 to-fuchsia-500',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
]

const socialIcons = {
  twitter: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  ),
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
}

interface TeamMemberCardProps {
  member: TeamMember
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -10 }}
        className="relative"
      >
        <div className="relative h-64 w-64 mx-auto rounded-2xl overflow-hidden glass-effect">
          <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
          {imageError ? (
            <div className="h-full w-full flex items-center justify-center bg-gray-800">
              <span className="text-4xl font-bold text-white/50">
                {member.name.charAt(0)}
              </span>
            </div>
          ) : (
            <>
              {isLoading && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse" />
              )}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className={`object-cover transition-all duration-500 ${
                  isLoading ? 'opacity-0' : 'opacity-100 group-hover:scale-110'
                }`}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false)
                  setImageError(true)
                }}
              />
            </>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
              {Object.entries(member.social).map(([platform, url]) => (
                url && (
                  <motion.a
                    key={platform}
                    href={url}
                    whileHover={{ y: -3 }}
                    className="text-white/90 hover:text-purple-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s ${platform}`}
                  >
                    {socialIcons[platform as keyof typeof socialIcons]}
                  </motion.a>
                )
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-medium text-white">{member.name}</h3>
        <p className="gradient-text font-medium">{member.role}</p>
        <p className="mt-2 text-purple-200/60 text-sm">{member.bio}</p>
      </div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <section id="team" className="py-24 bg-[#0A0A0A] relative before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-[0.07] before:mix-blend-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="gradient-text text-lg font-semibold tracking-wide uppercase">
            Our Team
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Meet the Experts
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
} 