import React from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  textVariant,
  staggerContainer,
  slideIn,
  scale,
} from "../ultils/motion";

const features = [
  {
    icon: "🔍",
    title: "Find out what you need",
    description: "We present you a proposal and discuss nitty-gritty like",
  },
  {
    icon: "⚙️",
    title: "Work out the details",
    description: "Communication protocols apart from engagement models",
  },
  {
    icon: "🚀",
    title: "We get to work fast",
    description: "Protocols apart from engage models, pricing billing",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* heading text */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">
          How can we help you business
        </h2>
        <p className="text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </motion.div>

      {/* feature box */}
      <div className="grid grid-col-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6"
          >
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                background:
                  index === 0 ? "#F1eff0" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <motion.div
                variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
               className="text-3xl">{feature.icon}</motion.div>
            </div>
            <motion.h3
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              className="text-2xl font-medium mb-3"
            >
              {feature.title}
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView="show"
              className="text-gray-500 text-center"
            >
              {feature.description}
            </motion.p>
          </div>
        ))}
      </div>

      {/* button */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative">
          Become a Partner
          <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blue-xl top-0 left-0 "></div>
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
