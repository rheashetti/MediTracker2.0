import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./NavBar.css";
import homeIcon from "../assets/Home.png";
import Book from "../assets/Book.png";

const NavBar = () => {
  return (
    <div className="navbar">
      {/* Link to Home */}
      <Link to="/" className="nav-button">
        <img src={homeIcon} alt="Home" className="nav-icon" />
      </Link>

      {/* Link to Profile */}
      <Link to="/profile" className="nav-button">
        <img src={Book} alt="Profile" className="nav-icon" />
      </Link>
    </div>
  );
};

export default NavBar;