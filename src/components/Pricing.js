import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { TbActivityHeartbeat } from "react-icons/tb";

const Pricing = () => {
  const [activepricing, setactivepricing] = useState("static");

  const handlemail = () => {
    window.open("mailto:shivnilaysrivastav@gmail.com", "_blank");
  };

  return (
    <div
      className="pricing-section wrapper ptb80 brd-b1 df fww"
      id="pricing-id"
    >
      <div className="pricing-card-container flx40 tac">
        <div className="pricing-cards mr24 t-f ps">
          <h4 className="section-subheading lh20 fs14 mb20 fc3 t-f ls2 ttu">
            Pricing
          </h4>
          <h2 className="section-heading fw7 fs60 mb32 fc2">My Pricing</h2>
        </div>
      </div>
      <div className="pricing-card-details flx60">
        <div className="pricing-card-detail bg-bs-01 pb16 br12 ofh">
          <ul className="pricing-lists df fs18 fw5 bg-bs-01 mb24">
            <li
              className={`pricing-item cp flx33 fc-nav ${
                activepricing === "static" ? "active" : ""
              } ptb32 tac fc-h1`}
              onClick={() => setactivepricing("static")}
            >
              Static
            </li>
            <li
              className={`pricing-item cp flx33 fc-nav ${
                activepricing === "standard" ? "active" : ""
              } ptb32 tac fc-h1`}
              onClick={() => setactivepricing("standard")}
            >
              Standard
            </li>
            <li
              className={`pricing-item cp flx33 fc-nav ${
                activepricing === "premium" ? "active" : ""
              } ptb32 tac fc-h1`}
              onClick={() => setactivepricing("premium")}
            >
              Premium
            </li>
          </ul>
          {activepricing === "static" && (
            <div className="static-pricing-detail ptb48 plr48">
              <div className="static-detail-box df jcsb aic fww mb32">
                <div className="static-detail ">
                  <h3 className="static-pricing-heading fs28 fw7 mb16">
                    Make Your Single Page
                  </h3>
                  <p className="static-pricing-subheading fs18">Landing Page</p>
                </div>
                <p className="static-price fc3 fs24 fw6 p16 bg-bs-01 br8">
                  $30.00
                </p>
              </div>
              <h4 className="static-pricing-nor-heading fw4 pt24 fs18 mb32 lh30">
                Transform your idea into a seamless, responsive, and engaging
                single-page website with modern design.
              </h4>

              <ul className="benifits-list df fww jcsb fs18 mb40 pb40 pt32">
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Targeted Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Clear Call-to-Action
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Fast Loading
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Responsive Layout
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Lead Generation
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Engaging Content
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  SEO Optimized
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Simple Navigation
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Mobile-Friendly
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Conversion Focused
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Brand Consistency
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  High-Impact Visuals
                </li>
              </ul>
              <Link
                onClick={handlemail}
                className="submit-btn fc3 fw5 fc-h2 mt40 fs15 transit2 df bg-bs-01 h56 aic jcc br4"
              >
                Order Now <FaArrowRight className="ml8" />
              </Link>
              <div className="pricing-timer df jcc fs12 mt32">
                <IoMdTime className="mr8" /> 4 Days Delivery
                <TbActivityHeartbeat className="mlr8" /> Unlimited Revission
              </div>
            </div>
          )}
          {activepricing === "standard" && (
            <div className="standard-pricing-detail ptb48 plr48">
              <div className="static-detail-box df jcsb aic fww mb32">
                <div className="static-detail ">
                  <h3 className="static-pricing-heading fs28 fw7 mb16">
                    Dynamic Web Application
                  </h3>
                  <p className="static-pricing-subheading fs18">Web Site</p>
                </div>
                <p className="static-price fc3 fs24 fw6 p16 bg-bs-01 br8">
                  $50.00
                </p>
              </div>
              <h4 className="static-pricing-nor-heading fw4 pt24 fs18 mb32 lh30">
                Developing dynamic web applications that offer interactive,
                real-time experiences with seamless functionality and design.
              </h4>

              <ul className="benifits-list df fww jcsb fs18 mb40 pb40 pt32">
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Real-Time Updates
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Interactive Features
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  User-Centric Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Scalable Solutions
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  API Integration
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Mobile Compatibility
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Custom Functionality
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Efficient Performance
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Cross-Platform Support
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Seamless Navigation
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Responsive Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Secure Data Handling
                </li>
              </ul>
              <Link
                onClick={handlemail}
                className="submit-btn fc3 fw5 fc-h2 mt40 fs15 transit2 df bg-bs-01 h56 aic jcc br4"
              >
                Order Now <FaArrowRight className="ml8" />
              </Link>
              <div className="pricing-timer df jcc fs12 mt32">
                <IoMdTime className="mr8" /> 1 Week Delivery
                <TbActivityHeartbeat className="mlr8" /> Unlimited Revission
              </div>
            </div>
          )}
          {activepricing === "premium" && (
            <div className="premium-pricing-detail ptb48 plr48">
              <div className="static-detail-box df jcsb aic fww mb32">
                <div className="static-detail ">
                  <h3 className="static-pricing-heading fs28 fw7 mb16">
                    Complete Dynamic Website
                  </h3>
                  <p className="static-pricing-subheading fs18">
                    Web Application
                  </p>
                </div>
                <p className="static-price fc3 fs24 fw6 p16 bg-bs-01 br8">
                  $90.00
                </p>
              </div>
              <h4 className="static-pricing-nor-heading fw4 pt24 fs18 mb32 lh30">
                Designing and developing complete websites with responsive
                layouts, functionality, and user-friendly navigation for all
                devices.
              </h4>

              <ul className="benifits-list df fww jcsb fs18 mb40 pb40 pt32">
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Custom Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Responsive Layouts
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  User Navigation
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  SEO Optimized
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Fast Loading
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Mobile-Friendly
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Cross-Browser
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Interactive Features
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Payment Integration
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Content Management
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Scalable Architecture
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Ongoing Support
                </li>
              </ul>
              <Link
                onClick={handlemail}
                className="submit-btn fc3 fw5 fc-h2 mt40 fs15 transit2 df bg-bs-01 h56 aic jcc br4"
              >
                Order Now <FaArrowRight className="ml8" />
              </Link>
              <div className="pricing-timer df jcc fs12 mt32">
                <IoMdTime className="mr8" /> 2 Week Delivery
                <TbActivityHeartbeat className="mlr8" /> Unlimited Revission
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Pricing;
