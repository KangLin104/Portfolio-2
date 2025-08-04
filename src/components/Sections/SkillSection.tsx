import { useRef } from "react";
import { motion, useInView} from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/variants";
import { useTheme } from "../../context/ThemeContext";

const frontEndSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js"];
const backEndSkills = ["Node.js", "Express", "Python", "MySQL", "NoSQL", "MongoDB"];
const platformSkills = ["AWS", "ServiceNow", "Datadog", "Figma"];

const SkillSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 px-6 ${
        isDarkMode
          ? "dark:bg-gray-950 dark:text-white"
          : "dark:bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
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
            Technical Skills
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Skills &<span className="text-blue-500 font-medium"> Technologies</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            I have a diverse set of skills and technologies that I have acquired
            through personal projects and professional experience.
          </motion.p>
        </motion.div>

        {/* Skills Containers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {/* Frontend Box */}
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-500">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
              {frontEndSkills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-sm font-medium shadow ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend Box */}
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-500">
              Backend
            </h3>
            <div className="flex flex-wrap gap-3">
              {backEndSkills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-sm font-medium shadow ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Platform Box */}
          <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-500">
              Platforms & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {platformSkills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-sm font-medium shadow ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
