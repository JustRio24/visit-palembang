import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/map">Map & Transportation</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col items-center text-center ml-4 font-dancing"
        >
          <span className="text-md font-bold text-slate-500 -mb-2 ">Visit</span>
          <span className="text-lg font-extrabold text-red-500">Palembang</span>
        </Link>
      </div>

      {/* Navigation (desktop) */}
      <div className="navbar-center hidden lg:flex font-dancing">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/destinations">Destinations</Link>
          </li>
          <li>
            <Link to="/map">Map & Transportation</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="navbar-end">
        <Link
          to="/plan"
          className="btn btn-primary border-red-600 bg-red-500 rounded-2xl hover:bg-red-300 mr-4"
        >
          Plan Your Visit
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
