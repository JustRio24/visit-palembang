import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-10 px-6">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-10">
          <span className="text-2xl font-dancing text-red-500">
            Visit Palembang
          </span>
          <p className="max-w-sm mt-2 text-sm">
            Discover the charm of Palembang—its culture, cuisine, and
            breathtaking destinations.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <span className="footer-title">Explore</span>
            <ul className="flex flex-col gap-1 mt-2 text-sm">
              <li>
                <Link to="/" className="link link-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="link link-hover">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="link link-hover">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/map" className="link link-hover">
                  Map & Transportation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="footer-title">Contact</span>
            <ul className="text-sm mt-2">
              <li>Email: visitpalembang@email.com</li>
              <li>Phone: +62 812 3456 7890</li>
              <li>Location: Palembang, Indonesia</li>
            </ul>
          </div>

          <div className="mr-32">
            <span className="footer-title">Quick Tips</span>
            <ul className="mt-2 text-sm text-gray-700 space-y-1">
              <li>
                🛵 Try local transport like becak or ojek for a unique
                experience
              </li>
              <li>🥢 Don’t miss Pempek — Palembang’s famous fish cake</li>
              <li>📅 Visit during Ramadan for special cultural events</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-10 pt-4 border-t border-base-300">
          © {new Date().getFullYear()} Visit Palembang. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
