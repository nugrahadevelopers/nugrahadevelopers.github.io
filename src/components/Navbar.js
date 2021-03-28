import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }, []);
  return (
    <div className="bg-gray-50 shadow py-3 px-4">
      <div className="flex flex-wrap items-center justify-between text-gray-700">
        <div>
          <NavLink to="/">
            <span className="font-semibold focus:outline-none">_nugraha</span>
            <span className="text-xs font-black bg-gray-300 rounded-full">
              {" "}
              dev.
            </span>
          </NavLink>
        </div>
        <div className="flex md:hidden">
          <button id="hamburger" className="h-5 w-5 focus:outline-none">
            <svg
              className="toggle block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className="toggle hidden"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="toggle hidden md:flex w-full md:w-auto text-sm font-semibold">
          <NavLink
            to="/"
            className="block md:inline-block pb-4 pt-1 md:px-4 md:rounded-t-lg hover:shadow-inner hover:bg-gray-300 hover:text-gray-500 focus:outline-none"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block md:inline-block pb-4 pt-1 md:px-4 md:rounded-t-lg hover:shadow-inner hover:bg-gray-300 hover:text-gray-500 focus:outline-none"
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className="block md:inline-block pb-4 pt-1 md:px-4 md:rounded-t-lg hover:shadow-inner hover:bg-gray-300 hover:text-gray-500 focus:outline-none"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className="block md:inline-block pb-4 pt-1 md:px-4 md:rounded-t-lg hover:shadow-inner hover:bg-gray-300 hover:text-gray-500 focus:outline-none"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
