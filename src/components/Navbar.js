import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-500 py-2 px-4">
      <div className="flex items-center justify-between text-white">
        <div>
          <NavLink to="/">LOGO</NavLink>
        </div>
        <div>
          <NavLink to="/" className="mr-2">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
