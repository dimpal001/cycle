'use client'

import { motion } from 'framer-motion'
import { Slack, Mic, BookOpen } from 'lucide-react'

const features = [
  {
    icon: Slack,
    title: 'Capture feedback from anywhere',
    description:
      'Connect sources like Slack, Intercom, HubSpot, Email & more to create feedback with context.',
  },
  {
    icon: Mic,
    title: 'Record & transcribe customer calls',
    description:
      "Invite Cycle's recorder to any Zoom, G Meet or Teams call to fetch transcripts & summaries.",
  },
  {
    icon: BookOpen,
    title: 'Document your user research',
    description:
      'Co-write docs in real-time, add tables, toggles, and translate or rephrase with AI.',
  },
]

export default function FeedbackSection() {
  return (
    <section className='w-full py-16 px-6 md:px-12'>
      <div className='max-w-4xl mx-auto text-center mb-12'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-5xl font-semibold text-gray-900'
        >
          The fastest feedback capture <br /> you’ll ever see
        </motion.h2>
      </div>

      <div className='grid gap-6 md:grid-cols-3'>
        {features.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className='p-5 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-sm transition'
            >
              <div className='flex items-start gap-2 mb-2'>
                <Icon className='w-4 h-4 text-blue-600 mt-0.5' />
                <h3 className='text-sm font-medium text-gray-800'>
                  {feature.title}
                </h3>
              </div>
              <p className='text-xs text-gray-500 pl-6 leading-relaxed'>
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
