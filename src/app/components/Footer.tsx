'use client'

import { motion } from 'framer-motion'
import { X, Dribbble, Linkedin } from 'lucide-react'

export default function Footer() {
  const links = [
    {
      title: 'Compare',
      items: [
        'vs Productboard',
        'vs Notion',
        'vs Airfocus',
        'vs Harvestr',
        'vs Dovetail',
        'vs Enterpret',
      ],
    },
    {
      title: 'Explore',
      items: [
        'Integrations',
        'Docs',
        'API',
        'Slack',
        'Changelog',
        'Blog',
        'Security',
      ],
    },
    {
      title: 'Company',
      items: ['Manifesto', 'Press Kit', 'Status'],
    },
    {
      title: 'Legal',
      items: ['Terms of Service', 'Privacy Policy'],
    },
  ]

  const socials = [
    { icon: X, label: 'X' },
    { icon: Dribbble, label: 'Dribbble' },
    { icon: Linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className='bg-[#111] text-white py-12 px-6 md:px-16 rounded-3xl'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12'>
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='flex flex-col justify-between h-full w-1/2'
        >
          <div className='space-y-2'>
            <div className='flex items-center gap-2 text-xl font-bold'>
              <div className='w-5 h-5 rounded-full bg-white' />
              <span>Cycle</span>
            </div>
            <p className='text-sm text-gray-400'>
              © Cycle. 2025 — All rights reserved.
            </p>
          </div>
          <div className='flex items-center gap-3 mt-6'>
            {socials.map(({ icon: Icon, label }, index) => (
              <button
                key={index}
                aria-label={label}
                className='w-8 h-8 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition'
              >
                <Icon className='w-4 h-4 text-white' />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right Section: Link Columns */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 w-full text-sm'>
          {links.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <h4 className='font-semibold mb-3'>{section.title}</h4>
              <ul className='space-y-2 text-gray-400'>
                {section.items.map((item, subIdx) => (
                  <li key={subIdx} className='hover:text-white cursor-pointer'>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  )
}
