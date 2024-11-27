import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 p-5 drop-shadow flex justify-end gap-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold text-black-600 underline" : "text-black"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/jobs"
        className={({ isActive }) =>
          isActive ? "font-bold text-black-600 underline" : "text-black"
        }
      >
        Jobs
      </NavLink>
      <NavLink
        to="/wishlist"
        className={({ isActive }) =>
          isActive ? "font-bold text-black-600 underline" : "text-black"
        }
      >
        Wishlist
      </NavLink>
      <NavLink
        to="/auth"
        className={({ isActive }) =>
          isActive ? "font-bold text-black-600 underline" : "text-black"
        }
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
