import React from "react";
import Header from "../components/Header";

function Homepage() {
  return (
    <>
      <Header />
      <main>
        <div
          className="container-fluid"
          style={{ paddingLeft: "0px", paddingRight: "0px" }}
          //style={{ paddingLeft: "0px" }}
          id="chambres">
          <div className="presentation-section row">
            <div className="texte col-lg-6">
              <div className="mb-3 reveal-2 barre reveal-visible barre-reveal"></div>
              {/* <div className="mb-3 barre"></div> */}
              <h3 className="mb-5 reveal-2">Chambres toute équipées</h3>
              {/* <h3 className="mb-5">Chambres toute équipées</h3> */}
              <p className="mb-5 reveal-3">
                {/* <p className="mb-5"> */}
                Nous disposons de plusieurs chambres tout confort avec ouverture
                donnant sur le balcon ou sur la cour. Chaque chambre est équipée
                d’une grande salle de bain privative au design luxueux et
                moderne. Muni chacune d’une télévision 'écran plat' ainsi que
                d’une connexion wifi qui vous garantit un séjour des plus
                plaisant.
              </p>
              <a href="/chambres">
                <p className="reveal-3">
                  {/* <p className=""> */}
                  <button className="btn">Voir nos chambres</button>
                </p>
              </a>
            </div>
            <div className="illustration col-lg-6 my-5 reveal-3">
              {/* <div className="illustration col-lg-6 my-5"> */}
              <div className="p-3" style={{ width: "2500px" }}>
                <img
                  src="static/images/montrer-chambre.jpg"
                  alt="ImageChambre"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="my-5" style={{ width: "2500px" }}>
                <img
                  src="static/images/montrer-douche.jpg"
                  alt="ImageDouche"
                  style={{ width: "89%" }}
                />
              </div>
            </div>
          </div>

          <div className="presentation-section row my-5 p-4">
            <div className="illustration col-lg-6 d-none d-lg-block reveal-1">
              {/* <div className="illustration col-lg-6 d-none d-lg-block"> */}
              <img
                src="static/images/cuisine-1.jpg"
                alt="Image"
                className=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="texte col-lg-6">
              <div className="mb-3 reveal-2 barre reveal-visible barre-reveal"></div>
              <h3 className="mb-5 reveal-2">Une grande cuisine</h3>
              <p className="mb-5 reveal-3">
                {/* <div className="mb-3 barre"></div>
              <h3 className="mb-5">Une grande cuisine</h3>
              <p className="mb-5"> */}
                entièrement équipée dans laquelle notre chef cuisinier pourra
                vous préparer en toute aise les plats pour la journée. D’autre
                part, la salle dispose déjà d’une table pour prendre votre petit
                déjeuner, déjeuner et diner.
              </p>
            </div>
            <div className="illustration col-12 reveal-1 d-none d-md-block d-lg-none d-xl-none">
              <img
                src="static/images/cuisine-1.jpg"
                alt="Image"
                className=""
                style={{ width: "100%" }}
              />
            </div>
          </div>

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
                    href=""
                    className="selected py-3 px-3 mx-1"
                    id="link-detente">
                    Espace détente
                  </a>
                  <a href="" className=" py-3 px-3 mx-1" id="link-restauration">
                    Espace restauration
                  </a>
                </div>
                <div className="col"></div>
                <div className="reveal-3">
                  {/* <div className=""> */}
                  <div
                    className="section-content content-detente shown"
                    id="section-detente">
                    <div className="py-5">
                      <p>
                        Happy'Nice met à votre disposition un coin confortable
                        soigneusement décoré <br /> dans lequel vous pourrez
                        passer des <br />
                        moments paisibles pour vous reposer et vous détendre,
                        seuls ou avec vos prochess
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
                  <div
                    className="section-content section-restauration"
                    id="section-restauration">
                    <div className="py-5">
                      <p>
                        Profitez des délices proposés par notre carte afin de
                        vous restaurer, ou commandez un plat <br /> de votre
                        choix afin que notre chef les réalise pour vous
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
                </div>
              </div>
            </div>
          </div>

          <div className="presentation-section row my-5">
            <div className="texte col-sm-6">
              {/* <div className="mb-3 barre"></div>
              <h3 className="mb-5">Grande salle</h3>
              <p className="mb-5"> */}
              <div className="mb-3 reveal-2 barre reveal-visible barre-reveal"></div>
              <h3 className="mb-5 reveal-2">Grande salle</h3>
              <p className="mb-5 reveal-3">
                Une grande salle meublée avec un design moderne est mise à votre
                disposition pour accueillir vos réunions entre collègues ou
                familles ou encore pour fêter vos retrouvailles dans un décor
                convivial et plaisant.
              </p>
              <p className="reveal-3"></p>
              {/* <p className=""></p> */}
            </div>
            <div className="illustration col-sm-6">
              <img
                src="static/images/Grande-salle.jpg"
                alt="Image"
                className=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div
            className="presentation-section row my-5"
            style={{ textAlign: "center" }}>
            <div className="texte col-sm-12">
              <h3
                className="mb-5 reveal-2"
                /* className="mb-5" */
                style={{
                  display: "inline",
                  borderTop: "3.5px solid black",
                  paddingTop: "15px",
                }}>
                Voiture à la demande
              </h3>
              <p className="mb-5 reveal-3 p-5">
                {/* <p className="mb-5 p-5"> */}
                En plus des services mentionnés précédemment, Happy'Nice met
                également un service de transport à votre disposition pour vous
                déplacer facilement et de manière sécurisée lors de vos voyages.
                Les tarifs dépendront de votre trajet..
              </p>
              <p className="reveal-3"></p>
              {/* <p className=""></p> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Homepage;
