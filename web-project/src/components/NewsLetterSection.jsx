import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

const NewsLetterSection = () => {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      id="newsletter"
    >
      <motion.div
        className="bg-blue-600 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 100 }} // Start hidden & slide up
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }} // Runs only once
      >
        <div className="relative md:px-16 py-16 px-6 md:py-24">
          {/* gradient bg */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* left content */}
            <motion.div
              className="text-white max-w-lg text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                Subscribe newsletter
              </h2>
              <p className="text-blue-100 text-sm sm:text-base">
                Best cooks and best delivery guys all at your service. Hot tasty
                food.
              </p>
            </motion.div>

            {/* right content */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
              />
              <button className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2">
                <span>Discover</span>
                <HiArrowRight className="size-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)
          }
        `}
      </style>
    </section>
  )
}

export default NewsLetterSection
