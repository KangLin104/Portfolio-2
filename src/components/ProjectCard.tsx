import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { FiGithub } from "react-icons/fi";
import { cardVariants } from "../utils/variants";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
  live_url: string | null;
  github_url: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isDarkMode: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDarkMode }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative"
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-800 hover:bg-gray-700 hover:shadow-2xl hover:shadow-blue-500/10"
            : "bg-white/80 border-gray-200 hover:bg-gray-300 hover:shadow-2xl hover:shadow-blue-500/10"
        } backdrop-blur-sm`}
      >
        {/* Project Image Placeholder */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 bg-opacity-70 backdrop-blur-sm flex items-center justify-center space-x-4"
          >
            {project.live_url && (
              <motion.a
                href={project.live_url}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </motion.a>
            )}

            <motion.a
              href={project.github_url}
              target="_blank"
              className="border-2 border-white bg-white text-gray-900 rounded-full px-4 py-2 flex items-center space-x-2 text-sm font-medium transition-all"
            >
              <FiGithub size={16} />
              <span>Github</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Project Image Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-8 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>

          <p
            className={`text-sm leading-relaxed mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {project.description}
          </p>

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
