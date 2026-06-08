import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from 'react'
import "./NavBar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <button 
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        >
        ☰
        </button>

      <Link to="/#home" className="logo" onClick={() => window.scrollTo(0, 0)}>
        Quick Cutz
        </Link>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          
          {/* links */}
          <li>
            <HashLink smooth to="/#about">
              Home
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#landing">
              About Us
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/Services#top">
              Services
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/Stylists#top">
              Our Stylists
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#contact">
              Contact Us
            </HashLink>
          </li>
        </ul>

        {/* CTA */}
        <Link to="/Book#top" className="cta-btn">
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}