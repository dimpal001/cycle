'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import {
  User,
  FileText,
  Settings,
  BookOpen,
  Camera,
  MessageSquare,
  Bell,
  Code,
  Folder,
  Heart,
  Star,
} from 'lucide-react'
import ProfileSection from './ProfileSection'

const avatarPositions = [
  { top: '9%', left: '10%' },
  { top: '9%', right: '10%', left: 'auto' },
  { top: '25%', left: '5%' },
  { top: '25%', right: '5%', left: 'auto' },
  { top: '45%', left: '15%' },
  { top: '45%', right: '15%', left: 'auto' },
  { bottom: '25%', left: '5%', top: 'auto' },
  { bottom: '25%', right: '5%', top: 'auto', left: 'auto' },
  { bottom: '15%', left: '35%', top: 'auto' },
  { bottom: '15%', right: '35%', top: 'auto', left: 'auto' },
  { bottom: '5%', left: '45%', top: 'auto' },
]

const iconColors = [
  '#007AFF',
  '#FF2D55',
  '#5856D6',
  '#34C759',
  '#FF9500',
  '#AF52DE',
  '#FFCC00',
  '#5AC8FA',
  '#FF3B30',
  '#007AFF',
  '#34C759',
]

const icons = [
  <User size={24} />,
  <FileText size={24} />,
  <Settings size={24} />,
  <BookOpen size={24} />,
  <Camera size={24} />,
  <MessageSquare size={24} />,
  <Bell size={24} />,
  <Code size={24} />,
  <Folder size={24} />,
  <Heart size={24} />,
  <Star size={24} />,
]

