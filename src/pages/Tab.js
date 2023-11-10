import React, { useState } from "react";

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState("detente");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="presentation-section bg-image my-5">
      <div className="overlay-2"></div>
      <div className="index-up container-fluid">
        <div className="row centered">
          <div className="col-lg-12 section-titre reveal-1">
            <h3 className="mb-5">Détente et restauration</h3>
          </div>
          <div className="col"></div>
          <div className="col-lg-6 section-link my-2 reveal-2">
            <a
              href="#"
              className={
                selectedTab === "detente"
                  ? "selected py-3 px-3 mx-1"
                  : "py-3 px-3 mx-1"
              }
              onClick={() => handleTabClick("detente")}>
              Espace détente
            </a>
            <a
              href="#"
              className={
                selectedTab === "restauration"
                  ? "selected py-3 px-3 mx-1"
                  : "py-3 px-3 mx-1"
              }
              onClick={() => handleTabClick("restauration")}>
              Espace restauration
            </a>
          </div>
          <div className="col"></div>
          <div className="reveal-3">
            {selectedTab === "detente" ? (
              <div
                className="section-content content-detente shown"
                id="section-detente">
                <div className="py-5">
                  <p>
                    Happy'Nice met à votre disposition un coin confortable
                    soigneusement décoré <br /> dans lequel vous pourrez passer
                    des <br />
                    moments paisibles pour vous reposer et vous détendre, seuls
                    ou avec vos prochess
                  </p>
                </div>
                <div className="row">
                  <div className="col">
                    <img
                      src="static/images/detente-1.jpg"
                      alt="Image"
                      className="img img-fluid py-3"
                      style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    />
                  </div>
                  <div className="col">
                    <img
                      src="static/images/detente-2.jpg"
                      alt="Image"
                      className="img img-fluid py-3"
                      style={{
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="section-content section-restauration"
                id="section-restauration">
                <div className="py-5">
                  <p>
                    Profitez des délices proposés par notre carte afin de vous
                    restaurer, ou commandez un plat <br /> de votre choix afin
                    que notre chef les réalise pour vous
                  </p>
                </div>
                <div className="row" style={{ padding: "0px 250px" }}>
                  <div className="col">
                    <div className="row">
                      <div className="col-12">
                        <img
                          src="static/images/plat-2.jpg"
                          alt="Image"
                          className="img img-fluid"
                          style={{ paddingBottom: "20px" }}
                        />
                      </div>
                      <div className="col-12">
                        <img
                          src="static/images/plat-3.jpg"
                          alt="Image"
                          className="img img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-12">
                        <img
                          src="static/images/plat-4.jpg"
                          alt="Image"
                          className="img img-fluid"
                          style={{ paddingBottom: "35px" }}
                        />
                      </div>
                      <div className="col-12">
                        <img
                          src="static/images/plat-1.jpg"
                          alt="Image"
                          className="img img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
