'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import {
  Video,
  FileText,
  Mic,
  Slack,
  Github,
  Zap,
  Music,
  Book,
  Sparkles,
} from 'lucide-react'

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const itemControls = useAnimation()

  useEffect(() => {
    setIsVisible(true)
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    })

    const sequence = Array(8)
      .fill()
      .map((_, i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.1, duration: 0.2, ease: 'easeOut' },
      }))
    itemControls.start(sequence)
  }, [controls, itemControls])

  const items = [
    <Video size={18} />,
    <FileText size={18} />,
    <Mic size={18} />,
    <Slack size={18} />,
    <Github size={18} />,
    <Zap size={18} />,
    <Music size={18} />,
    <Book size={18} />,
  ]

  return (
    <div className='relative flex items-center justify-center w-screen h-screen overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className='flex w-11/12  bg-blue-50 backdrop-blur-md rounded-2xl shadow-lg p-6'
      >
        <div className='w-[28%] flex flex-col justify-start rounded-2xl mr-8 border-blue-500 items-start space-y-6 p-8 border border-dashed'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
            className='w-full bg-white/80 p-4 rounded-lg shadow-md'
          >
            <div className='flex justify-between items-start'>
              <div className='flex flex-col'>
                <p className='text-gray-700 text-sm'>
                  We need to have it fully integrated
                </p>
                <a href='#' className='text-blue-500 text-sm underline'>
                  Link
                </a>
                <div className='space-y-1 mt-2'>
                  <div className='w-40 h-3 bg-gray-200 rounded animate-pulse'></div>
                  <div className='w-32 h-3 bg-gray-200 rounded animate-pulse'></div>
                </div>
              </div>
              <img
                src='https://picsum.photos/60'
                alt='User'
                className='rounded-md w-16 h-16 object-cover'
              />
            </div>
          </motion.div>

          <div className='grid grid-cols-4 gap-4'>
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={itemControls}
                custom={index}
                className='w-12 h-12 bg-white/70 rounded-full flex items-center justify-center text-gray-800 shadow hover:shadow-lg transition-shadow duration-200'
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className='w-[72%] h-full p-6 flex flex-col space-y-6 bg-white shadow-md rounded-2xl'>
          <div className='grid grid-cols-2 gap-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              className='bg-white/80 p-4'
            >
              <h3 className='text-black text-sm font-semibold mb-2 flex items-center gap-2'>
                <Sparkles size={18} className='text-blue-700' />
                Top feature requests
              </h3>
              <div className='space-y-3'>
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <div key={i} className='flex items-center space-x-2'>
                      <div className='w-3/4 p-[2px] bg-blue-50 h-5 rounded-full overflow-hidden'>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(i + 1) * 20}%` }}
                          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                          className='h-full bg-gradient-to-r from-blue-400 to-blue-200 rounded-full'
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              className='bg-white/80 p-4'
            >
              <h3 className='text-black text-sm font-semibold mb-2 flex items-center gap-2'>
                <Sparkles size={18} className='text-blue-700' />
                Feedback status
              </h3>
              <div className='flex items-center justify-center gap-8'>
                <svg width='160' height='160' className='relative'>
                  <motion.circle
                    cx='80'
                    cy='80'
                    r='70'
                    fill='none'
                    stroke='#D1D5DB'
                    strokeWidth='10'
                  />
                  <motion.circle
                    cx='80'
                    cy='80'
                    r='70'
                    fill='none'
                    stroke='#3B82F6'
                    strokeWidth='10'
                    strokeDasharray='440'
                    strokeDashoffset={440 * (1 - 0.7)}
                    initial={{ strokeDashoffset: 440 }}
                    animate={{ strokeDashoffset: 440 * (1 - 0.7) }}
                    transition={{ duration: 0.6 }}
                    style={{
                      transform: 'rotate(-90deg)',
                      transformOrigin: 'center',
                    }}
                  />
                  <circle cx='80' cy='80' r='8' fill='#6B7280' />{' '}
                </svg>

                <div className='flex flex-col space-y-3'>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className='flex items-center space-x-2'>
                      <span className='w-3 h-3 rounded-full bg-pink-200'></span>
                      <span className='h-1.5 rounded-full w-16 bg-blue-200'></span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              className='p-4'
            >
              <h3 className='text-black text-sm font-semibold mb-4 flex items-center gap-2'>
                <Sparkles size={18} className='text-blue-700' />
                Customers with most feedback
              </h3>

              <div className='flex items-end justify-between h-48 w-[80%] px-4 gap-2'>
                {Array(6)
                  .fill()
                  .map((_, i) => (
                    <div
                      key={i}
                      className='flex w-5 flex-col items-center h-full bg-pink-50 rounded-full p-[2px]'
                    >
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(6 - i) * 10 + 20}%` }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                        className='w-full rounded-full bg-pink-200 h-full mt-auto'
                      />
                    </div>
                  ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 0.5 },
              }}
              className='bg-white/80 p-4'
            >
              <h3 className='text-black text-sm font-semibold mb-2 flex items-center gap-2'>
                <Sparkles size={18} className='text-blue-700' />
                Summary of customer quotes
              </h3>
              <div className='border rounded-lg p-4 space-y-3 bg-white/70 backdrop-blur-md shadow-sm'>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '70%' }}
                  transition={{ duration: 0.6 }}
                  className='h-4 bg-gradient-to-r from-green-500 via-green-300 to-green-500 rounded-full'
                />

                <div className='space-y-2'>
                  {[60, 90, 75, 50, 80].map((w, i) => (
                    <div
                      key={i}
                      className='h-3 rounded-full bg-gray-300'
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileSection
