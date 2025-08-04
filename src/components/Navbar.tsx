import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = ["Home", "Skills", "About", "Projects", "Contact"];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const textColor = isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900";
  const bgColor = isDarkMode ? "bg-gray-950/80 border-gray-800" : "bg-gray-50/80 border-gray-200";
  const borderColor = isDarkMode ? "border-gray-800" : "border-gray-300";
  const dropdownBg = isDarkMode ? "bg-gray-900" : "bg-white";

  const renderNavLink = (item: string, isMobile = false) => (
    <motion.button
      key={item}
      whileHover={isMobile ? { x: 5 } : { y: -2 }}
      className={`${
        isMobile ? "block w-full text-left py-2" : ""
      } text-sm uppercase tracking-wide transition-colors cursor-pointer ${textColor}`}
      onClick={() => scrollToSection(item.toLowerCase())}
    >
      {item}
    </motion.button>
  );

  const ThemeToggleButton = ({ className = "" }: { className?: string }) => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
      className={`p-2 rounded-full transition-colors ${textColor} ${className}`}
    >
      {isDarkMode ? <Sun size={18} className="text-white" /> : <Moon size={18} />}
    </motion.button>
  );

  const MenuToggleButton = () => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={`p-2 rounded-full transition-colors ${textColor}`}
    >
      {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
    </motion.button>
  );

  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 backdrop-blur-md border-b ${bgColor}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.1 }}>
          <Code2 size={24} className="text-blue-500" />
          <span className={`font-semibold ${textColor}`}>Kang Lin</span>
        </motion.div>

        {/* Desktop + Mobile Icons */}
        <div className="flex items-center space-x-4">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menu.map(item => renderNavLink(item))}
            <ThemeToggleButton />
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggleButton />
            <MenuToggleButton />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 p-4 rounded-lg border ${borderColor} ${dropdownBg}`}
          >
            {menu.map(item => renderNavLink(item, true))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
