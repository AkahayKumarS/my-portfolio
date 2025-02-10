import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import {
  Code,
  Palette,
  Brain,
  Rocket,
  Medal,
  GraduationCap,
  SquareUser,
  BriefcaseIcon,
  TrendingUp,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState("overview");
  const iconColor = `bg-clip-text text-transparent bg-gradient-to-r  ${
    theme === "dark"
      ? "from-blue-500 to-purple-500"
      : "from-blue-600 to-purple-600"
  } transition-colors duration-300`;

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificateModal = (cert) => {
    setSelectedCertificate(cert);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "St. Joseph Engineering College, Mangalore",
      year: "2021-2025",
      grade: "CGPA: 9.50/10",
    },
    {
      degree: "Pre University Education",
      institution: "Mother Teresa's PU College, Kundapura",
      year: "2019-2021",
      grade: "Percentage: 98.6%",
    },
    {
      degree: "SSLC",
      institution: "Govt. Junior College Bidkalkatte, Kundapura",
      year: "2018-2019",
      grade: "Percentage: 97.6%",
    },
  ];

  const experience = [
    {
      role: "Web Development Intern",
      company: "MotionCut",
      period: "Oct 2023 - Nov 2023",
      achievements: [
        "Completed a 4-week intensive internship program",
        "Gained expertise in HTML, CSS, and JavaScript",
        "Developed foundational skills in front-end web development",
      ],
    },
    {
      role: "Salesforce Administrator Virtual Internship",
      company: "Smart Internz",
      period: "Oct 2023 - Nov 2023",
      achievements: [
        "Completed a 4-week virtual internship on Salesforce Administration",
        "Gained hands-on experience in Salesforce Fundamentals, Sales & Service Cloud",
        "Earned Super Badges: Security Specialist, Business Administration Specialist, Admin Super Set",
      ],
    },
  ];

  const certifications = [
    {
      name: "Java Full Stack",
      issuer: "Wipro",
      date: "2024",
      imageUrl: "./img/certificates/java.jpeg",
    },
    {
      name: "Data Structures",
      issuer: "Coursera",
      date: "2023",
      imageUrl: "./img/certificates/DSA.png",
    },
    {
      name: "Google Cloud Computing Foundations",
      issuer: "NPTEL Certificate",
      date: "2024",
      imageUrl: "./img/certificates/GCC.png",
    },
    {
      name: "TechA Selenium Python Automation Testing",
      issuer: "Infosys Springboard",
      date: "2024",
      imageUrl: "./img/certificates/testing.png",
    },
    {
      name: "Python Foundation Certification",
      issuer: "Infosys Springboard",
      date: "2023",
      imageUrl: "./img/certificates/python.png",
    },
    {
      name: "National Art Contest",
      issuer: "J Company",
      date: "2023",
      imageUrl: "./img/certificates/NationalArt.png",
    },
  ];

  const skills = {
    technical: [
      { name: "C Programming", level: 60 },
      { name: "Java", level: 80 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 75 },
      { name: "React.js", level: 65 },
    ],
    creative: [
      { name: "Drawing and Painting", level: 90 },
      { name: "Clay Modelling", level: 85 },
      { name: "Web Design", level: 70 },
    ],
  };

  // Rest of the component code remains the same, including tabs, SkillBar, and return statement
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span
          className={`text-sm font-medium ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {name}
        </span>
        <span
          className={`text-sm font-medium ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {level}%
        </span>
      </div>
      <div
        className={`h-2 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
        />
      </div>
    </div>
  );

  return (
    <section
      id="about"
      className={`py-24 ${
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-blue-50 to-white"
      } transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <SquareUser
              className={`w-8 h-8 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              } mr-3`}
            />

            <h1 className={`text-5xl font-bold ${iconColor} mb-1`}>About Me</h1>
          </div>
          <div
            className={`w-24 h-1 bg-gradient-to-r ${
              theme === "light"
                ? "from-blue-600 to-purple-600"
                : "from-blue-500 to-purple-500"
            } mx-auto rounded-full mb-6`}
          />
          <div
            className={`max-w-3xl mx-auto text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            An undergraduate student with a passion for technology and
            problem-solving
          </div>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-20">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div
                className={`absolute inset-2 md:inset-4 ${
                  isDark ? "bg-blue-400/30" : "bg-blue-500/30"
                } rounded-xl blur-2xl md:blur-3xl transition-all duration-300 group-hover:bg-blue-500/40`}
              />
              <img
                src="./img/profile.png"
                alt="Profile"
                className="relative rounded-xl shadow-2xl w-52 md:w-72 mx-auto transform transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            {/* Tabs Navigation */}
            <div className="mt-4 sm:mt-6 md:mt-0">
              <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                        : isDark
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <p
                      className={`text-lg ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      I'm a Computer Science Engineering student with a strong
                      academic background and a passion for technology. My goal
                      is to apply my skills in algorithms, data structures, and
                      software development to contribute to impactful projects
                      and solve real-world problems.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        {
                          icon: <Medal className="w-5 h-5" />,
                          text: "9.50 CGPA",
                        },
                        {
                          icon: <Code className="w-5 h-5" />,
                          text: "Full Stack Developer",
                        },
                        {
                          icon: <Palette className="w-5 h-5" />,
                          text: "Artist",
                        },
                        {
                          icon: <Brain className="w-5 h-5" />,
                          text: "DSA Enthusiast",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 p-4 rounded-lg ${
                            isDark
                              ? "bg-gray-800 text-gray-300"
                              : "bg-white text-gray-700 shadow-md"
                          }`}
                        >
                          <span
                            className={
                              isDark ? "text-blue-400" : "text-blue-600"
                            }
                          >
                            {item.icon}
                          </span>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-6 rounded-lg ${
                          isDark ? "bg-gray-800" : "bg-white shadow-lg"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3
                              className={`text-xl font-bold ${
                                isDark ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {exp.role}
                            </h3>
                            <p
                              className={`${
                                isDark ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {exp.company}
                            </p>
                          </div>
                          <span
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {exp.period}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <ChevronRight
                                className={`w-4 h-4 mt-1 ${
                                  isDark ? "text-blue-400" : "text-blue-600"
                                }`}
                              />
                              <span
                                className={
                                  isDark ? "text-gray-300" : "text-gray-700"
                                }
                              >
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="space-y-8">
                    {/* Technical Skills */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3
                        className={`text-xl font-bold mb-6 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Technical Skills
                      </h3>
                      <div className="space-y-5">
                        {skills.technical.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="mb-4"
                          >
                            <div className="flex justify-between mb-2">
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className={`text-sm font-medium ${
                                  isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                {skill.name}
                              </motion.span>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className={`text-sm font-medium ${
                                  isDark ? "text-gray-400" : "text-gray-600"
                                }`}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>
                            <div
                              className={`h-2.5 rounded-full ${
                                isDark ? "bg-gray-700" : "bg-gray-200"
                              } relative overflow-hidden`}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  ease: "easeOut",
                                  delay: index * 0.1,
                                }}
                                className="absolute h-full rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500"
                              />
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Creative Skills */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h3
                        className={`text-xl font-bold mb-6 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Creative Skills
                      </h3>
                      <div className="space-y-5">
                        {skills.creative.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.1 + 0.4,
                              duration: 0.5,
                            }}
                            className="mb-4"
                          >
                            <div className="flex justify-between mb-2">
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.6 }}
                                className={`text-sm font-medium ${
                                  isDark ? "text-gray-300" : "text-gray-700"
                                }`}
                              >
                                {skill.name}
                              </motion.span>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 + 0.7 }}
                                className={`text-sm font-medium ${
                                  isDark ? "text-gray-400" : "text-gray-600"
                                }`}
                              >
                                {skill.level}%
                              </motion.span>
                            </div>
                            <div
                              className={`h-2.5 rounded-full ${
                                isDark ? "bg-gray-700" : "bg-gray-200"
                              } relative overflow-hidden`}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  ease: "easeOut",
                                  delay: index * 0.1 + 0.4,
                                }}
                                className="absolute h-full rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500"
                              />
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.9 }}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}

                {activeTab === "certifications" && (
                  <div className="space-y-6">
                    <h3
                      className={`text-xl font-bold mb-4 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Certifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {certifications.map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`p-4 rounded-lg flex items-center justify-between ${
                            isDark ? "bg-gray-800" : "bg-white shadow-md"
                          }`}
                        >
                          <div>
                            <h4
                              className={`font-medium ${
                                isDark ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {cert.name}
                            </h4>
                            <p
                              className={`text-sm ${
                                isDark ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              {cert.issuer} • {cert.date}
                            </p>
                          </div>
                          <button
                            onClick={() => openCertificateModal(cert)}
                            className="cursor-pointer"
                          >
                            <ExternalLink
                              className={`w-5 h-5 ${
                                isDark ? "text-blue-400" : "text-blue-600"
                              }`}
                            />
                          </button>
                        </motion.div>
                      ))}
                    </div>

                    {/* Certificate Modal */}
                    {selectedCertificate && (
                      <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                        onClick={closeCertificateModal}
                      >
                        <motion.div
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`max-w-4xl w-full max-h-[90vh] rounded-xl p-6 relative ${
                            isDark ? "bg-gray-900" : "bg-white"
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            onClick={closeCertificateModal}
                            className={`absolute top-4 right-4 ${
                              isDark
                                ? "text-gray-300 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            <X className="w-6 h-6" />
                          </button>

                          <div className="flex flex-col items-center justify-center h-full">
                            <div className="w-full max-w-2xl">
                              <img
                                src={selectedCertificate.imageUrl}
                                alt={selectedCertificate.name}
                                className="w-full h-auto rounded-lg object-contain max-h-[600px]"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable={false}
                              />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="relative pl-6 before:absolute before:left-0 before:top-12 before:bottom-0 before:w-0.5 before:bg-gray-300 dark:before:bg-gray-400">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 pb-8 last:pb-0"
                      >
                        {/* Timeline Dot */}
                        <div
                          className={`absolute left-[-33px] top-8 w-6 h-6 rounded-full border-4 ${
                            isDark
                              ? "bg-blue-400 border-gray-300"
                              : "bg-blue-600 border-gray-800"
                          }`}
                        />

                        {/* Horizontal Line */}
                        <div
                          className={`absolute left-[-8px] top-11 h-0.5 w-10 ${
                            isDark ? "bg-gray-300" : "bg-gray-400"
                          }`}
                        />

                        <div
                          className={`rounded-lg p-5 ${
                            isDark ? "bg-gray-800" : "bg-white shadow-md"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h3
                                className={`text-xl font-bold ${
                                  isDark ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {edu.degree}
                              </h3>
                              <p
                                className={`${
                                  isDark ? "text-gray-400" : "text-gray-600"
                                }`}
                              >
                                {edu.institution}
                              </p>
                            </div>
                            <div className="text-right">
                              <div
                                className={`text-sm font-medium ${
                                  isDark ? "text-blue-400" : "text-blue-600"
                                }`}
                              >
                                {edu.year}
                              </div>
                              <div
                                className={`text-sm ${
                                  isDark ? "text-gray-400" : "text-gray-600"
                                }`}
                              >
                                {edu.grade}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            {
              icon: <Rocket className="w-6 h-6" />,
              label: "Projects Completed",
              value: "10+",
            },
            {
              icon: <Medal className="w-6 h-6" />,
              label: "Certifications",
              value: "15+",
            },
            {
              icon: <BriefcaseIcon className="w-6 h-6" />,
              label: "Internships",
              value: "5+",
            },
            {
              icon: <Code className="w-6 h-6" />,
              label: "Problems Solved",
              value: "320+",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-xl ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-750"
                  : "bg-white hover:bg-gray-50"
              } shadow-lg transition-all duration-300 text-center`}
            >
              <div
                className={`inline-block p-3 rounded-full mb-4 ${
                  isDark
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-blue-100 hover:bg-blue-200"
                } transition-colors duration-300`}
              >
                <span
                  className={`${
                    isDark ? "text-blue-400" : "text-blue-600"
                  } transition-colors duration-300`}
                >
                  {stat.icon}
                </span>
              </div>
              <h3
                className={`text-2xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {stat.value}
              </h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h3
            className={`text-2xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Work Together
          </h3>
          <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Interested in collaborating or learning more about my work?
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
