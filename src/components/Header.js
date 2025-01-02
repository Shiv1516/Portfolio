import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";

function Header() {
  return (
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
          <a href="#" className="talk-btn h40 plr24 bg1 v-center fc5 br8 ml16">
            Let's Talk
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
