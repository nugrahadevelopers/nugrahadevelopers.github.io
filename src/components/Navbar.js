import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-50 shadow py-3 px-4">
      <div className="flex items-center justify-between text-gray-700">
        <div>
          <NavLink to="/">
            <span className="font-semibold focus:outline-none">_nugraha</span>
            <span className="text-xs font-black bg-gray-300 rounded-full">
              {" "}
              dev.
            </span>
          </NavLink>
        </div>
        <div className="text-sm font-semibold">
          <NavLink
            to="/"
            className="pb-4 pt-1 px-4 rounded-t-lg hover:shadow-inner hover:bg-gray-300 hover:text-gray-500 focus:outline-none"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="pb-4 pt-1 px-4 rounded-t-lg hover:shadow-inner hover:bg-gray-300 hover:text-gray-500 focus:outline-none"
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className="pb-4 pt-1 px-4 rounded-t-lg hover:shadow-inner hover:bg-gray-300 hover:text-gray-500 focus:outline-none"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className="pb-4 pt-1 px-4 rounded-t-lg hover:shadow-inner hover:bg-gray-300 hover:text-gray-500 focus:outline-none"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
