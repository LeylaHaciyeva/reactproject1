import React, { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "./Navbar.css";
import {HashLink as Link} from 'react-router-hash-link'
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 991) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 991) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
        <Router>
      <nav className="navbar">
        <Link smooth to="#home" className="navbar-logo">
          <h1 className="nav-h1">ByLeila</h1>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul   className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link className="nav-links" smooth to="#home" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              smooth
              className="nav-links"
              to="#features"
              onClick={closeMobileMenu}
            >
              Features
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link className="nav-links" smooth to="#about">
              Abouts<i className="fas fa-caret-down"></i>
            </Link>
          </li>
       
          <li className="nav-item">
            <Link
              smooth
              className="nav-links"
              to="#testimonial"
              onClick={closeMobileMenu}
            >
              Testimonial
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
              to="#blog"
              smooth
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              smooth
              to="#contact"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      </Router>
    </>
  );
}
export default Navbar;

