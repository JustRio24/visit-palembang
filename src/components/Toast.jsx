import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // otomatis hilang setelah 3 detik
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-8 right-8 bg-red-600 text-white px-6 py-3 rounded-md shadow-lg z-50 animate-fadeInOut">
      {message}
    </div>
  );
}
