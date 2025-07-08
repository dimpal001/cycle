'use client'

import { Quote } from 'lucide-react'

export default function TestimonialSection() {
  return (
    <section className='w-full py-20 px-6 md:px-12'>
      <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10'>
        {/* Image on Left */}
        <img
          src='https://picsum.photos/400/400?grayscale'
          alt='Testimonial'
          className='rounded-2xl object-cover shadow-lg w-[200px] h-[150px]'
        />

        {/* Text + Quotation */}
        <div className='w-full flex flex-col justify-center relative'>
          <p className='italic text-2xl text-black/90 leading-relaxed z-10 relative pr-10'>
            Cycle is a slick AI tool that enables teams to build better products
            by getting smarter on what their customers want.
          </p>
        </div>

        {/* Quotation Icon */}
        <Quote size={64} className='text-blue-600 fill-blue-600' />
      </div>

      <div className='h-[1px] w-[300px] bg-black/10 my-7 mx-auto'></div>
      {/* Attribution Section */}
      <div className='max-w-4xl mx-auto flex justify-center items-center space-x-3'>
        <p className='text-gray-800 font-medium text-lg'>Olivier Godement</p>

        {/* Blue dot */}
        <span className='w-2 h-2 bg-blue-600 rounded-full'></span>

        {/* OpenAI name + logo */}
        <div className='flex items-center space-x-2'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/66/OpenAI_logo_2025_%28symbol%29.svg'
            alt='OpenAI Logo'
            className='w-5 h-5'
          />
          <span className='text-gray-700 font-semibold'>OpenAI</span>
        </div>
      </div>
    </section>
  )
}
