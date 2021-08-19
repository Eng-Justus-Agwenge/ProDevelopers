import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaSignInAlt, FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link className="links" to="/">
          <FaHome size="2em" color="#f1f1f1" />
          Home
        </Link>
      </div>

      <nav className="navbar">
        <ul>
          <Link className="links" to="/login">
            <FaSignInAlt size="2em" />
            Login
          </Link>
          <Link className="links" to="/signup">
            Sign Up
          </Link>
          <Link className="links" to="/Our Modules">
            <FaCode size="2em" />
            Our Modules
          </Link>
          <Link className="links" to="/Social">
            <FaUsers size="2em" />
            Social
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
