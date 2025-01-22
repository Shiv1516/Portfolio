import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  const text = [
    "Developer.",
    "UI Developer.",
    "Web Developer.",
    "Frontend Developer",
  ];
  const [currentText, setCurrentText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = text[currentTextIndex];
      if (isDeleting) {
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setSpeed(40);
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        setSpeed(150);
      }
      if (!isDeleting && currentText === fullText) {
        setIsDeleting(true);
        setSpeed(1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % text.length);
        setSpeed(500);
      }
    };
    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, speed]);

  return (
    <div
      className="about-section brd-b1 wrapper df fww aic ptb80"
      id="about-id"
    >
      <div className="about-content flx50">
        <div className="about-content-box mr24">
          <h4 className="section-subheading lh20 fs14 mb32 fw5 ls2 ttu">
            Welcome to my world
          </h4>
          <h2 className="section-heading fw7 fs52 lh70 mb32 fc2">
            Hi, I’m <br />
            <span className="fc3 mr12">
              Shivnilay Srivastav <br /> a
            </span>
            <span>{text[currentTextIndex]}</span>
          </h2>
          <p className="section-sub-heading lh30 fs18 mb24">
            I leverage my knowledge of frontend development and UI/UX design to
            create seamless and engaging user experiences. My focus is not just
            on building visually appealing interfaces but ensuring functionality
            and interactivity that enhance every interaction.
          </p>
          <Link
            to="https://drive.google.com/file/d/1v2mgaflz28U8gQZnT6FZuWCb-_iUT1aH/view?usp=sharing
"
            target="_blank"
            className="resume-btn fs14 bg-bs-01 p12 br24 fc-h1 fw5 mb16"
          >
            Resume
          </Link>
          <h4 className="section-subheading lh20 fs14 mb32 pt70 fw5 ls2 ttu">
            find with me
          </h4>
          <div className="about-social-media df fww">
            <Link
              to="https://www.linkedin.com/in/shivnilay1516/"
              target="_blank"
              className="social-icon fc2 p16 transit2 br8 bg-bs-01 mr12"
            >
              <FaLinkedinIn className="social-icons fs24" />
            </Link>
            <Link
              to="https://github.com/Shiv1516"
              target="_blank"
              className="social-icon fc2 p16 transit2 br8 bg-bs-01 mlr12"
            >
              <FaGithub className="social-icons fs24" />
            </Link>
            <Link
              to="https://www.instagram.com/_shivnilay_srivastav_/"
              target="_blank"
              className="social-icon fc2 p16 transit2 br8 bg-bs-01 mlr12"
            >
              <FaInstagram className="social-icons fs24" />
            </Link>
            <Link
              to="https://x.com/shivnilay"
              target="_blank"
              className="social-icon fc2 p16 transit2 br8 bg-bs-01 mlr12"
            >
              <FaXTwitter className="social-icons fs24" />
            </Link>
          </div>
        </div>
      </div>
      <div className="about-banner-img flx1 df jce">
        <div className="about-left ml24 bef pr df w85 br12">
          <img
            src="/images/banner-img-01.png"
            alt="img"
            className="abou-img w100 zi2"
          />
          <img
            src="/images/banner-img-02.png"
            alt="img"
            className="abou-img-01 w100 zi2 dn"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
