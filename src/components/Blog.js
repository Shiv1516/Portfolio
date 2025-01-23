import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Crafting Dynamic Websites for Nonprofits",
    image: "/images/blog-01.jpg",
    timing: "2 Years ago",
    location: "India",
    link: "https://www.wscubetech.com/blog/web-development/",
  },
  {
    id: 2,
    title: "Mastering the Art of Freelance Projects",
    image: "/images/blog-02.jpg",
    timing: "6 month ago",
    location: "India",
    link: "https://www.wscubetech.com/blog/web-development/",
  },
  {
    id: 3,
    title: "UI/UX Trends in Social Media Platforms",
    image: "/images/blog-03.jpg",
    timing: "2 week read",
    location: "Delhi",
    link: "https://www.wscubetech.com/blog/web-development/",
  },
  {
    id: 4,
    title: "Seamless Charity Payment Integration",
    image: "/images/blog-04.jpg",
    timing: "20 min read",
    location: "Jaipur",
    link: "https://www.wscubetech.com/blog/web-development/",
  },
  {
    id: 5,
    title: "Interactive Solutions for Services",
    image: "/images/blog-05.jpg",
    timing: "20 days read",
    location: "NCR",
    link: "https://www.wscubetech.com/blog/web-development/",
  },
  {
    id: 6,
    title: "Elevating User Experience with Framer Motion",
    image: "/images/blog-06.jpg",
    timing: "2 Month read",
    location: "Noida",
    link: "https://www.wscubetech.com/blog/web-development/",
  },
];

function Blog() {
  return (
    <div className="Blog-section tac ptb80 wrapper brd-b1" id="blog-id">
      <h4 className="section-subheading lh20 fs14 mb20 fc3 fw5 ls2 ttu">
        Visit my blog and keep your feedback
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">My Blog</h2>

      <div className="blog-cards-box df fww ptb32">
        {blogData.map((item) => (
          <div className="blog-cards flx33 mb24" key={item.id}>
            <div className="blog-card br12 p32 bg-bs-01 m16 tal">
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
                to={item.link}
                target="_blank"
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
