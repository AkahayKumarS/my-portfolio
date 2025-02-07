import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Paintbrush,
  Brain,
  Server,
  Globe,
  Layout,
  Palette,
} from "lucide-react";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={24} />,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
    ],
  },
  {
    title: "Web Technologies",
    icon: <Globe size={24} />,
    skills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Development",
    icon: <Layout size={24} />,
    skills: [
      { name: "Frontend", level: 90 },
      { name: "Backend", level: 80 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    title: "Creative Skills",
    icon: <Palette size={24} />,
    skills: [
      { name: "Digital Art", level: 80 },
      { name: "Sketching", level: 85 },
      { name: "UI Design", level: 75 },
    ],
  },
];

const SkillCard = ({ category, index }) => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  // Define colors based on the theme
  const cardBackground = theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-800" : "text-gray-200";
  const iconBackground = theme === "light" ? "bg-blue-100" : "bg-blue-900";
  const iconColor = theme === "light" ? "text-blue-600" : "text-blue-400";
  const progressBackground = theme === "light" ? "bg-gray-200" : "bg-gray-700";
  const progressColor = theme === "light" ? "bg-blue-600" : "bg-blue-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${cardBackground} rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-500`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 ${iconBackground} ${iconColor} rounded-lg`}>
          {category.icon}
        </div>
        <h2 className={`text-xl font-bold ${textColor}`}>{category.title}</h2>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, idx) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className={`${textColor} font-medium`}>{skill.name}</span>
              <span className={`${textColor}`}>{skill.level}%</span>
            </div>
            <div
              className={`w-full ${progressBackground} rounded-full h-2.5 overflow-hidden`}
            >
              <motion.div
                className={`h-full ${progressColor} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.2 + idx * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  // Define background gradient based on the theme
  const backgroundGradient =
    theme === "light"
      ? "bg-gradient-to-b from-gray-50 to-white"
      : "bg-gradient-to-b from-gray-900 to-gray-800";

  return (
    <section className={`min-h-screen ${backgroundGradient} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`text-5xl font-bold ${
              theme === "light" ? "text-blue-600" : "text-blue-400"
            } mb-4`}
          >
            Skills & Expertise
          </h1>
          <div
            className={`w-24 h-1 ${
              theme === "light" ? "bg-blue-600" : "bg-blue-400"
            } mx-auto rounded-full mb-6`}
          />
          <p
            className={`${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            } max-w-2xl mx-auto`}
          >
            A comprehensive overview of my technical and creative abilities,
            showcasing my expertise across various domains of software
            development and design.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p
            className={`${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Continuously learning and expanding my skill set through projects
            and new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
