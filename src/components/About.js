import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  // const text = ["Developer.", "UI Developer.", "Web Developer."];
  // const [currenttextindex, setcurrenttextindex] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setcurrenttextindex((prevIndex) => (prevIndex + 1) % text.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const text = ["Developer.", "UI Developer.", "Web Developer."];
  const [currentText, setCurrentText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = text[currentTextIndex];
      if (isDeleting) {
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        setSpeed(50);
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
      className="about-section brd-b1 wrapper df fww aic mt32 ptb80"
      id="about-id"
    >
      <div className="about-content flx50">
        <div className="about-content-box mr24">
          <h4 className="section-subheading fs14 mb32 fw5 ls2 ttu">
            Welcome to my world
          </h4>
          <h2 className="section-heading fw7 fs60 lh70 mb32 fc2">
            Hi, I’m{" "}
            <span className="fc3">
              Jone Lee <br />a
            </span>{" "}
            <span>{text[currentTextIndex]}</span>
          </h2>
          <p className="section-sub-heading lh30 fs18 mb32">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
          <h4 className="section-subheading fs14 mb32 pt80 fw5 ls2 ttu">
            find with me
          </h4>
          <div className="about-social-media df fww">
            <Link
              to="https://www.linkedin.com/in/shivnilay1516/"
              className="social-icon fc2 p16 transit2 br8 bg-bs-01 mr12"
            >
              <FaLinkedinIn className="social-icons fs24" />
            </Link>
            <Link
              to="https://github.com/Shiv1516"
              className="social-icon fc2 p16 transit2 br8 bg-bs-01 mlr12"
            >
              <FaGithub className="social-icons fs24" />
            </Link>
            <Link
              to="https://www.instagram.com/_shivnilay_srivastav_/"
              className="social-icon fc2 p16 transit2 br8 bg-bs-01 mlr12"
            >
              <FaInstagram className="social-icons fs24" />
            </Link>
            <Link
              to="https://x.com/shivnilay"
              className="social-icon fc2 p16 transit2 br8 bg-bs-01 mlr12"
            >
              <FaXTwitter className="social-icons fs24" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flx1 df jce">
        <div className="about-left ml24 bef pr df jce bg-bs-01 w85">
          <img
            src="/images/banner-01.png"
            alt="img"
            className="abou-img w100"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
