import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { DatePicker, message } from "antd";
import "antd/dist/antd";
import "./details.css";

import moment from "moment";
import { bookingService } from "../../_services/booking.service";
import Loader from "../../_helpers/Loader";
import Error from "../../_helpers/Error";
import axios from "axios";
import { useSelector } from "react-redux";

import Swal from "sweetalert2";

function Detailsscreen() {
  const { user } = useSelector((state) => state.users);
  const { roomid } = useParams();
  const [rooms, setRooms] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();

  const { RangePicker } = DatePicker;
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [duplicateRooms, setDuplicateRooms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://happynice-back.onrender.com/api/rooms/getRoomById/" + roomid
        );
        setRoom(response.data.room);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        message.error(error.message);
        setError(true);
      }
    }
    fetchData();
  }, []);

  function filterByDate(dates) {
    setFromDate(moment(dates[0])._i.format("DD-MM-YYYY"));
    setToDate(moment(dates[1])._i.format("DD-MM-YYYY"));

    var tempRooms = [];
    for (const room of duplicateRooms) {
      var availability = false;
      if (room.currentbookings.length > 0) {
        for (const booking of room.currentbookings) {
          let fromdate = booking.fromDate._i;
          let todate = booking.toDate._i;

          if (
            (moment(dates[0])._i.format("DD-MM-YYYY") >= fromdate &&
              moment(dates[0])._i.format("DD-MM-YYYY") <= todate) ||
            (moment(dates[1])._i.format("DD-MM-YYYY") >= fromdate &&
              moment(dates[1])._i.format("DD-MM-YYYY") <= todate) ||
            (fromdate >= moment(dates[0])._i.format("DD-MM-YYYY") &&
              fromdate <= moment(dates[1])._i.format("DD-MM-YYYY")) ||
            (todate >= moment(dates[0])._i.format("DD-MM-YYYY") &&
              todate <= moment(dates[1])._i.format("DD-MM-YYYY") &&
              (booking.status == "payed" || booking.status == "booked"))
          ) {
            console.log("oui");
          } else {
            availability = true;
          }
        }
      }
      if (availability == true || room.currentbookings.length == 0) {
        setError(true);
      }

      setRooms(tempRooms);
    }
  }

  const fromdate = moment(fromDate, "DD-MM-YYYY");
  const todate = moment(toDate, "DD-MM-YYYY");

  const totalDays = moment.duration(todate.diff(fromdate)).asDays() + 1;

  async function bookRoom() {
    const bookingDetails = {
      room,
      userId: user._id,
      fromDate,
      toDate,
      totalAmount: totalDays * room.rentperday,
      totalDays,
      methodePaiement: "non payé",
    };

    try {
      setIsLoading(true);
      /* const result = await axios.post("https://api.happynice-mdg.com/api/bookings/bookroom", bookingDetails); */
      await bookingService.bookRoom(bookingDetails);
      Swal.fire(
        "Félicitations",
        "Votre réservation a bien été prise en compte",
        "success"
      ).then((result) => {
        window.location.href = "/mesreservations";
      });
      setIsLoading(false);
    } catch (err) {
      setError(err);
      Swal.fire("Oops", err, "error");
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : room ? (
        <div className="row justify-content-center mt-5">
          <h1>{room.name}</h1>
          <div className="col-md-8 col-lg-6">
            <div className="album reveal-1">
              <div className="album-item row">
                <div className="col-8">
                  <img
                    src={`../static${room.imageurls[0]}`}
                    alt="image-chambre2"
                    className="img img-fluid"
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-12 second-image">
                      <img
                        src={`../static${room.imageurls[1]}`}
                        alt="image-chambre2"
                        className="img img-fluid"
                      />
                    </div>
                    <div className="col-12">
                      <img
                        src={`../static${room.imageurls[2]}`}
                        alt="image-chambre2"
                        className="img img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 justify-content-center">
            <Card style={{ width: "18rem" }} className="reservation">
              <Card.Body>
                <Card.Title>Réservation</Card.Title>
                <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
                {error ? (
                  <Error message="Veuillez choisir une autre intervalle de dates" />
                ) : (
                  <>
                    <Card.Text>
                      Merci de bien vouloir sélectionner des dates.
                    </Card.Text>
                    {!isLoading ? (
                      <button
                        className="btn btn-primary"
                        disabled={!fromDate || !toDate}
                        onClick={
                          /* () => {
                          if (fromDate && toDate) {
                            window.location.href = `/book/${room._id}/${fromDate}/${toDate}`;
                          }
                        } */
                          bookRoom
                        }
                        style={{ backgroundColor: "yellow", color: "black" }}
                      >
                        Réserver maintenant
                      </button>
                    ) : (
                      <button className="btn btn-primary" disabled>
                        En cours de traitement...
                      </button>
                    )}
                  </>
                )}
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-8 resume">
            <ul className="details_header">
              <li>
                <strong className="capacity-title">Capacité</strong>
                <span className="capacity-value">{room.maxcount}</span>
                <span className="capacity-type">personnes</span>
              </li>
              <li>
                <strong className="capacity-title">Chambres</strong>
                <span className="capacity-value">1</span>
                <span className="capacity-type">chambre</span>
              </li>
              <li>
                <strong className="capacity-title">Surface</strong>
                <span className="capacity-value">{room.surface}</span>
                <span className="capacity-type">m²</span>
              </li>
              <li>
                <strong className="capacity-title">Wifi</strong>
                <span className="wifi">Oui</span>
              </li>
            </ul>
          </div>

          <div className="col-md-8 description">
            <h2>Description</h2>
            {room.description}
            <br />
            <p>
              La location du transport pour vous y emmener dépend de
              l'itinéraire à prendre.
            </p>
            <p>Pour ce faire, veuillez contacter directement le responsable.</p>
          </div>

          <div className="col-md-8 description">
            <h2>Equipements</h2>
            <div>
              <h3>Intérieur</h3>
              <ul className="listeservice">
                <li>Télévision</li>
                <li>Grand lit</li>
                <li>Fauteuil</li>
                <li>Salle de bain</li>
              </ul>
            </div>
            <div className="services row">
              <h3>Services</h3>
              <div>
                <ul className="listeservice">
                  <li>Wifi - Internet</li>
                  <li>Lit fait à l'arrivée</li>
                  <li>Draps et linge fournis</li>
                  <li>Ménage inclus</li>
                  <li>Linge de toilette fourni</li>
                  <li>Linge de maison fourni</li>
                  <li>Petit déjeuner inclus</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error message="Quelque chose ne va pas" />
      )}
    </div>
  );
}

export default Detailsscreen;
