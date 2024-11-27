import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ margin: "0 10px" }}>
        Home
      </Link>
      <Link to="/jobs" style={{ margin: "0 10px" }}>
        Jobs
      </Link>
      <Link to="/wishlist" style={{ margin: "0 10px" }}>
        Wishlist
      </Link>
      <Link to="/auth" style={{ margin: "0 10px" }}>
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
