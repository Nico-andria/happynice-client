import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container-fluid">
          <div className="row">
            <div className="footer-item col-md-4">
              <h3 className="mb-3">
                Happy <em>Nice</em>
              </h3>
              <p>
                <small>
                  <i className="lnr lnr-map-marker"></i>114 D Manarintsoa
                  Lohanosy Atsimondrano Ambohijanaka
                </small>
              </p>{" "}
              <br />
              <ul className="social-icons">
                <li>
                  <a href="https://web.facebook.com/profile.php?id=100088364707615">
                    <i className="icon-facebook-with-circle"></i>
                  </a>
                  <a href="#">
                    <i className="icon-instagram-with-circle"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-item col-md-4">
              <h4 className="mb-3">Nous contacter</h4>
              <p /* style={{ lineHeight: 35 + "px" }} */>
                <small>
                  <BsWhatsapp className="lnr " />
                  <a href="https://wa.me/+261387940615" target="_blank">
                    +261 38 79 406 15 (WhatsApp)
                  </a>

                  <br />
                  <i className="lnr lnr-phone-handset"></i>
                  <a href="tel:+261322584957">+261 32 25 849 57</a>
                  <br />
                  <i className="lnr lnr-envelope"></i>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGwHpShPkWTnvhpJDCdDTjSFVrR?compose=CllgCJTLpcXTPtHQdjkCgcZxwrJSbcmDhTPVprdCbZTSHTbvswJWjvPRTVRfhCxldjbtvszPFXB"
                    target="_blank">
                    HappyNice.mdg@gmail.com
                  </a>
                  <br />
                  <a href="https://web.facebook.com/profile.php?id=100088364707615">
                    <i className="lnr lnr-inbox"></i>Happy'Nice Guest House
                  </a>
                </small>
              </p>
            </div>
            <div className="footer-item col-md-4">
              <div className="copyright">
                <p>
                  <small>
                    &copy; Copyright 2023. <br /> All Rights Reserved. <br />
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
