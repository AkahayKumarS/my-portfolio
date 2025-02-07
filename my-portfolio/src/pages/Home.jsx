import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./About";
import Projects from "./Projects";
import Artworks from "./Artworks";
import ContactMe from "./ContactMe";

import {
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Download,
} from "lucide-react";
import { ThemeContext } from "../ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const [typedSkill, setTypedSkill] = useState("");
  const skills = [
    "Web Development",
    "Competitive Programming",
    "Portrait Painting",
    "Clay Modelling",
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    let skillTimeout;

    if (typedSkill.length < skills[currentSkillIndex].length) {
      skillTimeout = setTimeout(() => {
        setTypedSkill(
          skills[currentSkillIndex].slice(0, typedSkill.length + 1)
        );
      }, 100);
    } else {
      const cycleTimeout = setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        setTypedSkill("");
      }, 2000);
      return () => clearTimeout(cycleTimeout);
    }

    return () => {
      skillTimeout && clearTimeout(skillTimeout);
    };
  }, [typedSkill, currentSkillIndex]);

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
      } transition-colors duration-500 pt-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  isDark
                    ? "bg-blue-900/30 text-blue-400"
                    : "bg-blue-200 text-blue-700"
                } transition-colors duration-500`}
              >
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              } mb-4 transition-colors duration-500`}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                Akshaya Kumar S
              </span>
            </h1>

            <div className="h-16">
              <motion.h2
                className={`text-2xl ${
                  isDark ? "text-gray-300" : "text-gray-700"
                } transition-colors duration-500`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                My skills are{" "}
                <span
                  className={`${isDark ? "text-pink-400" : "text-violet-500"}`}
                >
                  {typedSkill}
                </span>
                <span
                  className={`${
                    isDark ? "text-pink-300" : "text-violet-400"
                  } animate-pulse`}
                >
                  |
                </span>
              </motion.h2>
            </div>

            <motion.p
              className={`text-lg ${
                isDark ? "text-gray-300" : "text-gray-600"
              } mb-6 transition-colors duration-500`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A CSE student and artist passionate about building innovative web
              solutions and crafting visually stunning digital experiences.
              Blending technology and creativity to solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link
                to="/projects"
                className="group px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-500 transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-md shadow-lg shadow-blue-600/30"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="./img/My_Resume_Latest.pdf"
                className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-500 transform hover:scale-105 ${
                  isDark
                    ? "border-2 border-gray-700 text-gray-300 hover:bg-gray-800 shadow-lg"
                    : "border-2 border-blue-300 text-blue-700 hover:bg-blue-100 shadow-lg"
                } shadow-blue-600/30 hover:shadow-md`}
                target="_blank"
              >
                Download Resume
                <Download size={18} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                {
                  Icon: Github,
                  href: "https://github.com/AkahayKumarS",
                  label: "GitHub",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/akshaya-kumar-s/",
                  label: "LinkedIn",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/akshaykumars836/",
                  label: "Instagram",
                },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl transition-all duration-500 ${
                    isDark
                      ? "bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700"
                      : "bg-blue-100 text-blue-700 hover:text-blue-800 hover:bg-blue-200"
                  } shadow-md hover:shadow-lg`}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
              <motion.a
                href="https://leetcode.com/u/AkshayKumarS9108/"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 w-11 rounded-xl transition-all duration-500 ${
                  isDark
                    ? "bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700"
                    : "bg-blue-100 text-blue-700 hover:text-blue-800 hover:bg-blue-200"
                } shadow-md hover:shadow-lg`}
              >
                <img src="./img/leetcode.png" alt="leetcode" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div
                className={`absolute -inset-4 ${
                  theme === "light" ? "bg-blue-400/30" : "bg-blue-500/30"
                } rounded-full blur-3xl`}
              />
              <div className="home-img">
                <div className="img-box">
                  <div className="img-item">
                    <img src="./img/home.png" alt="akshay" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <About />
      <Projects />
      <Artworks />
      <ContactMe />
    </div>
  );
};

export default Home;
