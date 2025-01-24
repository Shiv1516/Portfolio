import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const handlemail = () => {
    window.open("mailto:shivnilaysrivastav@gmail.com", "_blank");
  };

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      number,
      email,
      subject,
      message: text,
    };
    console.log("Form Submitted:", formData);

    setName("");
    setNumber("");
    setEmail("");
    setSubject("");
    setText("");
  };

  return (
    <div className="contact-section ptb80 tac wrapper brd-b1" id="contact-id">
      <h4 className="section-subheading lh20 fs14 mb20 fc3 fw5 ls2 ttu">
        Contact
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">Contact With Me</h2>
      <div className="contact-card-box df fww ptb32 tal aisc">
        <div className="contact-content flx40">
          <div className="contact-card mlr16 br12 p32 bg-bs-01">
            <div className="contact-card-img mb24 ofh df br12">
              <img
                src="/images/contact.png"
                alt="portfolio"
                className="cont-img w100 transit2"
              />
            </div>
            <h2 className="contact-card-heading fs28 fw7 mb12">
              Shivnilay Srivastav
            </h2>
            <h4 className="contact-card-deg mb24 fw3 ml8">
              Software Developer
            </h4>
            <p className="contact-card-des lh30 mb24 fs18 fw4">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <ul className="contact-list fs18 fw4 mb40">
              <li className="contact-item df mb12">
                Phone:
                <Link
                  to="tel:+917052211516"
                  className="contact-item-hov transit2 aft pr fc-h1 ml12"
                >
                  +91 7052211516
                </Link>
              </li>
              <li className="contact-item df mb12">
                Email:
                <Link
                  // to="mailto:shivnilaysrivastav@gmail.com"
                  onClick={handlemail}
                  className="contact-item-hov transit2 aft pr fc-h1 ml12"
                >
                  shivnilaysrivastav@gmail.com
                </Link>
              </li>
            </ul>
            <h3 className="contact-social-card mb24 ttu fs15">Find Width me</h3>
            <div className="cont-socil-link df fww ptb8">
              <Link
                to="https://www.linkedin.com/in/shivnilay1516/"
                target="_blank"
                className="social-icon fc2 p16 transit2 br8 bg-bs-01 mlr12"
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
        <div className="contact-form flx1">
          <form
            className="contact-form-card mlr16 br12 p32 bg-bs-01"
            onSubmit={handleSubmit}
          >
            <div className="name-form-box df aic fww jcsb mb24">
              <div className="nam-input flx48 df fdc">
                <label
                  htmlFor="name-field"
                  className="form-name ttu fw4 ls1 fs12 mb16"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name-field"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-name-text h48 plr12 bg4 brd2 br4 mb8"
                />
              </div>
              <div className="nam-input flx48 df fdc">
                <label
                  htmlFor="number-field"
                  className="form-number ttu fw4 ls1 fs12 mb16"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  placeholder=""
                  id="number-field"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="form-number-text h48 plr12 bg4 brd2 br4 mb8"
                />
              </div>
            </div>
            <div className="email-input df fdc mb24">
              <label
                htmlFor="email-field"
                className="form-email ttu fw4 ls1 fs12 mb16"
              >
                Email
              </label>
              <input
                type="email"
                placeholder=""
                id="email-field"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-email-text h48 plr12 bg4 brd2 br4 mb8"
              />
            </div>
            <div className="subject-input df fdc mb24">
              <label
                htmlFor="subject-field"
                className="form-subject ttu fw4 ls1 fs12 mb16"
              >
                Subject
              </label>
              <input
                type="text"
                placeholder=""
                id="subject-field"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-subject-text h48 plr12 bg4 brd2 br4 mb8"
              />
            </div>
            <div className="text-input df fdc mb32">
              <label
                htmlFor="message-field"
                className="form-text ttu fw4 ls1 fs12 mb16"
              >
                Your Message
              </label>
              <textarea
                name="text"
                id="message-field"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-subject-text pt12 plr12 bg4 brd2 br4 mb8 rn"
                rows="11"
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn fc3 fw5 fc-h2 fs15 transit2 df bg-bs-01 h48 aic jcc br4 df w100"
            >
              Send Message <FaArrowRight className="ml8" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
