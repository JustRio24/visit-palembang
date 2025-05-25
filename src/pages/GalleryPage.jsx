import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const allImages = [
  { src: "/images/gallery/bg_ampera.jpg", category: "Landmark" },
  { src: "/images/gallery/musiriver.jpeg", category: "Nature" },
  { src: "/images/culinary.jpg", category: "Culinary" },
  { src: "/images/heritage.jpg", category: "Culture" },
  { src: "/images/gallery/Pindang Patin.jpg", category: "Culinary" },
  { src: "/images/gallery/kemaroisland.jpg", category: "Landmark" },
  { src: "/images/gallery/bukitsiguntang.jpg", category: "Nature" },
  { src: "/images/gallery/rumahadat.jpeg", category: "Culture" },
  { src: "/images/gallery/bajuadat.jpeg", category: "Culture" },
  { src: "/images/culture.jpg", category: "Culture" },
  { src: "/images/gallery/burgo.jpeg", category: "Culinary" },
  { src: "/images/gallery/masjidAgung.jpeg", category: "Religious" },
  { src: "/images/gallery/museumSultan.jpeg", category: "Museum" },
  { src: "/images/gallery/Tugu iwak belido.jpeg", category: "Monument" },
  { src: "/images/gallery/Monpera.jpeg", category: "Monument" },
  { src: "/images/gallery/ysc.jpg", category: "Nature" },
  { src: "/images/gallery/bkb.jpeg", category: "Landmark" },
  { src: "/images/gallery/Balaputra.jpeg", category: "Museum" },
  { src: "/images/gallery/ampera2.jpeg", category: "Landmark" },
  { src: "/images/gallery/SekanakRiver.jpg", category: "Nature" },
  { src: "/images/gallery/KapalSelam.jpeg", category: "Culinary" },
  { src: "/images/gallery/GendingSriwijaya.jpeg", category: "Culture" },
  { src: "/images/gallery/Al-QuranAkbar.jpg", category: "Religious" },
];

const categories = [
  "All",
  "Landmark",
  "Culture",
  "Religious",
  "Culinary",
  "Monument",
  "Nature",
  "Museum",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-white pt-32 px-6 py-16 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center shiny-text">
            Gallery
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Explore the beauty of Palembang through curated collections.
          </p>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === cat
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } transition`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* GALLERY GRID */}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </Masonry>

          {/* LIGHTBOX */}
          <Lightbox
            open={lightboxIndex >= 0}
            close={() => setLightboxIndex(-1)}
            slides={filteredImages.map((img) => ({ src: img.src }))}
            index={lightboxIndex}
          />
        </div>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
}
