import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Room({ room, fromDate, toDate, index }) {
  /* Modal */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="room-section" id="chambre-1" key={room._id}>
      {index === 1 ? (
        <div className="container">
          <div className="rooms-page-item">
            <div className="row">
              <div className="col-lg-6 px-5">
                <div className="room-text">
                  <div className="room-title reveal-2">
                    <h2>{room.name}</h2>
                    <span className="room-barre"></span>
                  </div>
                  <div className="room-desc reveal-2">
                    <p>{room.description}</p>
                  </div>
                  <div className="room-content reveal-3">
                    <div className="room-features">
                      <i className="flaticon-026-bed"></i>
                      <span>1 lit pour {room.maxcount} personnes</span>
                    </div>
                    <div className="room-features">
                      <i className="flaticon-019-television"></i>
                      <span>TV avec Canal +</span>
                    </div>
                    <div className="room-features">
                      <i className="flaticon-029-wifi"></i>
                      <span>Connexion wifi</span>
                    </div>
                    <div className="room-features">
                      <i className="flaticon-030-bathtub"></i>
                      <span>Salle de bain privative</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="album reveal-1">
                  <div className="album-item row">
                    <div className="col-8">
                      <img
                        src={`static${room.imageurls[0]}`}
                        alt="image-chambre2"
                        className="img img-fluid"
                      />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col-12 second-image">
                          <img
                            src={`static${room.imageurls[1]}`}
                            alt="image-chambre2"
                            className="img img-fluid"
                          />
                        </div>
                        <div className="col-12">
                          <img
                            src={`static${room.imageurls[2]}`}
                            alt="image-chambre2"
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {fromDate && toDate && (
              <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
                <button className="fancy">
                  <span className="top-key"></span>
                  <span className="text">Réserver</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </button>
              </Link>
            )}

            <button className="fancy" onClick={handleShow}>
              <span className="top-key"></span>
              <span className="text">Aperçu</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>

            <Link to={`/details/${room._id}`}>
              <button className="fancy">
                <span className="top-key"></span>
                <span className="text">Plus de détails</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="rooms-page-item">
            <div className="row inverse">
              <div className="col-lg-6">
                <div className="album reveal-1">
                  <div className="album-item row">
                    <div className="col-8">
                      <img
                        src={`static${room.imageurls[0]}`}
                        alt="image-chambre3"
                        className="img img-fluid"
                      />
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col-12 second-image">
                          <img
                            src={`static${room.imageurls[1]}`}
                            alt="image-chambre3"
                            className="img img-fluid"
                          />
                        </div>
                        <div className="col-12">
                          <img
                            src={`static${room.imageurls[2]}`}
                            alt="image-chambre3"
                            className="img img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 px-5">
                <div className="room-text">
                  <div className="room-title reveal-2">
                    <h2>{room.name}</h2>
                    <span className="room-barre"></span>
                  </div>
                  <div className="room-desc reveal-2">
                    <p>{room.description}</p>
                  </div>
                  <div className="room-content reveal-3">
                    <div className="room-features">
                      <i className="flaticon-026-bed"></i>
                      <span>1 lit pour {room.maxcount} personnes</span>
                    </div>
                    <div className="room-features">
                      <i className="flaticon-019-television"></i>
                      <span>TV avec Canal +</span>
                    </div>
                    <div className="room-features">
                      <i className="flaticon-029-wifi"></i>
                      <span>Connexion wifi</span>
                    </div>
                    <div className="room-features">
                      <i className="flaticon-030-bathtub"></i>
                      <span>Salle de bain privative</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {fromDate && toDate && (
              <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
                <button className="fancy">
                  <span className="top-key"></span>
                  <span className="text">Réserver</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </button>
              </Link>
            )}

            <button className="fancy" onClick={handleShow}>
              <span className="top-key"></span>
              <span className="text">Aperçu</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </button>

            <Link to={`/details/${room._id}`}>
              <button className="fancy">
                <span className="top-key"></span>
                <span className="text">Plus de détails</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </Link>
          </div>
        </div>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        dialogClassName="modal-100w">
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel="" nextLabel="">
            {room.imageurls.map((url, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 bigimg"
                    src={`static${url}`}
                    height={"400px"}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p style={{ padding: "10px", justifyContent: "justify" }}>
            {room.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          {fromDate && toDate && (
            <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
              <Button className="btn btn-primary m-2">
                Réserver maintenant
              </Button>
            </Link>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Room;
