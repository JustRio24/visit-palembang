import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DestinationCarousel from "../components/DestinationCarousel";
import ParallaxSection from "../components/ParallaxSection";
import { GallerySection } from "../components/GalerrySection";
import BackToTop from "../components/BackToTop";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <DestinationCarousel className="my-24" />
      <ParallaxSection imageUrl={"/images/gallery/bg_ampera.jpg"}>
        <h1 className="text-4xl font-bold mb-4">
          Haven’t decided yet? Let us inspire you even more.
        </h1>
        <form
          className="mt-6"
          action="https://formspree.io/f/xeogbakl"
          method="POST"
        >
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
            <input
              type="email"
              name="email"
              placeholder="Enter your e-mail to subscribe to our newsletter."
              className="flex-1 text-gray-700 bg-transparent outline-none px-2 py-2"
              required
            />
            <button
              type="submit"
              className="text-gray-600 hover:text-gray-800 transition scale-125 mr-2 hover:cursor-pointer"
              aria-label="Subscribe"
            >
              🖂
            </button>
          </div>
          <input
            type="hidden"
            name="_subject"
            value="New Newsletter Subscription"
          />
        </form>
      </ParallaxSection>

      <NextSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div className="hero h-[650px] pt-12 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" h-[690px] w-full object-cover "
          src="/video/Wonderful_Palembang.mp4"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold shiny-text">
              Experience Culture. <br /> Embrace Nature.
            </h1>
            <p className="mb-5 text-gray-200 opacity-50 ">
              Journey through the vibrant traditions, breathtaking landscapes,
              unforgettable flavors, and the warm, welcoming soul of Palembang —
              where every moment becomes a memory.
            </p>
            <Link to="/destinations" className="btn btn-ghost bg-red-400 ">
              Start Your Journey ▼
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function NextSection() {
  return (
    <>
      <div className=" my-32 mx-12">
        <h1 className="font-dancing text-3xl">Gallery Media</h1>
        <div className="flex flex-wrap justify-between py-8">
          <h2 className="text-4xl md:text-6xl  text-red-600 mb-2">
            They loved it and <br /> you will too.
          </h2>
          <p className="text-sm md:text-2xl text-gray-500">
            Discover special stories from those who visited Palembang <br /> and
            were enchanted.We hope to see you here too!
          </p>
        </div>

        <GallerySection />
      </div>
    </>
  );
}
