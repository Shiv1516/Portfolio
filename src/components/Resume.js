import React, { useState } from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  const [activeresume, setactiveresume] = useState("education");
  return (
    <div className="resume-section wrapper ptb80 tac brd-b1" id="resume-id">
      <h4 className="section-subheading lh20 fs14 mb20 fc3 fw5 ls2 ttu">
        1.5+ Years of Experience
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">My Resume</h2>
      <div className="resume-card-detail pt40">
        <ul className="resume-lists df fs18 fw5 bg-bs-01 br12 mb24">
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
            Professional Skills
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
                  2017-2023
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Education Quality
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Bachelor of Technology
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          A. K. T. U. (2019 - 2023)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        7.5/10
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Passionate Computer Science student skilled in coding,
                      problem-solving, and software development. Eager to
                      innovate and build impactful solutions.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Higher Secondary Education
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Stat Board (2017 - 2019)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        7.5/10
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Passionate about science and technology, pursuing 12th in
                      PCM. Strong analytical skills, problem-solving mindset,
                      and eager to explore engineering innovations.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          High School Education
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Stat Board (2015 - 2017)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        8.2/10
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Completed 10th with a strong foundation in mathematics and
                      science. Enthusiastic learner, curious mindset, and eager
                      to develop technical skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-cards-box flx50">
              <div className="education-inner-card ml24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2023-Present
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Job Experience
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Software Developer
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          AAJUX Design Studio (05/2023 - 12/2024 )
                        </p>
                      </div>
                      <Link
                        to="https://github.com/Shiv1516"
                        className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1"
                      >
                        Work
                      </Link>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Experienced in frontend development with React, Next.js,
                      HTML, CSS, and JavaScript. Passionate about UI design and
                      creating innovative solutions.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Junior Developer
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Markecsy (03/23 - 04/23)
                        </p>
                      </div>
                      <Link
                        to="https://github.com/Shiv1516"
                        className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1"
                      >
                        Work
                      </Link>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Junior Developer skilled in HTML, CSS, JavaScript, and
                      cloud technologies. Passionate about frontend development,
                      problem-solving, and scalable solutions.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Software Developer Intern
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Fynd Academy (12/2022 - 02/23)
                        </p>
                      </div>
                      <Link
                        to="https://github.com/Shiv1516"
                        className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1"
                      >
                        Work
                      </Link>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Software Developer Intern learning MERN stack concepts.
                      Strengthening fundamentals in MongoDB, Express.js, React,
                      and Node.js for full-stack development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeresume === "professional-skills" && (
          <div className="education-details ptb40 tal df fww">
            <div className="education-cards-box flx50">
              <div className="education-inner-card mr24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  Features
                </p>
                <h3 className="education-detail-heading fs36 fw7 mb40">
                  Design Skill
                </h3>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">
                    Web Designing
                  </h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w100 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">100%</span>
                </div>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">
                    App Desiging
                  </h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w85 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">85%</span>
                </div>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">
                    Landing Page
                  </h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w100 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">100%</span>
                </div>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">
                    Interface
                  </h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w85 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">85%</span>
                </div>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">
                    Web flow Desiging
                  </h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w85 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">100%</span>
                </div>
              </div>
            </div>
            <div className="education-cards-box flx50">
              <div className="education-inner-card ml24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  Features
                </p>
                <h3 className="education-detail-heading fs36 fw7 mb40">
                  Development Skill
                </h3>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">HTML</h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w100 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">100%</span>
                </div>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">CSS</h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w100 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">100%</span>
                </div>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">
                    Javascript
                  </h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w85 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">85%</span>
                </div>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">
                    React JS
                  </h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w85 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">85%</span>
                </div>
                <div className="skills-name-list mb40 pr">
                  <h4 className="skills-name mb16 fs14 ttu ls1 fw5">Next JS</h4>
                  <div className="skill-percent h14 aic df bg4 br12 ofh">
                    <span className="bg-bs-02 w85 h9 br12 mlr3"></span>
                  </div>
                  <span className="skill-percentage pa fs14 r0">85%</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeresume === "experience" && (
          <div className="education-details ptb40 tal df fww">
            <div className="education-cards-box flx50">
              <div className="education-inner-card mr24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2017-2023
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Education Quality
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Bachelor of Technology
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          A. K. T. U. (2019 - 2023)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        7.5/10
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Passionate Computer Science student skilled in coding,
                      problem-solving, and software development. Eager to
                      innovate and build impactful solutions.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Higher Secondary Education
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Stat Board (2017 - 2019)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        7.5/10
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Passionate about science and technology, pursuing 12th in
                      PCM. Strong analytical skills, problem-solving mindset,
                      and eager to explore engineering innovations.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          High School Education
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Stat Board (2015 - 2017)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        8.2/10
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Completed 10th with a strong foundation in mathematics and
                      science. Enthusiastic learner, curious mindset, and eager
                      to develop technical skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-cards-box flx50">
              <div className="education-inner-card ml24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2023-Present
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Job Experience
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Software Developer
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          AAJUX Design Studio (05/2023 - 12/2024 )
                        </p>
                      </div>
                      <Link
                        to="https://github.com/Shiv1516"
                        className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1"
                      >
                        Work
                      </Link>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Experienced in frontend development with React, Next.js,
                      HTML, CSS, and JavaScript. Passionate about UI design and
                      creating innovative solutions.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Junior Developer
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Markecsy (03/23 - 04/23)
                        </p>
                      </div>
                      <Link
                        to="https://github.com/Shiv1516"
                        className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1"
                      >
                        Work
                      </Link>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Junior Developer skilled in HTML, CSS, JavaScript, and
                      cloud technologies. Passionate about frontend development,
                      problem-solving, and scalable solutions.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Software Developer Intern
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Fynd Academy (12/2022 - 02/23)
                        </p>
                      </div>
                      <Link
                        to="https://github.com/Shiv1516"
                        className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1"
                      >
                        Work
                      </Link>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Software Developer Intern learning MERN stack concepts.
                      Strengthening fundamentals in MongoDB, Express.js, React,
                      and Node.js for full-stack development.
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
                  2017-2023
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Education Quality
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Bachelor of Technology
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          A. K. T. U. (2019 - 2023)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        7.5/10
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Passionate Computer Science student skilled in coding,
                      problem-solving, and software development. Eager to
                      innovate and build impactful solutions.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Higher Secondary Education
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Stat Board (2017 - 2019)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        7.5/10
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Passionate about science and technology, pursuing 12th in
                      PCM. Strong analytical skills, problem-solving mindset,
                      and eager to explore engineering innovations.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          High School Education
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Stat Board (2015 - 2017)
                        </p>
                      </div>
                      <p className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1">
                        8.2/10
                      </p>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Completed 10th with a strong foundation in mathematics and
                      science. Enthusiastic learner, curious mindset, and eager
                      to develop technical skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education-cards-box flx50">
              <div className="education-inner-card ml24">
                <p className="education-detail-year fc3 fw5 ls1 fs14 mb16">
                  2023-Present
                </p>
                <h3 className="education-detail-heading fs36 fw6 mb40">
                  Job Experience
                </h3>
                <div className="education-cards pl40 brd-b3">
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Software Developer
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          AAJUX Design Studio (05/2023 - 12/2024 )
                        </p>
                      </div>
                      <Link
                        to="https://github.com/Shiv1516"
                        className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1"
                      >
                        Work
                      </Link>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Experienced in frontend development with React, Next.js,
                      HTML, CSS, and JavaScript. Passionate about UI design and
                      creating innovative solutions.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Junior Developer
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Markecsy (03/23 - 04/23)
                        </p>
                      </div>
                      <Link
                        to="https://github.com/Shiv1516"
                        className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1"
                      >
                        Work
                      </Link>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Junior Developer skilled in HTML, CSS, JavaScript, and
                      cloud technologies. Passionate about frontend development,
                      problem-solving, and scalable solutions.
                    </p>
                  </div>
                  <div className="education-card bef aft pr zi1 fc1 plr40 ptb48 mt48 bg-bs-01 br12">
                    <div className="education-top-box df jcsb aic pb48 brd-b2">
                      <div className="education-detail">
                        <h2 className="education-heading lh24 mb16 fs24 fw5">
                          Software Developer Intern
                        </h2>
                        <p className="eductaion-subheading lh18 fs14">
                          Fynd Academy (12/2022 - 02/23)
                        </p>
                      </div>
                      <Link
                        to="https://github.com/Shiv1516"
                        className="education-persent fs14 bg3 br8 p12 fc3 fw5 bs1"
                      >
                        Work
                      </Link>
                    </div>
                    <p className="education-box-details lh30 fw4 fs18 pt32">
                      Software Developer Intern learning MERN stack concepts.
                      Strengthening fundamentals in MongoDB, Express.js, React,
                      and Node.js for full-stack development.
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
