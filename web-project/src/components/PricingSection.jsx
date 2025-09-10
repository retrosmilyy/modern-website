import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../ultils/motion";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1);

  // calculate product price based on count
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <section className="py-20 px-4">
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        {/* heading */}
        <motion.h2
          variants={textVariant(0.1)}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Pricing
        </motion.h2>

        {/* pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* starter plan */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
            <p className="text-3xl font-bold mb-6">${starterPrice}/mo</p>
          </motion.div>

          {/* business plan */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl text-gray-600 mb-4">Business</h3>
            <p className="text-3xl font-bold mb-6">${businessPrice}/mo</p>
          </motion.div>
        </div>

        {/* slider + call to action */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="max-w-xl mx-auto"
        >
          <p className="text-center text-gray-600 mb-4">{productCount} products</p>
          <div className="relative px-4">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                type="range"
                min="1"
                max="50"
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>

            <motion.div
              variants={fadeIn("up", 0.5)}
              className="text-center mt-12"
            >
              <p className="text-xl text-gray-600 mt-4">
                Ready to get started?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer mt-3"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
