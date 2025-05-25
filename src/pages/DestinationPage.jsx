import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BackToTop from "../components/BackToTop";

const destinations = [
  {
    title: "Ampera Bridge",
    image: "/images/gallery/bg_ampera.jpg",
    category: "Landmark",
    short:
      "Iconic bridge connecting Seberang Ulu and Seberang Ilir, symbol of Palembang.",
    full: "Ampera Bridge is not just a transportation structure, but the soul of Palembang. Originally able to open and close to let ships pass, it's now a historic icon decorated with lights at night and surrounded by food vendors and Musi River tours.",
    distance: [
      "To Kemaro Island: 15 mins",
      "To Great Mosque: 10 mins",
      "To Monpera: 7 mins",
    ],
  },
  {
    title: "Kemaro Island",
    image: "/images/gallery/Pagoda.jpg",
    category: "Landmark",
    short:
      "A small delta island in the Musi River, famous for its temple and legends.",
    full: "Kemaro Island is a popular tourist destination in Palembang, located in the middle of the Musi River. It features a Chinese pagoda, a Buddhist temple, and the legendary tree tied to a tragic love story. The island is especially lively during Cap Go Meh celebrations.",
    distance: [
      "To Ampera Bridge: 15 mins",
      "To Great Mosque: 20 mins",
      "To Monpera: 22 mins",
    ],
  },
  {
    title: "Monpera",
    image: "/images/gallery/monperanight.jpeg",
    category: "Monument",
    short:
      "A historical monument commemorating Palembang’s struggle for independence.",
    full: "Monpera, short for Monumen Perjuangan Rakyat, stands as a tribute to the heroes of Palembang. The monument features unique architecture and a museum that displays photos, artifacts, and narratives from the city’s battle against colonial forces.",
    distance: [
      "To Ampera Bridge: 7 mins",
      "To Great Mosque: 5 mins",
      "To Kemaro Island: 22 mins",
    ],
  },
  {
    title: "Great Mosque",
    image: "/images/gallery/masjidAgung.jpeg",
    category: "Religious",
    short:
      "The largest and oldest mosque in Palembang, showcasing local and Islamic architecture.",
    full: "The Great Mosque of Palembang, also known as Masjid Agung Sultan Mahmud Badaruddin I, is a central place of worship and a historic symbol of Islamic heritage in South Sumatra. Built in the 18th century, it features a unique blend of traditional Palembang, Malay, and Chinese architecture.",
    distance: [
      "To Ampera Bridge: 5 mins",
      "To Monpera: 5 mins",
      "To Kemaro Island: 20 mins",
    ],
  },
  {
    title: "Museum Sultan Mahmud Badaruddin II",
    image: "/images/gallery/museumSultan.jpeg",
    category: "Museum",
    short:
      "A riverside museum showcasing Palembang's rich history and cultural artifacts.",
    full: "Located near the Ampera Bridge, this museum was once the palace of Sultan Mahmud Badaruddin II. It now houses artifacts, traditional costumes, and historical documents, providing insights into the history and culture of the Palembang sultanate.",
    distance: [
      "To Ampera Bridge: 3 mins",
      "To Great Mosque: 5 mins",
      "To Kemaro Island: 18 mins",
    ],
  },
  {
    title: "Tugu Ikan Belido",
    image: "/images/gallery/Tugu iwak belido.jpeg",
    category: "Landmark",
    short:
      "A modern landmark symbolizing the Belido fish, iconic to Palembang's identity.",
    full: "Tugu Ikan Belido is a statue and fountain located on the banks of the Musi River, near the Ampera Bridge. The monument honors the Belido (giant featherback) fish, which has cultural significance for the people of Palembang. It’s a favorite photo spot for tourists.",
    distance: [
      "To Ampera Bridge: 3 mins",
      "To Great Mosque: 6 mins",
      "To Kemaro Island: 17 mins",
    ],
  },
];

const chipColor = {
  Landmark: "bg-yellow-100 text-yellow-800",
  Museum: "bg-blue-100 text-blue-800",
  Religious: "bg-green-100 text-green-800",
  Monument: "bg-red-100 text-red-800",
  Nature: "bg-emerald-100 text-emerald-800",
  Culinary: "bg-pink-100 text-pink-800",
};

export default function DestinationPage() {
  const [selectedDest, setSelectedDest] = useState(null);

  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-white px-6 pt-32 py-16 md:px-16 relative z-0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center shiny-text">
            Destinations
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover must-visit tourist attractions in Palembang.
          </p>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition"
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                        chipColor[dest.category]
                      }`}
                    >
                      {dest.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{dest.title}</h3>
                    <p className="text-gray-600 text-sm">{dest.short}</p>
                  </div>
                  <div className="mt-5">
                    <button
                      onClick={() => setSelectedDest(dest)}
                      className="text-sm text-blue-600 hover:underline font-medium"
                    >
                      Learn more →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedDest && (
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
                className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-2xl"
              >
                <img
                  src={selectedDest.image}
                  alt={selectedDest.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 relative">
                  <button
                    onClick={() => setSelectedDest(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                  >
                    ×
                  </button>
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedDest.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{selectedDest.full}</p>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                    Nearby Destinations
                  </h4>
                  <ul className="text-sm text-gray-600 list-disc list-inside">
                    {selectedDest.distance.map((item, i) => (
                      <li key={i} className="italic">
                        {item}
                      </li>
                    ))}
                  </ul>
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