export default function ScrollAvatarSequence() {
  const containerRef = useRef(null)
  const [triggered, setTriggered] = useState(false)
  const [showProcessing, setShowProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showProfile, setShowProfile] = useState(false)

  const controlsArray = avatarPositions.map(() => useAnimation())
  const profileControl = useAnimation()

  const animateAvatars = async () => {
    await controlsArray[0].start({
      top: '50%',
      left: '50%',
      bottom: undefined,
      right: undefined,
      opacity: 0,
      scale: 0.3,
      transition: { duration: 0.15, ease: 'easeInOut' },
    })

    await controlsArray[1].start({
      top: '50%',
      left: '50%',
      bottom: undefined,
      right: undefined,
      opacity: 0,
      scale: 0.3,
      transition: { duration: 0.15, ease: 'easeInOut' },
    })

    await Promise.all(
      controlsArray.slice(2).map((control) =>
        control.start({
          top: '50%',
          left: '50%',
          bottom: undefined,
          right: undefined,
          opacity: 0,
          scale: 0.3,
          transition: { duration: 0.4, ease: 'easeInOut' },
        })
      )
    )

    setShowProcessing(true)
  }

  const reverseAvatars = async () => {
    if (showProfile) {
      await profileControl.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.2, ease: 'easeInOut' },
      })
      setShowProfile(false)
    }

    setShowProcessing(false)
    setProgress(0)

    await Promise.all(
      controlsArray
        .map((control, i) => ({ control, i }))
        .filter(({ i }) => i !== 0 && i !== 1)
        .map(({ control, i }) =>
          control.start({
            ...avatarPositions[i],
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2, ease: 'easeInOut' },
          })
        )
    )

    await controlsArray[1].start({
      ...avatarPositions[1],
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    })

    await controlsArray[0].start({
      ...avatarPositions[0],
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    })

    setTriggered(false)
  }

  const simulateProcessing = () => {
    const durationInSeconds = 0.4
    const durationInMs = durationInSeconds * 1000
    const start = performance.now()

    const animate = (now) => {
      const elapsed = now - start
      const progressPercent = Math.min(100, (elapsed / durationInMs) * 100)
      const roundedProgress = Math.floor(progressPercent)
      setProgress(roundedProgress)

      if (progressPercent < 100) {
        requestAnimationFrame(animate)
      } else {
        setProgress(100)

        setTimeout(() => {
          setShowProcessing(false)
          setTimeout(() => {
            setShowProfile(true)
            profileControl.start({
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.2,
                ease: 'easeOut',
                type: 'spring',
                stiffness: 100,
              },
            })
          }, 200)
        }, 200)
      }
    }

    requestAnimationFrame(animate)
  }

  const handleWheel = (e) => {
    const delta = e.deltaY

    if (!triggered && delta > 0) {
      e.preventDefault()
      setTriggered(true)
      animateAvatars()
    } else if (triggered && delta < 0) {
      e.preventDefault()
      reverseAvatars()
    }
  }

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    node.addEventListener('wheel', handleWheel, { passive: false })
    return () => node.removeEventListener('wheel', handleWheel)
  }, [triggered, showProfile])

  useEffect(() => {
    if (showProcessing) {
      simulateProcessing()
    }
  }, [showProcessing])

  return (
    <div
      ref={containerRef}
      className='relative w-full flex flex-col items-center h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-transparent'
    >
      <header className='flex items-center space-x-4 w-full p-5'>
        <span className='text-2xl font-bold text-gray-800'>Cycle</span>
        <nav className='space-x-4'>
          <a href='#' className='text-gray-600 hover:text-gray-800'>
            Product
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-800'>
            Changelog
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-800'>
            Manifesto
          </a>
          <a href='#' className='text-gray-600 hover:text-gray-800'>
            Resources
          </a>
        </nav>
        <a href='#' className='ml-auto text-gray-600 hover:text-gray-800'>
          Log in
        </a>
        <button className='bg-black text-sm text-white font-bold p-2 px-5 rounded-xl'>
          Get started
        </button>
      </header>

      {avatarPositions.map((pos, i) => (
        <motion.div
          key={i}
          initial={{
            position: 'absolute',
            width: 50,
            height: 50,
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(5px)',
            color: iconColors[i % iconColors.length],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            ...pos,
          }}
          animate={controlsArray[i]}
        >
          {icons[i]}
        </motion.div>
      ))}

      {!showProfile && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: -50,
            opacity: 0,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          className='text-center'
        >
          <motion.h1
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -50,
              opacity: 0,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            className='text-5xl font-bold text-gray-800 mb-4'
          >
            Your feedback hub,
            <br />
            on autopilot
          </motion.h1>
          <motion.p
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -50,
              opacity: 0,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            className='text-gray-400 mb-8'
          >
            Cycle is the fastest way for your team to capture product feedback
            and share <br /> customer insights – without the busywork.
          </motion.p>
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -50,
              opacity: 0,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }}
            className='bg-gradient-to-r from-white via-blue-50 to-white mx-auto w-[650px] shadow-sm p-6 rounded-xl'
          >
            <div className='bg-white mx-auto w-full shadow-md p-6 rounded-xl'>
              <div className='mx-auto flex-col h-auto py-8 bg-white/80 backdrop-blur-md rounded-xl border border-gray-300 border-dashed p-6 flex items-center justify-center'>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: { duration: 2, repeat: Infinity },
                  }}
                  className='w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center'
                ></motion.div>
                {!showProcessing && (
                  <motion.p
                    initial={{ y: 0, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{
                      y: -50,
                      opacity: 0,
                      transition: { duration: 0.3, ease: 'easeInOut' },
                    }}
                    className='text-gray-700 mt-2'
                  >
                    Drop anything to capture feedback
                  </motion.p>
                )}
                {showProcessing && !showProfile && (
                  <div className='text-center p-2'>
                    <div className='font-medium text-gray-800 mb-2'>
                      Processing... {progress}%
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-2 overflow-hidden'>
                      <div
                        className='bg-blue-500 h-full transition-all duration-200 ease-in-out'
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {showProfile && !showProcessing && <ProfileSection />}
    </div>
  )
}
