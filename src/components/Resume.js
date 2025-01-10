import React, { useState } from "react";

const Resume = () => {
  const [activeresume, setactiveresume] = useState("education");
  return (
    <div className="resume-section wrapper ptb80 tac brd-b1" id="resume-id">
      <h4 className="section-subheading fs14 mb20 fc3 fw5 ls2 ttu">
        1.5+ Years of Experience
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">My Resume</h2>
      <div className="resume-card-detail pt40">
        <ul className="resume-lists df fww fs18 fw5 bg-bs-01 br12 mb24">
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
          <div className="education-details ptb40 tal df fww">
            <div className="education-cards-box flx50">
              <div className="education-inner-card mr24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2007-2010
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Education Quality
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-cards-box flx50">
              <div className="education-inner-card ml24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2007-2010
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Education Quality
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeresume === "professional-skills" && (
          <div className="professional-details ptb40 fs24 fw7">
            Professional sill Content will be added in future
          </div>
        )}
        {activeresume === "experience" && (
          <div className="education-details ptb40 tal df fww">
            <div className="education-cards-box flx50">
              <div className="education-inner-card mr24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2007-2010
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Education Quality
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-cards-box flx50">
              <div className="education-inner-card ml24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2007-2010
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Education Quality
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeresume === "interview" && (
          <div className="education-details ptb40 tal df fww">
            <div className="education-cards-box flx50">
              <div className="education-inner-card mr24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2007-2010
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Education Quality
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-cards-box flx50">
              <div className="education-inner-card ml24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2007-2010
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Education Quality
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading mb16 fs24 fw5">
                          Personal Portfolio April Fools
                        </h2>
                        <p className="eductaion-subheading fs14">
                          University of DVI (1997 - 2001)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        4.30/5
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Resume;
