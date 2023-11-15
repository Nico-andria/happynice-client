import React from "react";

function Contact() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row contact-section">
          <div className="col-lg-5 p-5">
            <div className="row my-5" style={{ marginLeft: "20px" }}>
              <div className="col-12">
                <h1>Contact : </h1>
                <p style={{ lineHeight: "35px" }}>
                  <i className="lnr lnr-map-marker"></i>114 D Manarintsoa
                  Lohanosy Atsimondrano Ambohijanaka
                  <br />
                  <i className="lnr lnr-phone-handset"></i>+26138-79-406-15
                  (WhatsApp)
                  <br />
                  <i className="lnr lnr-phone-handset"></i>+26132-25-849-57
                  <br />
                  <i className="lnr lnr-envelope"></i>HappyNice.mdg@gmail.com{" "}
                  <br />
                </p>
              </div>
              <div className="col-12"></div>
            </div>

            <div className="row" style={{ marginLeft: "20px" }}>
              <div className="col-12">
                <h1>Suivez nous sur : </h1>
                <a href="">
                  <i className="icon-facebook-with-circle"></i>Happy'Nice Guest
                  House
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 p-5 image">
            <img
              src="static/images/face.jpg"
              alt="image"
              className="img img-fluid"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
