import React, { useContext, useState } from "react";
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSe6FPvuzLvNvafjm6GY65H8XYQ6ELVJhCyMYQdT8SxomhDBeA/formResponse";

    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append("entry.541044737", formData.name); // Name field
    formDataEncoded.append("entry.1336941785", formData.email); // Email field
    formDataEncoded.append("entry.548435149", formData.message); // Message field

    try {
      await fetch(formURL, {
        method: "POST",
        body: formDataEncoded,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        mode: "no-cors",
      });

      setStatus("Success! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error! Please try again.");
    }
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
          initial="hidden"
          animate="show"
        >
          {/* Contact Information */}
          <motion.div className={`${cardBackground} rounded-xl shadow-lg p-8`}>
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
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className={`${cardBackground} rounded-xl shadow-lg p-8`}>
            <h2 className={`text-2xl font-bold ${textColor} mb-6`}>
              Send Me a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
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
              <div>
                <label
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
              <div>
                <label
                  className={`block text-sm font-medium ${textColor} mb-2`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full ${inputBackground} ${inputTextColor} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className={`w-full ${buttonBackground} text-white py-3 rounded-lg ${hoverButtonBackground} transition-colors`}
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
