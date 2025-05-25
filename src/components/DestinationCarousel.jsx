// components/DestinationCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const destinations = [
  {
    title: "Culinary",
    desc: "Savor authentic local dishes and flavors that make Palembang a true paradise for food lovers.",
    image: "/images/culinary.jpg",
    link: "/destinations",
  },
  {
    title: "Culture",
    desc: "Experience the vibrant traditions and colorful performances that reflect Palembang’s rich cultural heritage.",
    image: "/images/culture.jpg",
    link: "/destinations",
  },
  {
    title: "Landmark",
    desc: "Explore iconic landmarks that tell the story of Palembang’s historical and architectural legacy.",
    image: "/images/landmark.jpg",
    link: "/destinations",
  },
  {
    title: "Heritage",
    desc: "Discover ancient sites and traditions passed down through generations, preserving the city’s soul.",
    image: "/images/heritage.jpg",
    link: "/destinations",
  },
];

export default function DestinationCarousel() {
  return (
    <section className="bg-white py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <h2 className="text-sm text-gray-500 uppercase tracking-wide font-dancing">
            Where to Go
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-red-500">
            Pick your own journey.
          </h3>
          <p className="text-gray-600 max-w-2xl mb-6">
            Discover Palembang’s unique tourism, where vibrant traditional
            culture meets lush natural beauty. Experience colorful festivals,
            traditional dances, and local cuisine that reflect the city’s rich
            heritage. Explore diverse destinations—from historic sites to
            peaceful nature spots—that suit your journey and reveal what makes
            each one special. Palembang invites you to enjoy an authentic and
            memorable travel experience.
          </p>
          <a
            href="/destinations"
            className="border border-gray-800 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-800 hover:text-white transition"
          >
            See All
          </a>
        </div>

        <div className="w-full md:w-1/2 order-2 md:order-2">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 1.7,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            className="w-auto"
          >
            {destinations.map((dest, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-92 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-50 transition duration-300"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    <div className="relative flex flex-col group-hover:mb-4 transition-all duration-500 ease-in-out">
                      <h4 className="text-white text-xl font-semibold transition-all duration-500 ease-in-out lg:group-hover:translate-y-[-60px] sm:group-hover:translate-y-[-90px]">
                        {dest.title}
                      </h4>

                      <p className="absolute top-full mt-1 text-white text-sm opacity-0 translate-y-2 lg:group-hover:translate-y-[-60px] sm:group-hover:translate-y-[-90px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                        {dest.desc}
                      </p>
                    </div>

                    <a
                      href={dest.link}
                      className="text-sm text-white border border-white rounded-full px-4 py-1 inline-block hover:bg-white hover:text-black transition"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
