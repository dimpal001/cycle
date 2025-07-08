'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import {
  BookOpen,
  Code,
  FileText,
  Folder,
  Github,
  Music,
  Slack,
  User,
  Video,
  Zap,
} from 'lucide-react'

const icons = [
  BookOpen,
  Code,
  FileText,
  Folder,
  Github,
  Music,
  Slack,
  User,
  Video,
  Zap,
]

const AutoScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        duration: 60,
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }, [controls])

  return (
    <div className='relative w-full overflow-hidden py-6'>
      <div className=' justify-center items-center w-full flex flex-col py-7 gap-3'>
        <button className='bg-black text-white font-bold p-3 px-8 rounded-xl'>
          Book demo
        </button>
        <p className='text-black/90 font-semibold'>Loved by product folks at</p>
      </div>
      <motion.div
        ref={containerRef}
        animate={controls}
        className='flex space-x-6 w-max'
      >
        {[...icons, ...icons].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15 }}
            className='w-36 h-28 min-w-[80px] bg-transparent rounded-xl flex items-center justify-center text-blue-600 border border-black/20'
          >
            <Icon size={32} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AutoScroll
