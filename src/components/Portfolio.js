import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio-section tac ptb48 wrapper">
      <h4 className="section-subheading fs14 mb20 fc3 fw5 ls2 ttu">
        Visit my portfolio and keep your feedback
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">My Portfolio</h2>

      <div className="portfolio-cards-box df fww pt24">
        <div className="portfolio-cards flx33">
          <div className="portfolio-card br12 p32 bg-bs-01 m16">
            <div className="portfolio-card-img mb24 ofh df br12">
              <img
                src="/images/portfolio-01.jpg"
                alt="portfolio"
                className="port-img w100 transit2"
              />
            </div>
            <div className="port-card-top-des fs13 mb20 df jcsb">
              <h4 className="portfolio-card-dep fc3 fw5 ls1 ttu">
                Development
              </h4>
              <h5 className="portfolio-card-like df fw5">
                <FaRegHeart className="mr8" />
                600
              </h5>
            </div>
            <Link
              to="/"
              className="portfolio-card-heading fs24 fc-h1 tal lh30 aic fw6"
            >
              The services provide for design
              <FiArrowUpRight className="port-icon ml8 mb-6 dn fc3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
