import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/fr";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
//import { roomService } from "../_services/room.service";
import { bookingService } from "../_services/booking.service";
import Loader from "../_helpers/Loader";
import Error from "../_helpers/Error";
import { accountService } from "../_services/account.service";
import { message } from "antd";
import { useSelector } from "react-redux";

const Booking = () => {
  const { bookingId } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [booking, setBooking] = useState({});

  const { user } = useSelector((state) => state.users);

  const [methodePaiement, setMethodePaiement] = useState();
  const [payeIsLoading, setPayeIsLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!accountService.isLogged()) {
        window.location.href = "/login";
      }
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      try {
        setLoading(true);
        setIsLoading(true);

        const result = await axios.get(
          "http://localhost:8800/api/bookings/getBookById/" + bookingId,
          config
        );
        if (result.data.success) {
          setBooking(result.data.booking);
        }
        setLoading(false);
        setIsLoading(false);
      } catch (error) {
        setLoading(false);
        message.error(error.message);
        setError(true);
      }
    }
    fetchData();
  }, [bookingId]);

  const handleOptionChange = (event) => {
    setMethodePaiement(event.target.value);
  };

  const paye = async () => {
    try {
      const payload = {
        bookingId,
        roomId: booking.roomId._id,
      };
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      setPayeIsLoading(true);
      const result = await (
        await axios.post(
          "http://localhost:8800/api/bookings/payed",
          payload,
          config
        )
      ).data;
      if (result) {
        Swal.fire("Fait", "Cette réservation a bien été payée", "success").then(
          (result) => {
            window.location.href = "/mesreservations";
          }
        );
      }
      setPayeIsLoading(false);
    } catch (error) {
      setPayeIsLoading(false);
      console.log(error);
      setLoading(false);
      Swal.fire("Oops", "Il semble qu'il y ait eu une erreur", "error");
    }
  };

  return (
    <div className="m-5">
      {!loading ? (
        <>
          {booking && (
            <div>
              <div className="row justify-content-center mt-5 bs">
                <div className="col-md-6">
                  <h1>{booking.name}</h1>
                  <img
                    src={`../../../static${booking.roomId.imageurls[0]}`}
                    className="bigImg"
                    style={{ width: "auto" }}
                    alt="Chambre"
                  />
                  <hr />
                  <div className="alert alert-primary" role="alert">
                    L'annulation de la réservation ne peut se faire que 5 jours
                    avant la date d'arrivée dans nos locaux, passé ce délai,
                    vous ne pourrez plus annuler votre réservation
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                  <h1>Détails de la réservation</h1>

                  <div>
                    <p>
                      <b>Nom du client : </b> {user.firstname}
                    </p>
                    <p>
                      <b>Date de début : </b>
                      {moment(booking.fromDate).format("LL")}
                    </p>
                    <p>
                      <b>Date de départ : </b>
                      {moment(booking.toDate).format("LL")}
                    </p>
                    <p>
                      <b>Capacité maximum : </b> {booking.roomId.maxcount}
                      personnes
                    </p>
                  </div>
                  <hr />

                  <div>
                    <h1>Prix</h1>
                    <p>
                      <b>Durée du séjour : </b>
                      {booking.totalDays} jours
                    </p>
                    <p>
                      <b>Prix journalier : </b>
                      {booking.roomId.rentperday
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                      Ar
                    </p>

                    <p>
                      <b>Montant total : </b>{" "}
                      {booking.totalAmount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                      Ar
                    </p>
                  </div>

                  <hr />
                  <div>
                    <h3>Mode de paiement</h3>
                    <div className="alert alert-warning" role="alert">
                      Veuillez mettre comme description du paiement
                      "HN_votreNom"
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="radio1"
                        name="optradio"
                        value="mvola"
                        checked={methodePaiement === "mvola"}
                        onChange={handleOptionChange}
                      />
                      <label className="form-check-label" for="radio1">
                        Mvola 0340489225 (ONIMALALAINA)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="radio2"
                        name="optradio"
                        value="orangemoney"
                        checked={methodePaiement === "orangemoney"}
                        onChange={handleOptionChange}
                      />
                      <label className="form-check-label" for="radio2">
                        OrangeMoney 0322584957 (ONIMAHARO)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        id="radio3"
                        name="optradio"
                        value="especes"
                        checked={methodePaiement === "especes"}
                        onChange={handleOptionChange}
                      />
                      <label className="form-check-label" for="radio3">
                        Especes
                      </label>
                    </div>
                  </div>

                  <div style={{ float: "right" }}>
                    {!payeIsLoading ? (
                      <button className="button-submit" onClick={paye}>
                        Réserver maintenant
                      </button>
                    ) : (
                      <button className="button-submit" disabled>
                        <span className="spinner-border spinner-border-sm"></span>
                        En cours de traitement...
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Booking;
