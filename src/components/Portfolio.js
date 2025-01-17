import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    id: 1,
    title: "The services provide for design",
    likes: "600",
    department: "Development",
    image: "/images/portfolio-01.jpg",
  },
  {
    id: 1,
    title: "The services provide for design",
    likes: "600",
    department: "Development",
    image: "/images/portfolio-02.jpg",
  },
  {
    id: 1,
    title: "The services provide for design",
    likes: "600",
    department: "Development",
    image: "/images/portfolio-03.jpg",
  },
  {
    id: 1,
    title: "The services provide for design",
    likes: "600",
    department: "Development",
    image: "/images/portfolio-02.jpg",
  },
  {
    id: 1,
    title: "The services provide for design",
    likes: "600",
    department: "Development",
    image: "/images/portfolio-01.jpg",
  },
  {
    id: 1,
    title: "The services provide for design",
    likes: "600",
    department: "Development",
    image: "/images/portfolio-03.jpg",
  },
];

function Portfolio() {
  return (
    <div
      className="portfolio-section tac ptb80 wrapper brd-b1"
      id="portfolio-id"
    >
      <h4 className="section-subheading lh20 fs14 mb20 fc3 fw5 ls2 ttu">
        Visit my portfolio and keep your feedback
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">My Portfolio</h2>

      <div className="portfolio-cards-box df fww ptb32">
        {portfolioData.map((item) => (
          <div className="portfolio-cards flx33 mb24" key={item.id}>
            <div className="portfolio-card br12 p32 bg-bs-01 m16 tal">
              <div className="portfolio-card-img mb24 ofh df br12">
                <img
                  src={item.image}
                  alt="portfolio"
                  className="port-img w100 transit2"
                />
              </div>
              <div className="port-card-top-des fs13 mb20 df jcsb">
                <h4 className="portfolio-card-dep fc3 fw5 ls1 ttu">
                  {item.department}
                </h4>
                <h5 className="portfolio-card-like df fw5">
                  <FaRegHeart className="mr8" />
                  {item.likes}
                </h5>
              </div>
              <Link
                to="/"
                className="portfolio-card-heading fs24 fc-h1 tal lh30 aic fw6"
              >
                {item.title}
                <FiArrowUpRight className="port-icon ml8 mb-6 dn fc3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
