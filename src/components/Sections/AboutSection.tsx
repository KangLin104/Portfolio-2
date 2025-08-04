import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";

import {
  containerVariants,
  itemVariants,
  timelineVariants,
  stepsVariants,
} from "../../utils/variants";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode
          ? "dark:bg-gray-950 dark:text-white"
          : "dark:bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={` text-sm uppercase tracking-widest mb-4 ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Get To Know Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            About
            <span className="text-blue-500 font-medium"> Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div className="space-y-8">
            {/* My story */}
            <motion.div
              variants={containerVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700"
                  : "bg-gray-50/80 border-gray-200"
              } backdrop-blur-sm`}
            >
              <h3 className="text-2xl font-medium mb-6">
                My Developer Journey
              </h3>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I am a graduate from Baruch College majoring in Computer
                Information Systems with a passion for Software Engineering. I
                started off self-teaching myself how to code, and before I knew
                it, my journey in technology began. With curiosity and
                continuous learning, I have developed a diverse skill set in
                software development, web technologies, and problem-solving.
              </p>
            </motion.div>

            {/* Passion */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-medium mb-6">What I Love Building</h3>
              <div className="grid gap-4">
                {PASSIONS.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-800/30 hover:bg-gray-800/50"
                        : "bg-gray-50/50 hover:bg-gray-100/50"
                    } transition-all duration-300`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      }`}
                    >
                      <passion.icon size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{passion.title}</h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {passion.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            ref={timelineRef}
            variants={timelineVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            className="relative min-h-full"
          >
            <div className="text-2xl font-medium mb-8 text-center lg:text-left">
              My Journey as a Developer
            </div>

            {/* Vertical Line */}
            <div className="relative">
              <div
                className={`absolute left-8 top-0 bottom-0 w-px h-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              />

              {/* Timeline Content */}
              <div className="space-y-8 pb-16">
                {JOURNEY_STEPS.map((step) => (
                  <motion.div
                    variants={stepsVariants}
                    key={step.year}
                    whileHover={{ x: 4 }}
                    className="relative flex items-start space-x-6 group"
                  >
                    {/* Circle Icon */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-20 h-20 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon size={28} className="text-white" />
                    </div>

                    {/* Box */}
                    <div
                      className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                          : "bg-gray-50/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                      } backdrop-blur-sm`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-medium">{step.title}</h4>
                        <span
                          className={`text-sm px-3 py-1 rounded-full${
                            isDarkMode
                              ? " bg-gray-700 text-gray-300"
                              : " bg-gray-100 text-gray-700"
                          }`}
                        >
                          {step.year}
                        </span>
                      </div>

                      <div
                        className={`text-sm font-medium${
                          isDarkMode ? " text-blue-400" : " text-blue-600"
                        } mb-3`}
                      >
                        {step.Company}
                      </div>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-700"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
