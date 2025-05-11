import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        {isAuthenticated ? (
          <button className="navbar-button" onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
