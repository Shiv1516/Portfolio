import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { TbActivityHeartbeat } from "react-icons/tb";

const Pricing = () => {
  const [activepricing, setactivepricing] = useState("static");

  return (
    <div
      className="pricing-section wrapper ptb80 brd-b1 df fww"
      id="pricing-id"
    >
      <div className="pricing-card-container flx40 tac">
        <div className="pricing-cards mr24 t-f ps">
          <h4 className="section-subheading fs14 mb20 fc3 t-f ls2 ttu">
            Pricing
          </h4>
          <h2 className="section-heading fw7 fs60 mb32 fc2">My Pricing</h2>
        </div>
      </div>
      <div className="pricing-card-details flx60">
        <div className="pricing-card-detail bg-bs-01 pb16 br12 ofh">
          <ul className="pricing-lists df fww fs18 fw5 bg-bs-01 mb24">
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
                  <p className="static-pricing-subheading fs18">Elementor</p>
                </div>
                <p className="static-price fc3 fs24 fw6 p16 bg-bs-01 br8">
                  $30.00
                </p>
              </div>
              <h4 className="static-pricing-nor-heading fw4 pt24 fs18 mb32 lh30">
                All the Lorem Ipsum generators on the Internet tend to <br />
                repeat predefined chunks as necessary
              </h4>

              <ul className="benifits-list df fww jcsb fs18 mb40 pb40 pt32">
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />1 Page with Elementor
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Multipage Elementor
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design Customization
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design Figma
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Responsive Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Maintaine Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Content Upload
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design Customization
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Updating Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design With XD
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />2 Plugins/Extensions
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />8 Plugins/Extensions
                </li>
              </ul>
              <Link
                to="/"
                className="submit-btn fc3 fw5 fc-h2 mt40 fs15 transit2 df bg-bs-01 h56 aic jcc br4"
              >
                Order Now <FaArrowRight className="ml8" />
              </Link>
              <div className="pricing-timer df jcc fs12 mt32">
                <IoMdTime className="mr8" /> 2 Days Delivery
                <TbActivityHeartbeat className="mlr8" /> Unlimited Revission
              </div>
            </div>
          )}
          {activepricing === "standard" && (
            <div className="standard-pricing-detail ptb48 plr48">
              <div className="static-detail-box df jcsb aic fww mb32">
                <div className="static-detail ">
                  <h3 className="static-pricing-heading fs28 fw7 mb16">
                    Design Make this Page
                  </h3>
                  <p className="static-pricing-subheading fs18">Elementor</p>
                </div>
                <p className="static-price fc3 fs24 fw6 p16 bg-bs-01 br8">
                  $50.00
                </p>
              </div>
              <h4 className="static-pricing-nor-heading fw4 pt24 fs18 mb32 lh30">
                All the Lorem Ipsum generators on the Internet tend to <br />
                repeat predefined chunks as necessary
              </h4>

              <ul className="benifits-list df fww jcsb fs18 mb40 pb40 pt32">
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />1 Page with Elementor
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Multipage Elementor
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design Customization
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design Figma
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Responsive Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Maintaine Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Content Upload
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design Customization
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Updating Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design With XD
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />2 Plugins/Extensions
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />8 Plugins/Extensions
                </li>
              </ul>
              <Link
                to="/"
                className="submit-btn fc3 fw5 fc-h2 mt40 fs15 transit2 df bg-bs-01 h56 aic jcc br4"
              >
                Order Now <FaArrowRight className="ml8" />
              </Link>
              <div className="pricing-timer df jcc fs12 mt32">
                <IoMdTime className="mr8" /> 2 Days Delivery
                <TbActivityHeartbeat className="mlr8" /> Unlimited Revission
              </div>
            </div>
          )}
          {activepricing === "premium" && (
            <div className="premium-pricing-detail ptb48 plr48">
              <div className="static-detail-box df jcsb aic fww mb32">
                <div className="static-detail ">
                  <h3 className="static-pricing-heading fs28 fw7 mb16">
                    Customize Your Single Page
                  </h3>
                  <p className="static-pricing-subheading fs18">Elementor</p>
                </div>
                <p className="static-price fc3 fs24 fw6 p16 bg-bs-01 br8">
                  $90.00
                </p>
              </div>
              <h4 className="static-pricing-nor-heading fw4 pt24 fs18 mb32 lh30">
                All the Lorem Ipsum generators on the Internet tend to <br />
                repeat predefined chunks as necessary
              </h4>

              <ul className="benifits-list df fww jcsb fs18 mb40 pb40 pt32">
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />1 Page with Elementor
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Multipage Elementor
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design Customization
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design Figma
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Responsive Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Maintaine Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Content Upload
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design Customization
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Updating Design
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />
                  Design With XD
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />2 Plugins/Extensions
                </li>
                <li className="benifits-list-item df mb20 flx40">
                  <FaCheck className="fc3 fs20 mr12" />8 Plugins/Extensions
                </li>
              </ul>
              <Link
                to="/"
                className="submit-btn fc3 fw5 fc-h2 mt40 fs15 transit2 df bg-bs-01 h56 aic jcc br4"
              >
                Order Now <FaArrowRight className="ml8" />
              </Link>
              <div className="pricing-timer df jcc fs12 mt32">
                <IoMdTime className="mr8" /> 2 Days Delivery
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
