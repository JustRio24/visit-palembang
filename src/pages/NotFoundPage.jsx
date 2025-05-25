import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function NotFoundPage() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen flex flex-col items-center justify-center bg-white pt-32 px-6 py-16">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-extrabold text-red-600 mb-6"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl text-gray-700 mb-8 text-center max-w-md"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
        >
          Go Back Home
        </motion.a>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
}
