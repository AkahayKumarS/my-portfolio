import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ChevronRight,
} from "lucide-react";
import { ThemeContext } from "../ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Artworks", path: "/artworks" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Portrait Painting",
    "Digital Art",
  ];

  const socialLinks = [
    { Icon: Github, href: "https://github.com/AkahayKumarS", label: "GitHub" },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/akshaya-kumar-s/",
      label: "LinkedIn",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/akshaykumars836/ ",
      label: "Instagram",
    },
    { Icon: Mail, href: "mailto:akshaykumars9108@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className={`transition-colors duration-500 ${
        isDark ? "bg-slate-900" : "bg-sky-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div
                className={`w-10 h-10 ${
                  isDark ? "bg-blue-500" : "bg-sky-500"
                } rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform`}
              >
                <span className="text-white text-xl font-bold">A</span>
              </div>
              <h2
                className={`text-xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Akshaya Kumar S
              </h2>
            </div>
            <p
              className={`text-sm px-4 md:px-0 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A CSE student, web developer, and artist passionate about crafting
              innovative digital solutions and expressive artworks.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-500 transform hover:scale-110 ${
                    isDark
                      ? "text-gray-400 hover:text-blue-400 hover:bg-slate-800"
                      : "text-gray-600 hover:text-sky-600 hover:bg-sky-100"
                  }`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left md:ml-10">
            <h3
              className={`text-lg font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, path }) => (
                <li
                  key={label}
                  className="flex justify-center md:justify-start"
                >
                  <Link
                    to={path}
                    className={`flex items-center group w-max ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-sky-600"
                    }`}
                  >
                    <ChevronRight
                      size={16}
                      className={`mr-2 transition-transform ${
                        isDark ? "text-blue-400" : "text-sky-500"
                      }`}
                    />
                    <span className="transition-transform duration-500 hover:translate-x-2">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3
              className={`text-lg font-semibold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex justify-center md:justify-start"
                >
                  <span
                    className={`flex items-center group w-max ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <ChevronRight
                      size={16}
                      className={`mr-2 ${
                        isDark ? "text-blue-400" : "text-sky-500"
                      }`}
                    />
                    <span className="transition-transform duration-500 hover:translate-x-2">
                      {service}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3
              className={`text-lg font-semibbol mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Get in Touch
            </h3>
            <div className="space-y-4">
              {[
                {
                  Icon: Mail,
                  content: "akshaykumars9108@gmail.com",
                  href: "mailto:akshaykumars9108@gmail.com",
                },
                {
                  Icon: Phone,
                  content: "+91 9108083054",
                  href: "tel:+919108083054",
                },
                {
                  Icon: MapPin,
                  content:
                    "Kundapura Taluk, Udupi District, Karnataka - 576222",
                  href: null,
                },
              ].map(({ Icon, content, href }) =>
                href ? (
                  <a
                    key={content}
                    href={href}
                    className={`flex items-center justify-center md:justify-start space-x-3 transition-colors duration-500 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400"
                        : "text-gray-600 hover:text-sky-600"
                    }`}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <span className="transition-transform duration-500 hover:translate-x-2">
                      {content}
                    </span>
                  </a>
                ) : (
                  <div
                    key={content}
                    className={`flex items-center justify-center md:justify-start space-x-3 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <span>{content}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t ${isDark ? "border-slate-700" : "border-sky-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div
              className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              © {new Date().getFullYear()} Akshaya Kumar S. All rights reserved.
            </div>
            <div
              className={`flex items-center space-x-1 text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <span>Made with</span>
              <Heart
                size={16}
                className="text-red-500 hover:scale-125 transition-transform duration-300 animate-pulse"
              />
              <span>using</span>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative inline-flex items-center ${
                  isDark ? "text-blue-400" : "text-blue-600"
                } hover:text-blue-500 transition-colors duration-300`}
              >
                <span className="relative">
                  React
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </a>
              <span>&</span>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative inline-flex items-center ${
                  isDark ? "text-green-400" : "text-green-600"
                } hover:text-green-500 transition-colors duration-300`}
              >
                <span className="relative">
                  Tailwind CSS
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
