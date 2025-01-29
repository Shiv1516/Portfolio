import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Indo-America</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-01.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Gurkirpa Services</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-02.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Freeze Crowd</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-03.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Ebslon-Info</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-04.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Pink-Flamingo</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-05.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Dolphin-detective</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <h2 className="fc3 fw6 fs20">Rootcom Academy</h2>
                  </div>
                  <h4 className="fs14 fw5 ">Indo-America</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-06.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">T.A.C.</h4>
                </Link>
              </li>
            </ul>
          )}
          {activePricing === "productdesign" && (
            <ul className="client-detail-items df fww">
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-02.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Freeze Crowd</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-03.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Ebslon-Info</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-04.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Pink-Flamingo</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-05.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Dolphin-detective</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <h2 className="fc3 fw6 fs20">Rootcom Academy</h2>
                  </div>
                  <h4 className="fs14 fw5 ">Indo-America</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-06.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">T.A.C.</h4>
                </Link>
              </li>
            </ul>
          )}
          {activePricing === "figmatohtml" && (
            <ul className="client-detail-items df fww">
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-01.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Gurkirpa Services</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-08.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Mishyaan</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-09.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Mund Pay</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-05.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Dolphine Detective</h4>
                </Link>
              </li>
            </ul>
          )}
          {activePricing === "figmatoreact" && (
            <ul className="client-detail-items df fww">
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-02.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Freeze Crowd</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-03.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Ebslon Infotech</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-07.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Glow-n-Shine</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-10.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Jeevan Raksha</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-04.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Pink Flamingo</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-08.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Mishyaan</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-06.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">T.A.C.</h4>
                </Link>
              </li>
            </ul>
          )}
          {activePricing === "figmatonext" && (
            <ul className="client-detail-items df fww">
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-09.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Mund-Pay</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-10.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Jeevan Raksha</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-04.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Pink Flamingo</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-01.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Gurkirpa Services</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-05.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Dolphine Detective</h4>
                </Link>
              </li>
            </ul>
          )}
          {activePricing === "htmltoreact" && (
            <ul className="client-detail-items df fww">
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-03.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Ebslon-Info</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-05.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Dolphin-Detective</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-02.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Freeze Crowd</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-07.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Glow-n-Shine</h4>
                </Link>
              </li>
            </ul>
          )}
          {activePricing === "htmltonext" && (
            <ul className="client-detail-items df fww">
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-06.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">T.A.C.</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-07.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Glow-n-Shine</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-08.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Mishyaan</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-09.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Mund-pay</h4>
                </Link>
              </li>
              <li className="client-detail-list flx33">
                <Link
                  to="https://github.com/Shiv1516"
                  className="mlr16 fs18 br12 tac df fdc p24 mb24 bg-bs-01"
                >
                  <div className="card-outer-box pb12 mb8 brd-b2">
                    <img
                      src="/images/logos/logo-10.png"
                      alt="logo-design"
                      className="logo-icon-card transit2 df plr12"
                    />
                  </div>
                  <h4 className="fs14 fw5 ">Jeevan Raksha</h4>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Clients;
