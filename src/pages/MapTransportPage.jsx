import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BackToTop from "../components/BackToTop";

const transportModes = [
  {
    mode: "Palembang LRT",
    type: "Public",
    icon: "🚆",
    description:
      "Connects the airport to the city center and Jakabaring Stadium. Fast, clean, and efficient.",
    details: {
      schedule: "06:00 – 20:00 (every 15 min)",
      fare: "IDR 5,000 per trip",
      tips: "Avoid rush hours (7–9AM, 5–7PM)",
    },
  },
  {
    mode: "Traditional Boat (Ketek)",
    type: "River",
    icon: "🛶",
    description:
      "The iconic water taxi of the Musi River. Best for exploring riverside sites like Kemaro Island.",
    details: {
      schedule: "08:00 – 17:00 (on demand)",
      fare: "Negotiable, starts from IDR 20,000",
      tips: "Wear life jacket & check boat condition",
    },
  },
  {
    mode: "TransMusi & Minivans",
    type: "Public",
    icon: "🚌",
    description:
      "Inexpensive and covers most of Palembang's traditional markets, landmarks, and old neighborhoods.",
    details: {
      schedule: "05:30 – 21:00 (varies by route)",
      fare: "IDR 4,000 – 7,000",
      tips: "Ask locals or drivers for stop points",
    },
  },
  {
    mode: "Ride-Hailing (Gojek / Grab)",
    type: "Private",
    icon: "🏍️",
    description:
      "Convenient and available almost everywhere. Great for short distances and flexibility.",
    details: {
      schedule: "24 hours",
      fare: "Based on app, starts from IDR 5,000",
      tips: "Check estimated price before booking",
    },
  },
];

const categories = ["All", "Public", "Private", "River"];

const travelTimes = [
  {
    route: "Airport ➜ Ampera Bridge",
    duration: "≈ 30 min (LRT + walk)",
  },
  {
    route: "Ampera Bridge ➜ Kemaro Island",
    duration: "≈ 15 min (boat)",
  },
  {
    route: "Ampera Bridge ➜ Bukit Siguntang",
    duration: "≈ 20 min (local transport)",
  },
  {
    route: "Grand Mosque ➜ Monpera Monument",
    duration: "≈ 7 min (on foot)",
  },
];

const nearbyAttractions = [
  {
    title: "Ampera Bridge",
    img: "/images/gallery/bg_ampera.jpg",
    description:
      "Palembang’s iconic bridge and symbol of unity across the Musi River.",
    details:
      "The Ampera Bridge lights up beautifully at night and is surrounded by street food and riverside activities. A must-see landmark in Palembang.",
  },
  {
    title: "Kemaro Island",
    img: "/images/gallery/Pagoda.jpg",
    description: "A tranquil island with a Chinese pagoda and legends of love.",
    details:
      "Located in the middle of the Musi River, Kemaro Island features a Buddhist temple, a pagoda, and annual Cap Go Meh festivities.",
  },
  {
    title: "Great Mosque",
    img: "/images/gallery/masjidAgung.jpeg",
    description: "A blend of Palembang, Chinese, and European architecture.",
    details:
      "Masjid Agung Palembang is one of the largest mosques in Indonesia, located near the Ampera Bridge. A spiritual and historical centerpiece.",
  },
  {
    title: "Monpera Monument",
    img: "/images/gallery/monperanight.jpeg",
    description:
      "Monumen Perjuangan Rakyat: dedicated to the independence fighters.",
    details:
      "Built in memory of Palembang’s resistance, Monpera features historical exhibits and is surrounded by a city park.",
  },
];

export default function MapTransportPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTransport, setSelectedTransport] = useState(null);
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const filteredTransport =
    selectedCategory === "All"
      ? transportModes
      : transportModes.filter((t) => t.type === selectedCategory);

  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-white pt-32 px-6 py-16 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-4 shiny-text"
          >
            Getting Around Palembang
          </motion.h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Find the best ways to navigate Palembang with ease—from the skies to
            the riverside!
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  selectedCategory === cat
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } transition`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <AnimatePresence>
              {filteredTransport.map((item, idx) => (
                <motion.div
                  key={idx}
                  onClick={() => setSelectedTransport(item)}
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.05 }}
                  className="cursor-pointer flex items-start bg-blue-50/30 border border-blue-100 hover:border-blue-400 p-6 rounded-xl shadow-sm hover:shadow-lg transition group"
                >
                  <div className="text-4xl mr-4">{item.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold">{item.mode}</h4>
                      <motion.span className="text-blue-500 text-sm group-hover:translate-x-1 transition-transform">
                        →
                      </motion.span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-300 p-6 rounded-xl mb-16 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Estimated Travel Times
            </h3>
            <ul className="space-y-3 text-sm">
              {travelTimes.map((item, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span className="font-medium">{item.route}</span>
                  <span className="italic text-gray-600">{item.duration}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Tourist Route Preview
            </h3>
            <div className="overflow-hidden rounded-xl shadow-lg border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d15937.57289589622!2d104.747498!3d-2.98823!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x2e3b73125daa86b3%3A0x4894464d532ac87b!2sSultan%20Mahmud%20Badaruddin%20II%20Airport!3m2!1d-2.8947992!2d104.7046471!4m5!1s0x2e3b76034b851401%3A0x9b68f8209694f926!2sAmpera%20Bridge!3m2!1d-2.9917158!2d104.7635411!5e0!3m2!1sen!2sid!4v1748138642268!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Palembang Route"
              ></iframe>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Top Nearby Attractions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nearbyAttractions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedAttraction(item)}
                  className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3 text-center">
                    <h4 className="font-medium">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {selectedTransport && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-2xl relative"
              >
                <div className="p-6">
                  <button
                    onClick={() => setSelectedTransport(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                  >
                    ×
                  </button>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <span>{selectedTransport.icon}</span>{" "}
                    {selectedTransport.mode}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {selectedTransport.description}
                  </p>

                  <div className="text-sm space-y-2">
                    <p>
                      <strong>Schedule:</strong>{" "}
                      {selectedTransport.details.schedule}
                    </p>
                    <p>
                      <strong>Fare:</strong> {selectedTransport.details.fare}
                    </p>
                    <p>
                      <strong>Tips:</strong> {selectedTransport.details.tips}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedAttraction && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white max-w-md w-full rounded-xl shadow-lg overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selectedAttraction.img}
                  alt={selectedAttraction.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 relative">
                  <button
                    onClick={() => setSelectedAttraction(null)}
                    className="absolute top-3 right-4 text-xl text-gray-500 hover:text-black"
                  >
                    ×
                  </button>
                  <h4 className="text-xl font-bold mb-2">
                    {selectedAttraction.title}
                  </h4>
                  <p className="text-gray-600">{selectedAttraction.details}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
}
