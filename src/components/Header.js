import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header-section pr w100 zi99 bg1 transit1 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <header className="header wrapper v-center jcsb ptb16">
        <Link to="/" className="logo df aic">
          <img
            src="/images/img_01.jpg"
            alt="logo-img"
            className="logo-icon brd1"
          />
          <h2 className="logo-test ttu fs20 fw6 pl16">INBIO</h2>
        </Link>
        <nav className="navbar v-center">
          <ul id="nav-items" className="nav-items fc1 v-center fs14 fw5 fww">
            <li className="nav-item">
              <Link to="/" className="nav-link fc-h1 transit2 ttu p16">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fc-h1 transit2 ttu p16">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fc-h1 transit2 ttu p16">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fc-h1 transit2 ttu p16">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fc-h1 transit2 ttu p16">
                Clients
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fc-h1 transit2 ttu p16">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fc-h1 transit2 ttu p16">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link fc-h1 transit2 ttu p16">
                Contact
              </Link>
            </li>
          </ul>
          <div>
            <Link
              to="/"
              className="talk-btn fc3 transit2 br8 fs14 fw6 fc-h2 ttu plr16 ptb24 bg-bs-01 mlr12"
            >
              Buy Now
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
