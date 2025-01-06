import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section ptb80 tac" id="footer-id">
      <Link to="/" className="footer-logo mb24">
        <img
          src="/images/img_01.jpg"
          alt="logo-img"
          className="footer-icon brd1 mb12"
        />
        <h2 className="footer-logo-test ttu fs24 ls1 fw6">INBIO</h2>
      </Link>
      <p className="footer-text fs14">
        © 2022. All rights reserved by Shivnilay Srivastav.
      </p>
    </div>
  );
}

export default Footer;
