import React from 'react'
import ScrollItems from '@/app/components/ScrollItems'
import AutoScroll from './components/AutoScroll'
import TestimonialSection from './components/TestimonialSection'
import FeedbackSection from './components/FeedbackSection'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='bg-gray-50'>
      <ScrollItems />
      <div className='min-h-screen'>
        <AutoScroll />
        <TestimonialSection />
        <FeedbackSection />
      </div>
      <div className='p-5'>
        <Footer />
      </div>
    </div>
  )
}

export default page
