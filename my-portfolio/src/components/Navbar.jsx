import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/artworks", label: "Artworks" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-gray-900/95 shadow-lg shadow-gray-900/20"
            : "bg-blue-100/95 shadow-lg shadow-blue-100/20"
          : "bg-transparent"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1">
            {/* <img src="./img/logo/logo3.png" alt="logo" className="w-20 h-20" /> */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center`}
            >
              <span
                className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                  isDark
                    ? "from-blue-500 to-purple-500"
                    : "from-blue-600 to-purple-600"
                } transition-colors duration-300`}
              >
                AK
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.to}
                    className={`px-4 py-2 rounded-lg font-medium relative group ${
                      location.pathname === link.to
                        ? isDark
                          ? "text-blue-400"
                          : "text-blue-600"
                        : isDark
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.to && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isDark ? "bg-blue-400" : "bg-blue-600"
                        }`}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? "text-gray-400 hover:text-white hover:bg-gray-800"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${isDark ? "bg-gray-900" : "bg-blue-50"}`}
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg font-medium ${
                      location.pathname === link.to
                        ? isDark
                          ? "text-blue-400 bg-blue-400/10"
                          : "text-blue-600 bg-blue-100"
                        : isDark
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`w-full px-4 py-2 rounded-lg font-medium ${
                  isDark
                    ? "text-gray-300 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-baseline space-x-3">
                  <span>{isDark ? "Light" : "Dark"} Mode</span>
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
