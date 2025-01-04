import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="features-section wrapper ptb48">
      <h4 className="section-subheading fs14 mb20 fc3 fw5 ls2 ttu">Features</h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">What I Do</h2>
      <div className="features-card-box df fww pt32">
        <div className="features-cards flx33">
          <Link
            to="/"
            className="features-card m16 bg-bs-01 ptb48 fc-h2 transit2 plr40 br12"
          >
            <RxHamburgerMenu className="features-icon mb32 fs42 pt12 fc3 fw5" />
            <h3 className="features-card-heading fs22 fw5 mb24">
              Business Stratagy
            </h3>
            <p className="features-card-subheading lh30 mb24">
              I throw myself down among the tall grass by the stream as i lie
              close to the earth.
            </p>
            <FaArrowRight className="feature-right-icon dn fc4 fs24" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Features;
