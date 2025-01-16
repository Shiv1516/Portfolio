import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "T-shirt design is the part of design",
    image: "/images/blog-01.jpg",
    timing: "2 min read",
    location: "America",
  },
  {
    id: 1,
    title: "T-shirt design is the part of design",
    image: "/images/blog-02.jpg",
    timing: "2 min read",
    location: "America",
  },
  {
    id: 1,
    title: "T-shirt design is the part of design",
    image: "/images/blog-01.jpg",
    timing: "2 min read",
    location: "America",
  },
  {
    id: 1,
    title: "T-shirt design is the part of design",
    image: "/images/blog-02.jpg",
    timing: "2 min read",
    location: "America",
  },
  {
    id: 1,
    title: "T-shirt design is the part of design",
    image: "/images/blog-01.jpg",
    timing: "2 min read",
    location: "America",
  },
  {
    id: 1,
    title: "T-shirt design is the part of design",
    image: "/images/blog-02.jpg",
    timing: "2 min read",
    location: "America",
  },
];

function Blog() {
  return (
    <div className="Blog-section tac ptb80 wrapper brd-b1" id="blog-id">
      <h4 className="section-subheading fs14 mb20 fc3 fw5 ls2 ttu">
        Visit my blog and keep your feedback
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">My Blog</h2>

      <div className="blog-cards-box df fww ptb32">
        {blogData.map((item) => (
          <div className="blog-cards flx33 mb24" key={item.id}>
            <div className="blog-card br12 p32 bg-bs-01 m16">
              <div className="blog-card-img mb24 ofh df br12">
                <img
                  src={item.image}
                  alt="portfolio"
                  className="port-img w100 transit2"
                />
              </div>
              <div className="port-card-top-des fs13 mb20 df jcsb">
                <h4 className="blog-card-dep fc3 fw5 ls1 ttu">
                  {item.location}
                </h4>
                <h5 className="blog-card-like df fw5">
                  <FaRegClock className="mr8" />
                  {item.timing}
                </h5>
              </div>
              <Link
                to="/"
                className="blog-card-heading fs24 fc-h1 tal lh30 aic fw6"
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
export default Blog;
