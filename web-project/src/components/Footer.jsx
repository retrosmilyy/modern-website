import React from "react"
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion"

const footerLinks = {
  company: [
    { name: "About", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "How it Works", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  getHelp: [
    { name: "Support Carrer", href: "#" },
    { name: "24h Service", href: "#" },
    { name: "Quick Chat", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Policy", href: "#" },
    { name: "Business", href: "#" },
  ],
  contact: [
    { name: "WhatsApp", href: "#" },
    { name: "Support 24", href: "#" },
  ],
}

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* brand column */}
          <motion.div className="lg:col-span-4" variants={fadeUp}>
            <div className="flex gap-1 items-center mb-4">
              <div className="flex items-center gap-1 cursor-pointer">
                <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
                <div className="w-4 h-4 bg-red-500 -ml-2.5 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
              </div>
              <span className="text-sl font-medium ml-1">The Next Design</span>
            </div>
            <p className="text-gray-600 mb-6 md:w-3/4">
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeUp}
                >
                  <Icon className="size-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* footer navigation */}
          <motion.div
            className="lg:col-span-8"
            variants={fadeUp}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <motion.div key={categoryIndex} variants={fadeUp}>
                    <h3 className="text-lg font-medium mb-4 uppercase">
                      {category}
                    </h3>
                    <ul className="space-y-3">
                      {links.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* footer bottom section */}
        <motion.div
          className="border-t border-gray-200 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              Copyright @ {new Date().getFullYear()} learningreact.com
            </p>
            <p className="text-gray-600 text-sm">Made by Elvis Osei Bonsu</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
