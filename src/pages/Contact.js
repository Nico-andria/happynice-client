import React from "react";

function Contact() {
  return (
    <main>
      <div class="container-fluid">
        <div class="row contact-section">
          <div class="col-lg-5 p-5">
            <div class="row my-5" style={{ marginLeft: "20px" }}>
              <div class="col-12">
                <h1>Contact : </h1>
                <p style={{ lineHeight: "35px" }}>
                  <i class="lnr lnr-map-marker"></i>114 D Manarintsoa Lohanosy
                  Atsimondrano Ambohijanaka
                  <br />
                  <i class="lnr lnr-phone-handset"></i>+26138-79-406-15
                  (WhatsApp)
                  <br />
                  <i class="lnr lnr-phone-handset"></i>+26132-25-849-57
                  <br />
                  <i class="lnr lnr-envelope"></i>HappyNice.mdg@gmail.com <br />
                </p>
              </div>
              <div class="col-12"></div>
            </div>

            <div class="row" style={{ marginLeft: "20px" }}>
              <div class="col-12">
                <h1>Suivez nous sur : </h1>
                <a href="">
                  <i class="icon-facebook-with-circle"></i>Happy'Nice Guest
                  House
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-7 p-5 image">
            <img
              src="static/images/face.jpg"
              alt="image"
              class="img img-fluid"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
