import { motion } from "framer-motion";

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg max-w-lg p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Terms and Conditions
        </h2>
        <div className="text-gray-700 max-h-60 overflow-y-auto space-y-3 mb-6">
          <ul className="list-disc list-inside space-y-2">
            <li>
              You confirm that all information provided is accurate and
              truthful.
            </li>
            <li>
              Your personal data will be used solely for planning your visit and
              handled confidentially.
            </li>
            <li>
              Visit dates and availability may change due to local conditions or
              regulations.
            </li>
            <li>
              Please check travel advisories and local guidelines prior to your
              visit.
            </li>
            <li>
              Organizer is not responsible for injury, loss, or damage during
              your visit.
            </li>
            <li>
              You agree to follow all local laws and guidelines during your
              visit.
            </li>
            <li>
              This plan is a request and does not guarantee bookings or
              reservations.
            </li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
