import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../ThemeContext";
import { Palette, ZoomIn } from "lucide-react";

const artworks = [
  {
    id: 1,
    title: "Virat Kohli",
    image: "./img/artworks/Kohli1.jpeg",
    description:
      "A stunning portrait of Virat Kohli, capturing his intense focus and passion for cricket.",
    category: "Portrait",
  },
  {
    id: 2,
    title: "Thalapathy Vijay",
    image: "/img/artworks/Thalapathy.jpeg",
    description:
      "A powerful portrayal of Thalapathy Vijay, highlighting his charm, legendary screen presence.",
    category: "Portrait",
  },
  {
    id: 3,
    title: "Golden Sunset Serenity",
    image: "/img/artworks/sunsetart.jpeg",
    description:
      "A breathtaking painting of a sunset, blending warm hues to create a peaceful and mesmerizing scene.",
    category: "Canvas Painting",
  },
  {
    id: 4,
    title: "Geometrical Symphony",
    image: "/img/artworks/geometrical_design.png",
    description:
      "An abstract masterpiece featuring intricate geometric patterns with a modern artistic touch.",
    category: "Digital Art",
  },
  {
    id: 5,
    title: "Puneeth Rajkumar",
    image: "/img/artworks/PuneethRajkumar.jpeg",
    description:
      "A heartfelt tribute to Puneeth Rajkumar, capturing his charisma and inspiring presence on screen.",
    category: "Portrait",
  },
  {
    id: 6,
    title: "MS Dhoni",
    image: "/img/artworks/MSD.jpeg",
    description:
      "A striking artwork of MS Dhoni, showcasing his calm demeanor and legendary cricketing legacy.",
    category: "Portrait",
  },
];

const categories = ["All", ...new Set(artworks.map((art) => art.category))];

const Artworks = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const isDark = theme === "dark";

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  return (
    <section
      className={`min-h-screen ${
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-blue-50 to-white"
      } py-20 px-4 transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Previous code remains the same */}
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Palette
              className={`w-6 h-6 sm:w-8 sm:h-8 ${
                isDark ? "text-blue-400" : "text-blue-600"
              } mr-2 sm:mr-3`}
            />
            <h1
              className={`text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                theme === "light"
                  ? "from-blue-600 to-purple-600"
                  : "from-blue-500 to-purple-500"
              } transition-colors duration-300 sm:pb-2`}
            >
              My Artworks
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
              isDark ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto text-base sm:text-lg`}
          >
            A collection of my creative works, showcasing various styles and
            techniques in digital and traditional art.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-500 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                  : `${
                      isDark
                        ? "bg-gray-800 text-gray-300"
                        : "bg-white text-gray-600"
                    } hover:shadow-md`
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Artworks Grid - Updated image class */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`group relative ${
                  isDark ? "bg-gray-800" : "bg-white"
                } rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2`}
              >
                {/* Artwork Image - Updated to maintain aspect ratio */}
                <div className="relative h-72 overflow-hidden flex items-center justify-center">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Rest of the code remains the same */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isDark ? "from-gray-900/90" : "from-black/60"
                    } to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {artwork.title}
                      </h2>
                      <p className="text-gray-200 text-sm">
                        {artwork.description}
                      </p>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <button
                    onClick={() => setSelectedArtwork(artwork)}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/30"
                  >
                    <ZoomIn className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Previous code remains the same */}
                {/* Artwork Details */}
                <div className="p-6">
                  <h2
                    className={`text-xl font-bold ${
                      isDark ? "text-white" : "text-gray-800"
                    } mb-2`}
                  >
                    {artwork.title}
                  </h2>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${
                      isDark
                        ? "bg-gray-700 text-gray-300"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {artwork.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for enlarged view - Updated image class */}
        <AnimatePresence>
          {selectedArtwork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArtwork(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full flex items-center justify-center"
              >
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {selectedArtwork.title}
                  </h2>
                  <p className="text-gray-200">{selectedArtwork.description}</p>
                </div> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Artworks;
