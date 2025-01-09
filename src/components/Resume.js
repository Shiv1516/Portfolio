import React, { useState } from "react";

const Resume = () => {
  const [activeresume, setactiveresume] = useState("education");
  return (
    <div className="resume-section wrapper ptb80 tac brd-b1" id="resume-id">
      <h4 className="section-subheading fs14 mb20 fc3 fw5 ls2 ttu">
        1.5+ Years of Experience
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">My Resume</h2>
      <div className="resume-card-detail pt40 br12 ofh">
        <ul className="resume-lists df fww fs18 fw5 bg-bs-01 mb24">
          <li
            className={`resume-item cp flx25 fc-nav ${
              activeresume === "education" ? "active" : ""
            } ptb32 tac fc-h1`}
            onClick={() => setactiveresume("education")}
          >
            Education
          </li>
          <li
            className={`resume-item cp flx25 fc-nav ${
              activeresume === "professional-skills" ? "active" : ""
            } ptb32 tac fc-h1`}
            onClick={() => setactiveresume("professional-skills")}
          >
            professional Skills
          </li>
          <li
            className={`resume-item cp flx25 fc-nav ${
              activeresume === "experience" ? "active" : ""
            } ptb32 tac fc-h1`}
            onClick={() => setactiveresume("experience")}
          >
            Experience
          </li>
          <li
            className={`resume-item cp flx25 fc-nav ${
              activeresume === "interview" ? "active" : ""
            } ptb32 tac fc-h1`}
            onClick={() => setactiveresume("interview")}
          >
            Interview
          </li>
        </ul>
        {activeresume === "education" && (
          <div className="education-details ptb40 fs24 fw7">
            Eductaion Content will be added in future
          </div>
        )}
        {activeresume === "professional-skills" && (
          <div className="professional-details ptb40 fs24 fw7">
            Professional sill Content will be added in future
          </div>
        )}
        {activeresume === "experience" && (
          <div className="experience-details ptb40 fs24 fw7">
            Experience Content will be added in future
          </div>
        )}
        {activeresume === "interview" && (
          <div className="interview-details ptb40 fs24 fw7">
            Interview Content will be added in future
          </div>
        )}
      </div>
    </div>
  );
};
export default Resume;
