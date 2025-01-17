import React, { useState } from "react";

const Clients = () => {
  const [activePricing, setactivePricing] = useState("javascript");
  return (
    <div className="clieknt-section wrapper ptb80 brd-b1" id="client-id">
      <h4 className="section-subheading lh20 fs14 mb20 fc3 fw5 ls2 ttu">
        popular clients
      </h4>
      <h2 className="section-heading fw7 fs60 mb32 fc2">Awesome Clients</h2>
      <div className="client-box df fww pt40">
        <div className="client-lists flx33">
          <ul className="client-lists fs18 fw5 bg-bs-01 br12 mb24 mr24">
            <li
              className={`client-item cp fc-nav ${
                activePricing === "javascript" ? "active" : ""
              } ptb32 tac  fc-h1`}
              onClick={() => setactivePricing("javascript")}
            >
              JavaScript
            </li>
            <li
              className={`client-item cp fc-nav ${
                activePricing === "productdesign" ? "active" : ""
              } ptb32 tac  fc-h1`}
              onClick={() => setactivePricing("productdesign")}
            >
              Product Design
            </li>
            <li
              className={`client-item cp fc-nav ${
                activePricing === "figmatohtml" ? "active" : ""
              } ptb32 tac  fc-h1`}
              onClick={() => setactivePricing("figmatohtml")}
            >
              Figma to HTML
            </li>
            <li
              className={`client-item cp fc-nav ${
                activePricing === "figmatoreact" ? "active" : ""
              } ptb32 tac  fc-h1`}
              onClick={() => setactivePricing("figmatoreact")}
            >
              Figma to React JS
            </li>
            <li
              className={`client-item cp fc-nav ${
                activePricing === "figmatonext" ? "active" : ""
              } ptb32 tac  fc-h1`}
              onClick={() => setactivePricing("figmatonext")}
            >
              Figma to Next JS
            </li>
            <li
              className={`client-item cp fc-nav ${
                activePricing === "htmltoreact" ? "active" : ""
              } ptb32 tac  fc-h1`}
              onClick={() => setactivePricing("htmltoreact")}
            >
              HTML to React JS
            </li>
            <li
              className={`client-item cp fc-nav ${
                activePricing === "htmltonext" ? "active" : ""
              } ptb32 tac  fc-h1`}
              onClick={() => setactivePricing("htmltonext")}
            >
              HTML to Next JS
            </li>
          </ul>
        </div>
        <div className="client-details flx1">
          {activePricing === "javascript" && (
            <ul className="client-detail-items df fww">
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
            </ul>
          )}
          {activePricing === "productdesign" && (
            <ul className="client-detail-items df fww">
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  yvdhff
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  hbhvhhv
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  jhjehff
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  56454564
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
            </ul>
          )}
          {activePricing === "figmatohtml" && (
            <ul className="client-detail-items df fww">
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  dsfdf
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  fsf snf
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  vbvehvhfvh
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
              <li className="client-detail-list flx33">
                <div className="mlr16 fs18 br12 tac p24 mb24 bg-bs-01">
                  loremnxsjd
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Clients;
