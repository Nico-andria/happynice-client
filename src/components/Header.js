import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <div className="overlay"></div>
        <div className="container-fluid index-up">
          <div className="banner">
            <div className="banner-item row">
              <div className="col"></div>
              <div className="col-6">
                <h2 className="mb-3 reveal-1">
                  <em>Maison d'hôte</em>
                  <br />
                  Happy Nice
                </h2>
                <br />
                <p className="reveal-2">
                  {/* <p className=""> */}
                  Un cadre calme, intime et harmonieux dans un style moderne qui
                  se situe à quelques minutes de la ville. Une équipe dynamique
                  et solidaire à votre service. Happy'Nice Guest House est un
                  endroit de rêve pour profiter de l’air pur loin de la
                  pollution de la capitale durant votre séjour ou votre visite
                  de la Grande Ile. <br />
                  "SEEING YOU HAPPY, TREATING YOU NICE IS THE REAL HAPPINESS"
                </p>
                <p className="reveal-3">
                  {/* <p className=""> */}
                  <a href="/chambres" className="btn-normal btn-reserve">
                    En savoir plus ....
                  </a>
                </p>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
