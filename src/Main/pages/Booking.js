import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
//import { roomService } from "../_services/room.service";
import { bookingService } from "../_services/booking.service";
import Loader from "../_helpers/Loader";
import Error from "../_helpers/Error";

function Booking() {
  const { roomid, fromDate, toDate } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();

  const [userId, setUserId] = useState();
  const fromdate = moment(fromDate, "DD-MM-YYYY");
  const todate = moment(toDate, "DD-MM-YYYY");

  const totalDays = moment.duration(todate.diff(fromdate)).asDays() + 1;
  const [totalAmount, setTotalAmount] = useState();

  const [methodePaiement, setMethodePaiement] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!localStorage.getItem("currentUser")) {
        window.location.href = "/login";
      }
      try {
        setLoading(true);
        const data = await axios.post(
          "https://api.happynice-mdg.com/api/rooms/getRoomById",
          {
            roomid: roomid,
          }
        ).data;
        //(await roomService.getRoomById({ roomId: roomid })).data;
        setTotalAmount(totalDays * data.rentperday);
        setRoom(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        setError(true);
      }
    }
    fetchData();
  }, []);

  const handleOptionChange = (event) => {
    setMethodePaiement(event.target.value);
  };

  async function bookRoom() {
    const bookingDetails = {
      room,
      userId: JSON.parse(localStorage.getItem("currentUser"))._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
      methodePaiement,
    };

    try {
      setIsLoading(true);
      /* const result = await axios.post("https://api.happynice-mdg.com/api/bookings/bookroom", bookingDetails); */
      await bookingService.bookRoom(bookingDetails);
      console.log(fromDate);
      Swal.fire(
        "Félicitations",
        "Votre réservation a bien été prise en compte",
        "success"
      ).then((result) => {
        window.location.href = "/";
      });
      setIsLoading(false);
    } catch (err) {
      setErrorMessage(err.response.data.error);
      Swal.fire("Oops", err.response.data.error, "error");
      setIsLoading(false);
    }
  }

  return (
    <div className="m-5">
      {loading ? (
        <Loader />
      ) : room ? (
        <div>
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img
                src={room.imageurls[0]}
                className="bigImg"
                style={{ width: "auto" }}
              />
              <hr />
              <div className="alert alert-primary" role="alert">
                L'annulation de la réservation ne peut se faire que 5 jours
                avant la date d'arrivée dans nos locaux, passé ce délai, vous ne
                pourrez plus annuler votre réservation
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-3">
              <h1>Détails de la réservation</h1>

              <div>
                <p>
                  <b>Nom du client : </b>{" "}
                  {JSON.parse(localStorage.getItem("currentUser")).firstname}
                </p>
                <p>
                  <b>Date de début : </b>{" "}
                  {moment(fromdate).format("dddd D MMMM YYYY")}
                </p>
                <p>
                  <b>Date de départ : </b>{" "}
                  {moment(todate).locale("fr").format("dddd D MMMM YYYY")}
                </p>
                <p>
                  <b>Capacité maximum : </b> {room.maxcount} personnes
                </p>
              </div>
              <hr />

              <div>
                <h1>Prix</h1>
                <p>
                  <b>Durée du séjour : </b>
                  {totalDays} jours
                </p>
                <p>
                  <b>Prix journalier : </b>
                  {room.rentperday
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  Ar
                </p>

                <p>
                  <b>Montant total : </b>{" "}
                  {totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  Ar
                </p>
              </div>

              <hr />
              <div>
                <h3>Mode de paiement</h3>
                <div className="alert alert-warning" role="alert">
                  Veuillez mettre comme description du paiement "HN_votreNom"
                </div>
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="optradio"
                    value="mvola"
                    checked={methodePaiement === "mvola"}
                    onChange={handleOptionChange}
                  />
                  <label class="form-check-label" for="radio1">
                    Mvola 0340489225 (ONIMALALAINA)
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio1"
                    name="optradio"
                    value="orangemoney"
                    checked={methodePaiement === "orangemoney"}
                    onChange={handleOptionChange}
                  />
                  <label class="form-check-label" for="radio1">
                    OrangeMoney 0322584957 (ONIMAHARO)
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="radio"
                    class="form-check-input"
                    id="radio2"
                    name="optradio"
                    value="especes"
                    checked={methodePaiement === "especes"}
                    onChange={handleOptionChange}
                  />
                  <label class="form-check-label" for="radio2">
                    Especes
                  </label>
                </div>
              </div>

              <div style={{ float: "right" }}>
                {!isLoading ? (
                  <button
                    className="btn btn-primary"
                    onClick={bookRoom}
                    style={{ backgroundColor: "yellow", color: "black" }}>
                    Réserver maintenant
                  </button>
                ) : (
                  <button className="btn btn-primary" disabled>
                    <span className="spinner-border spinner-border-sm"></span>
                    En cours de traitement...
                  </button>
                )}
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

export default Booking;
