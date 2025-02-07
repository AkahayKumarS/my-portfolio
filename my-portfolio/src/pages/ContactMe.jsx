import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Contact,
  Instagram,
} from "lucide-react";

const ContactMe = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    console.log("Google Form URL:", import.meta.env.VITE_GOOGLE_FORM_URL);
  }, []);

  // Define colors based on the theme
  const backgroundGradient =
    theme === "light"
      ? "bg-gradient-to-b from-gray-50 to-white"
      : "bg-gradient-to-b from-gray-900 to-gray-800";
  const textColor = theme === "light" ? "text-gray-800" : "text-gray-200";
  const cardBackground = theme === "light" ? "bg-white" : "bg-gray-800";
  const inputBackground = theme === "light" ? "bg-gray-100" : "bg-gray-700";
  const inputTextColor = theme === "light" ? "text-gray-800" : "text-gray-200";
  const buttonBackground = "bg-gradient-to-r from-blue-600 to-purple-600";
  const hoverButtonBackground =
    theme === "light" ? "hover:bg-blue-700" : "hover:bg-blue-500";

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formURL = import.meta.env.VITE_GOOGLE_FORM_URL;

  //   const formDataEncoded = new URLSearchParams();
  //   formDataEncoded.append(import.meta.env.VITE_ENTRY_NAME, formData.name);
  //   formDataEncoded.append(import.meta.env.VITE_ENTRY_EMAIL, formData.email);
  //   formDataEncoded.append(
  //     import.meta.env.VITE_ENTRY_MESSAGE,
  //     formData.message
  //   );

  //   try {
  //     await fetch(formURL, {
  //       method: "POST",
  //       body: formDataEncoded,
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       mode: "no-cors",
  //     });

  //     setStatus("Success! Your message has been sent.");
  //     setFormData({ name: "", email: "", message: "" });

  //     // Clear status after 3 seconds
  //     setTimeout(() => {
  //       setStatus("");
  //     }, 3000);
  //   } catch (error) {
  //     setStatus("Error! Please try again.");

  //     // Clear status after 3 seconds
  //     setTimeout(() => {
  //       setStatus("");
  //     }, 3000);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formURL = import.meta.env.VITE_GOOGLE_FORM_URL;
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append(import.meta.env.VITE_ENTRY_NAME, formData.name);
    formDataEncoded.append(import.meta.env.VITE_ENTRY_EMAIL, formData.email);
    formDataEncoded.append(
      import.meta.env.VITE_ENTRY_MESSAGE,
      formData.message
    );

    // Redirect user to the Google Form submission page
    window.location.href = `${formURL}?${formDataEncoded.toString()}`;
  };

  // Animation variants
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
          <div className="flex items-center justify-center mb-4">
            <Contact
              className={`w-8 h-8 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              } mr-3`}
            />
            <h1
              className={`text-5xl font-bold ${
                theme === "light" ? "text-blue-600" : "text-blue-400"
              } mb-4`}
            >
              Get in Touch
            </h1>
          </div>
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
            Have a question or want to collaborate? Feel free to reach out! I'm
            always open to new opportunities and ideas.
          </p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Contact Information */}
          <motion.div
            variants={item}
            className={`${cardBackground} rounded-xl shadow-lg p-8`}
          >
            <h2 className={`text-2xl font-bold ${textColor} mb-6`}>
              Contact Information
            </h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className={`p-3 ${inputBackground} rounded-lg`}>
                  <Mail
                    className={`w-6 h-6 ${
                      theme === "light" ? "text-blue-600" : "text-blue-400"
                    }`}
                  />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${textColor}`}>
                    Email
                  </h3>
                  <p className={`${textColor}`}>akshaykumars9108@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className={`p-3 ${inputBackground} rounded-lg`}>
                  <Phone
                    className={`w-6 h-6 ${
                      theme === "light" ? "text-blue-600" : "text-blue-400"
                    }`}
                  />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${textColor}`}>
                    Phone
                  </h3>
                  <p className={`${textColor}`}>+91 9108083054</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className={`p-3 ${inputBackground} rounded-lg`}>
                  <MapPin
                    className={`w-6 h-6 ${
                      theme === "light" ? "text-blue-600" : "text-blue-400"
                    }`}
                  />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${textColor}`}>
                    Location
                  </h3>
                  <p className={`${textColor}`}>
                    Kundapura, Udupi District, Karnataka, India
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://github.com/AkahayKumarS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 ${inputBackground} rounded-lg hover:${hoverButtonBackground} transition-colors`}
                >
                  <Github
                    className={`w-6 h-6 ${
                      theme === "light" ? "text-blue-600" : "text-blue-400"
                    }`}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/akshaya-kumar-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 ${inputBackground} rounded-lg hover:${hoverButtonBackground} transition-colors`}
                >
                  <Linkedin
                    className={`w-6 h-6 ${
                      theme === "light" ? "text-blue-600" : "text-blue-400"
                    }`}
                  />
                </a>
                <a
                  href="https://www.instagram.com/akshaykumars836/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 ${inputBackground} rounded-lg hover:${hoverButtonBackground} transition-colors`}
                >
                  <Instagram
                    className={`w-6 h-6 ${
                      theme === "light" ? "text-blue-600" : "text-blue-400"
                    }`}
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={item}
            className={`${cardBackground} rounded-xl shadow-lg p-8`}
          >
            <h2 className={`text-2xl font-bold ${textColor} mb-6`}>
              Send Me a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium ${textColor} mb-2`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full ${inputBackground} ${inputTextColor} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium ${textColor} mb-2`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full ${inputBackground} ${inputTextColor} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium ${textColor} mb-2`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full ${inputBackground} ${inputTextColor} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full ${buttonBackground} text-white py-3 rounded-lg ${hoverButtonBackground} transition-colors shadow-lg hover:shadow-xl duration-300 hover:cursor-pointer`}
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-green-500">{status}</p>}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
