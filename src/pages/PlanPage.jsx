import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import BackToTop from "../components/BackToTop";
import TermsModal from "../components/TermsModal";

const steps = [
  "Personal Info",
  "Visit Details",
  "Preferences",
  "Summary",
  "Terms & Conditions",
];

export default function PlanPage() {
  const [step, setStep] = useState(0);
  const [showTerms, setShowTerms] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    visitDate: "",
    visitors: 1,
    preferences: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  function validateStep(currentStep) {
    const newErrors = {};
    if (currentStep === 0) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
      ) {
        newErrors.email = "Invalid email address";
      }
    } else if (currentStep === 1) {
      if (!formData.visitDate) newErrors.visitDate = "Visit date is required";
      if (formData.visitors < 1 || formData.visitors > 20)
        newErrors.visitors = "Visitors must be between 1 and 20";
    } else if (currentStep === 4) {
      if (!formData.agree)
        newErrors.agree = "You must agree to the terms and conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNext() {
    if (validateStep(step)) setStep((s) => s + 1);
  }

  function handleBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.agree) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xeogbakl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          visitDate: formData.visitDate,
          visitors: formData.visitors,
          preferences: formData.preferences,
        }),
      });

      if (response.ok) {
        setToastMessage(
          `Thank you, ${formData.name}! Your visit plan has been submitted.`
        );
        setShowToast(true);
        setFormData({
          name: "",
          email: "",
          visitDate: "",
          visitors: 1,
          preferences: "",
          agree: false,
        });
        setStep(0);
      } else {
        setToastMessage("Submission failed. Please try again.");
        setShowToast(true);
      }
    } catch (error) {
      console.error(error);
      setToastMessage("An error occurred. Please try again.");
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <NavBar />
      <main className="min-h-screen bg-gradient-to-tr from-red-100 to-red-50 px-6 md:px-20 pt-32">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-extrabold text-red-600 mb-8 text-center font-dancing">
            Plan Your Visit to Palembang
          </h1>

          {/* Stepper */}
          <div className="flex justify-between mb-10">
            {steps.map((label, i) => (
              <div key={label} className="flex-1 text-center">
                <div
                  className={`mx-auto mb-2 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    i === step
                      ? "border-red-600 bg-red-500 text-white font-bold"
                      : i < step
                      ? "border-red-600 bg-red-200 text-red-600 font-bold"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {i + 1}
                </div>
                <div
                  className={`text-xs sm:text-sm font-semibold ${
                    i === step
                      ? "text-red-600"
                      : i < step
                      ? "text-red-400"
                      : "text-gray-400"
                  }`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait" initial={false}>
              {step === 0 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block font-semibold mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-red-400"
                      }`}
                      placeholder="Your full name"
                      autoFocus
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-red-400"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block font-semibold mb-1">
                      Visit Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.visitDate
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-red-400"
                      }`}
                    />
                    {errors.visitDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.visitDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-semibold mb-1">
                      Number of Visitors
                    </label>
                    <input
                      type="number"
                      name="visitors"
                      min="1"
                      max="20"
                      value={formData.visitors}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.visitors
                          ? "border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:ring-red-400"
                      }`}
                    />
                    {errors.visitors && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.visitors}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <label className="block font-semibold mb-1">
                    Preferences / Special Requests
                  </label>
                  <textarea
                    name="preferences"
                    rows="5"
                    value={formData.preferences}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                    placeholder="E.g., want to visit historical sites, river cruises, food tours..."
                  ></textarea>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h2 className="text-xl font-bold border-b pb-2 mb-4 text-red-600">
                    Summary of Your Plan
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Name:</strong> {formData.name || "-"}
                    </li>
                    <li>
                      <strong>Email:</strong> {formData.email || "-"}
                    </li>
                    <li>
                      <strong>Visit Date:</strong> {formData.visitDate || "-"}
                    </li>
                    <li>
                      <strong>Number of Visitors:</strong> {formData.visitors}
                    </li>
                    <li>
                      <strong>Preferences:</strong>{" "}
                      {formData.preferences || "None"}
                    </li>
                  </ul>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <p className="text-gray-700">
                    Please read and accept our terms and conditions before
                    submitting your plan.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowTerms(true)}
                    className="text-red-600 underline font-semibold hover:text-red-800"
                  >
                    View Terms & Conditions
                  </button>

                  <label className="block items-center space-x-2">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-red-600"
                    />
                    <span className="text-gray-700">
                      I agree to the terms and conditions
                    </span>
                  </label>
                  {errors.agree && (
                    <p className="text-red-500 text-sm mt-1">{errors.agree}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 border border-red-600 rounded-md text-red-600 hover:bg-red-50 transition"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!formData.agree || isSubmitting}
                  className={`px-6 py-2 rounded-md text-white transition ${
                    !formData.agree || isSubmitting
                      ? "bg-red-300 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
      <Footer />
      <BackToTop />
    </>
  );
}
