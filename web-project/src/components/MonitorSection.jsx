import React from "react";
import monitorCardImg from "../assets/monitor-card.webp";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { fadeIn, textVariant, staggerContainer } from "../ultils/motion";
import { motion } from "framer-motion";

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        variants={staggerContainer(0.2, 0.3)} // children stagger
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24"
      >
        {/* left */}
        <div className="md:w-1/2 w-full">
          <motion.p
            variants={fadeIn("up", 0.1)}
            className="text-green-500 font-semibold"
          >
            MONITOR
          </motion.p>

          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text- font-bold text-neutral-900 mt-4 mb-6 md:w-4/5"
          >
            Introducing best mobile
            <br />
            carousels
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-gray-600 mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos laborum magni quaerat? Soluta est at id, pariatur iure
            tempore! Eius assumenda, cumque deserunt blanditiis quo est nesciunt
            minus tempore.
          </motion.p>

          <motion.a
            variants={fadeIn("up", 0.4)}
            href="#"
            className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 hover:text-blue-400 transition-all"
          >
            Explore scheduling features
            <HiMiniArrowLongRight className="size-7" />
          </motion.a>
        </div>

        {/* right */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-1/2 w-full"
        >
          <img
            src={monitorCardImg}
            alt="monitor image"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MonitorSection;
