import React from "react";
import "./Navbar.css";
import DarkMode from "../components/DarkMode/DarkMode.jsx"
import Fire from "../assets/fire.png";
import Star from "../assets/glowing-star.png";
import Party from "../assets/partying-face.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <h1>MovieManiac</h1>
        <div className="navbar-links">
          <DarkMode/>
          <NavLink to="/">
            Popular <img src={Fire} alt="Fire" className="navbar-emoji" />
          </NavLink>
          <NavLink to="/top_rated">
            Top Rated <img src={Star} alt="Fire" className="navbar-emoji" />
          </NavLink>
          <NavLink to="/upcoming">
            Party <img src={Party} alt="Fire" className="navbar-emoji" />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
