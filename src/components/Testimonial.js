import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="testimonial-section wrapper ptb80 tac brd-b1">
      <h4 className="section-subheading fs14 mb20 fc3 fw5 ls2 ttu">
        What Clients Say
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">Testimonial</h2>
      <div className="testimonial-card-box ptb32 df fww">
        <div className="testimonial-person-detail flx33 zi3">
          <div className="person-details mr24 br12 p32 bg-bs-01 tal ">
            <div className="person-card-img mb40 ofh df br12">
              <img
                src="/images/testimonial.jpg"
                alt="portfolio"
                className="port-img w100 transit2"
              />
            </div>
            <h4 className="person-card-dep fc3 fw5 ls1 fs12 ttu mb16">
              Bound - Trolola
            </h4>
            <h2 className="person-card-heading fs24 lh30 aic fw7 mb16 fw5">
              Jone Duone Joe
            </h2>
            <h3 className="person-card-dep fs14 mb16">Operating Officer</h3>
          </div>
        </div>
        <div className="testimonial-des flx1 tal zi2">
          <img src="/images/quote.png" alt="quote" className="quote-icon" />
          <div className="testimonial-des-card ml12 bef pr bg-bs-01 br12 ptb48 plr48">
            <div className="test-des-contend df jcsb fww aic brd-b1 pb40">
              <div className="test-des-card">
                <h3 className="test-des-heading fs24 fw6 mb20">
                  Web App Development
                </h3>
                <p className="test-des-subheading fw5">
                  Upwork - Mar 4, 2016 - Aug 30, 2021
                </p>
              </div>
              <div className="stars df bg-bs-01 p16 br12">
                <FaStar className="mlr2 fc5" />
                <FaStar className="mlr2 fc5" />
                <FaStar className="mlr2 fc5" />
                <FaStar className="mlr2 fc5" />
                <FaStar className="mlr2 fc5" />
              </div>
            </div>
            <p className="test-description mtb24 lh30 fw4 fs18">
              Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor
              aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in,
              lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam
              sodales phasellus smauris .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
