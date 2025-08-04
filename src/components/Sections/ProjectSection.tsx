import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";

import ProjectCard from "../ProjectCard";
import { containerVariants, itemVariants } from "../../utils/variants";

const ProjectSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`py-24 px-6 ${
        isDarkMode
          ? "dark:bg-gray-950 dark:text-white"
          : "dark:bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >

        <div className="max-w-7xl mx-auto relative z-10">
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
                    Featured Projects
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-light mb-6"
                >
                    My <span className="text-blue-500 font-medium"> Projects</span>
                </motion.h2>


                <motion.p
                  variants={itemVariants}
                  className={`text-lg ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  } max-w-2xl mx-auto font-light`}
                >
                    The collection of passion projects I have worked on, to get expose to new technologies or I'm intrested in creating.
                </motion.p>

                

            </motion.div>

        </div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

            {PROJECTS.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode}/>
            ))}
        </motion.div>

    </section>
  );
};

export default ProjectSection;
