import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";

function Header() {
  return (
    <div>
      <div className="top-header bg3">
        <div className="top-header-container wrapper ptb12 jce df">
          <a href="tel:/+91 9315878785" className="v-center fs15 mr24 fw5">
            <IoMdCall className="mr8 fs22" />
            +91 7052211516
          </a>
          <a
            href="mailto:shivnilaysrivastav@gmail.com"
            className="v-center fs15 mr24 fw5"
          >
            <MdMail className="mr8 fs22" />
            shivnilaysrivastav@gmail.com
          </a>
        </div>
      </div>
      <header className="header bg4">
        <nav className="navbar wrapper jcc v-center w100 zi999">
          <ul id="nav-items" className="nav-items fc1 v-center fw5 fww">
            <li className="nav-item">
              <a href="#" className="nav-link fc-h1 ptb32 plr16 ls1 transit2">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link fc-h1 ptb32 plr16 ls1 transit2 v-center"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link fc-h1 ptb32 plr16 ls1 transit2">
                Projects
              </a>
            </li>
            <li className="#">
              <a href="#" className="nav-link fc-h1 ptb32 plr16 ls1 transit2">
                Testomonial
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link fc-h1 ptb32 plr16 ls1 transit2">
                Contact
              </a>
            </li>
          </ul>
          <div>
            <a
              href="#"
              className="talk-btn h40 plr24 bg1 v-center fc5 br8 ml16"
            >
              Let's Talk
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
