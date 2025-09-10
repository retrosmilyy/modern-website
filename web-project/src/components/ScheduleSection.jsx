import React from "react";
import scheduleImage from "../assets/stats.webp";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../ultils/motion";

const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        <motion.div
          variants={slideIn("left", "spring", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="md:w-1/2 w-full"
        >
          <img
            src={scheduleImage}
            alt="schedule image"
            className="w-full h-auto rounded-lg hover:scale-[1.02] transition-transform duration-300"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="md:w-1/2 w-full"
        >
          <motion.p
            variants={textVariant(0.4)}
            className="text-orange-500 font-semibold"
          >
            SCHEDULE
          </motion.p>

          <motion.h2
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show" 
            className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6"
          >
            Streamline Your Business
            <br />
            With Smart Scheduling Solutions
          </motion.h2>

          <motion.p variants={fadeIn("up", 0.8)} className="text-gray-600 mb-8">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experience through
            seamless calendar management.
          </motion.p>

          <motion.a
            variants={fadeIn("right", 1)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 hover:text-blue-400 transition-all"
          >
            Explore scheduling features
            <HiMiniArrowLongRight className="size-7" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
