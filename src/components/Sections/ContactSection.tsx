import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { SOCIALS } from "../../utils/data";

import { containerVariants, itemVariants } from "../../utils/variants";

import { useTheme } from "../../context/ThemeContext";

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 px-6 ${
        isDarkMode
          ? "dark:bg-gray-950 dark:text-white"
          : "dark:bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center mb-20"
      >
        <motion.div
          variants={itemVariants}
          className={`text-sm uppercase tracking-widest ${
            isDarkMode ? "text-gray-500" : "text-gray-600"
          } mb-4`}
        >
          Let Connect
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-light mb-6"
        >
          Lets Get In <span className="text-blue-500 font-medium"> Touch</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className={`text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } max-w-2xl mx-auto font-light`}
        >
          Let's connect through email or LinkedIn. I also have my Github link as
          well.
        </motion.p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center space-x-6 mb-12"
      >
        {SOCIALS.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target={social.type === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`p-3 rounded-full transform-all duration-300 ${
              isDarkMode
                ? "bg-gray-800/50 hover:bg-gray-700/50"
                : "bg-gray-100/50 hover:bg-gray-200"
            } ${social.color} bakcdrop-blur-sm`}
            whileHover={{ scale: 1.1, y: -2, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: index * 0.1 + 0.5,
              type: "spring",
              stiffness: 300,
            }}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </motion.div>

      {/* divider */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <div
          className={`h-px w-60 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
        />
      </motion.div>

      {/* CopyRight */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-12 mb-6 text-sm text-gray-500"
      >
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-500" : "text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} Kang Lin. All rights reserved.
        </p>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <motion.button
          onClick={scrollTop}
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white"
              : "bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-900"
          } backdrop:blur-sm border ${
            isDarkMode ? "border-gray-700" : "border-gray-300"
          }`}
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: isDarkMode
              ? "0 10px 25px rgba(59, 130, 246, 1.15)"
              : "0 10px 25px rgba(59, 130, 246, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={16} />
          <span>Back to Top</span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ContactSection;
