import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdAppstore } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { MdContentPaste } from "react-icons/md";
import { SiFrontendmentor } from "react-icons/si";
import { MdOutlineWebhook } from "react-icons/md";

const featureData = [
  {
    id: 1,
    subtitle: "Dynamic Websites",
    title:
      "Building responsive, interactive, and feature-rich websites for optimal user experience.",
    icon: "CgWebsite",
  },
  {
    id: 2,
    subtitle: "Frontend Excellence",
    title:
      "Delivering high-quality, responsive, and visually appealing frontend web solutions.",
    icon: "SiFrontendmentor",
  },
  {
    id: 3,
    subtitle: "Interactive Interface",
    title:
      "Creating engaging, user-friendly interfaces that enhance interaction and usability.",
    icon: "IoMdAppstore",
  },
  {
    id: 4,
    subtitle: "Creative Development",
    title:
      "Designing innovative, visually captivating websites with unique, user-focused solutions.",
    icon: "MdOutlineScreenSearchDesktop",
  },
  {
    id: 5,
    subtitle: "Functional Sites",
    title:
      "Building efficient, user-centric websites that prioritize functionality and seamless interaction.",
    icon: "MdContentPaste",
  },
  {
    id: 6,
    subtitle: "Modern Webs",
    title:
      "Developing sleek, responsive, and user-friendly websites with cutting-edge technology.",
    icon: "MdOutlineWebhook",
  },
];

const iconsMap = {
  RxHamburgerMenu: RxHamburgerMenu,
  FaArrowRight: FaArrowRight,
  CgWebsite: CgWebsite,
  IoMdAppstore: IoMdAppstore,
  MdOutlineScreenSearchDesktop: MdOutlineScreenSearchDesktop,
  MdContentPaste: MdContentPaste,
  SiFrontendmentor: SiFrontendmentor,
  MdOutlineWebhook: MdOutlineWebhook,
};

function Features() {
  const handlemail = () => {
    window.open("mailto:shivnilaysrivastav@gmail.com", "_blank");
  };
  return (
    <div className="features-section wrapper ptb80 brd-b1" id="feature-id">
      <h4 className="section-subheading lh20 fs14 mb20 fc3 fw5 ls2 ttu">
        Features
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">What I Do</h2>
      <div className="features-card-box df fww ptb32">
        {featureData.map((item) => {
          const IconComponent = iconsMap[item.icon];
          return (
            <div className="features-cards flx33 mb24" key={item.id}>
              <Link
                onClick={handlemail}
                className="features-card m16 bg-bs-01 ptb48 fc-h2 transit2 plr40 br12"
              >
                {IconComponent && (
                  <IconComponent className="features-icon mb32 fs42 pt12 fc3 fw5" />
                )}
                <h3 className="features-card-heading fs22 fw5 mb24">
                  {item.subtitle}
                </h3>
                <p className="features-card-subheading lh30 mb24">
                  {item.title}
                </p>
                <FaArrowRight className="feature-right-icon dn fc4 fs24" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
