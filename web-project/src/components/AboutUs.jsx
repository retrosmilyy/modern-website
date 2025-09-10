import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../ultils/motion";

const AboutUs = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];

  return (
    <section
      className="w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side (heading text) */}
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView="show"
            className="flex flex-col justify-center pl-8"
          >
            <p className="text-sm text-purple-600 font-medium mb-2">
              ACHIEVE MORE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-md">
              Purpose of a convoy is to keep your team
            </h2>
          </motion.div>

          {/* Right side (features in 2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pr-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                {/* icon */}
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center"
                >
                  {feature.icon}
                </motion.div>

                {/* title + description */}
                <div className="flex flex-col">
                  <motion.h3
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="text-lg font-semibold text-gray-900"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className="text-gray-600 leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
