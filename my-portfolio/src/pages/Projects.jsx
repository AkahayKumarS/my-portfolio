import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Briefcase,
  Palette,
  FolderKanban,
} from "lucide-react";
import { ThemeContext } from "../ThemeContext";

const projects = [
  {
    title: "Artify",
    description:
      "A platform for artists to showcase their artwork and connect with buyers.",
    tech: "React, Node.js, MySQL, Tailwind CSS",
    link: "https://github.com/Hanamaraddi17/Artify",
    icon: <Palette className="w-6 h-6" />,
    category: "Full Stack",
    bgImage: "/img/projects/artify-bg.png", // Using placeholder for demo
  },
  {
    title: "CareerSpark",
    description:
      "An AI-driven platform that predicts the best career paths based on user skills.",
    tech: "Flask, Python, Machine Learning (KNN), MySQL, Bootstrap",
    link: "https://github.com/AkahayKumarS/CareerSpark",
    icon: <Briefcase className="w-6 h-6" />, // Using a briefcase icon for career-related projects
    category: "AI & Career Guidance",
    bgImage: "/img/projects/careerspark-bg.png",
  },
  {
    title: "AgriChain",
    description:
      "A decentralized application for farmers to sell produce and hire laborers.",
    tech: "React, Blockchain, Solidity, Web3.js, IPFS",
    link: "https://github.com/AkahayKumarS/AgriChain",
    icon: <Code className="w-6 h-6" />,
    category: "Blockchain",
    bgImage: "/img/projects/agrichain-bg.png", // Using placeholder for demo
  },
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const backgroundGradient =
    theme === "light"
      ? "bg-gradient-to-b from-blue-50 to-white"
      : "bg-gradient-to-b from-gray-900 to-gray-800";
  const cardBackground = theme === "light" ? "bg-white" : "bg-gray-800";
  const textColor = theme === "light" ? "text-gray-800" : "text-gray-200";
  const hoverTextColor =
    theme === "light"
      ? "group-hover:text-blue-600"
      : "group-hover:text-blue-400";
  const badgeBackground = theme === "light" ? "bg-blue-100" : "bg-blue-900";
  const badgeTextColor = theme === "light" ? "text-blue-600" : "text-blue-400";
  const iconBackground = theme === "light" ? "bg-blue-100" : "bg-blue-900";
  const iconColor = theme === "light" ? "text-blue-600" : "text-blue-400";
  const techBackground = theme === "light" ? "bg-gray-100" : "bg-gray-700";
  const techTextColor = theme === "light" ? "text-gray-700" : "text-gray-200";
  const linkColor = theme === "light" ? "text-blue-600" : "text-blue-400";
  const hoverLinkColor =
    theme === "light" ? "hover:text-blue-700" : "hover:text-blue-300";

  return (
    <section className={`min-h-screen ${backgroundGradient} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <FolderKanban
              className={`w-6 h-6 sm:w-8 sm:h-8 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              } mr-2 sm:mr-3`}
            />
            <h1
              className={`text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                theme === "light"
                  ? "from-blue-600 to-purple-600"
                  : "from-blue-500 to-purple-500"
              } transition-colors duration-300 mb-0 pb-2`}
            >
              My Projects
            </h1>
          </div>
          <div
            className={`w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r ${
              theme === "light"
                ? "from-blue-600 to-purple-600"
                : "from-blue-500 to-purple-500"
            } mx-auto rounded-full mb-4 sm:mb-6`}
          />
          <p
            className={`${
              theme === "light" ? "text-gray-600" : "text-gray-300"
            } max-w-2xl mx-auto`}
          >
            Here are some of my featured projects that showcase my skills in web
            development, blockchain technology, and full-stack applications.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className={`group relative ${cardBackground} rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden`}
            >
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Background Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.bgImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                {/* Category Badge */}
                <div
                  className={`absolute top-4 right-4 ${badgeBackground} ${badgeTextColor} px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-opacity-90`}
                >
                  {project.category}
                </div>
                {/* Icon */}
                <div
                  className={`absolute bottom-4 left-4 w-12 h-12 ${iconBackground} rounded-lg flex items-center justify-center ${iconColor} backdrop-blur-sm bg-opacity-90`}
                >
                  {project.icon}
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 relative">
                <h2
                  className={`text-2xl font-bold ${textColor} mb-3 ${hoverTextColor} transition-colors`}
                >
                  {project.title}
                </h2>
                <p className={`${textColor} mb-4`}>{project.description}</p>
                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className={`text-sm font-semibold ${textColor} mb-2`}>
                    Tech Stack:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className={`${techBackground} ${techTextColor} px-3 py-1 rounded-full text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${linkColor} ${hoverLinkColor} transition-colors`}
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
