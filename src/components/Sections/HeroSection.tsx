import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { SOCIALS } from "../../utils/data";
import {
  containerVariants,
  itemVariants,
  textVariants,
} from "../../utils/variants";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const CTAButtons = () => (
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
    >
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection("Projects")}
        className={`px-6 py-3 rounded-full text-sm font-semibold uppercase transition-colors ${
          isDarkMode
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        View Project
      </motion.button>

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection("About")}
        className={`border ${
          isDarkMode
            ? "border-gray-700 hover:border-gray-600 text-gray-300"
            : "border-gray-300 hover:border-gray-400 text-gray-700"
        } px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
      >
        View Experience / Journey
      </motion.button>
    </motion.div>
  );

  const SocialIcons = () => (
    <motion.div
      variants={itemVariants}
      className="flex justify-center lg:justify-start space-x-6 mb-8"
    >
      {SOCIALS.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target={social.type === "email" ? undefined : "_blank"}
          whileHover={{ y: -3, scale: 1.1 }}
          className={`p-3 rounded-full transition-colors ${
            isDarkMode
              ? "text-gray-400 hover:text-white hover:bg-gray-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );

  const HeroContent = () => (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div
        variants={textVariants}
        className={`text-sm uppercase tracking-wider ${subTextColor} mb-4`}
      >
        Software Engineer
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl lg:text-5xl xl:text-7xl font-light mb-6 leading-tight"
      >
        <span className={`${textColor}`}>Building Digital</span>{" "}
        <span className="text-blue-500 font-medium">Experience</span>{" "}
        <span className="">That Matters</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className={`text-base lg:text-lg ${subTextColor} mb-8 lg:mb-12 font-light leading-relaxed max-w-xl`}
      >
        I am a software engineer with a passion for creating impactful digital
        experiences. I work both on the frontend and backend, crafting solutions
        that enhance user engagement and drive results.
      </motion.p>

      <CTAButtons />
      <SocialIcons />
    </motion.div>
  );

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >

        {/* Content layout */}
        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          <div className="block lg:hidden">
            <HeroContent />
          </div>
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <HeroContent />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
