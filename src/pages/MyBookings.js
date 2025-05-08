import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../_helpers/Loader";
import Swal from "sweetalert2";
import { Tag } from "antd";
import moment from "moment";
import { bookingService } from "../_services/booking.service";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const MyBookings = () => {
  const { user } = useSelector((state) => state.users);
  //   const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(false);
  const [cancelIsLoading, setCancelIsLoading] = useState(false);
  const [error, setError] = useState();

  //   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const response = await bookingService.getBookingByUserId({
          userId: user._id,
        });
        /**
         * Déconnexion automatique
         */
        /* if (response.message == "token expired") {
          alert("token expired, please login again");
          localStorage.removeItem("token");
          window.location.href = "/login";
        } */
        setBookings(response.data);
        console.log(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }
    fetchData();
  }, []);

  async function cancelBooking(bookingId, roomId) {
    try {
      setCancelIsLoading(true);
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await (
        await axios.post(
          "https://happynice-back.onrender.com/api/bookings/cancelBooking",
          {
            bookingId,
            roomId,
          },
          config
        )
      ).data;
      /* (
          await bookingService.cancelBooking({ bookingId, roomId })
        ).data; */
      setCancelIsLoading(false);
      Swal.fire("Fait", "Votre réservation a bien été annulée", "success").then(
        (result) => {
          window.location.reload();
        }
      );
    } catch (error) {
      setLoading(false);
      Swal.fire("Oops", "Il semble qu'il y ait eu une erreur", "error");
    }
  }
  return (
    <div>
      <div className="row">
        {loading && <Loader />}
        <h1>Mes Réservations</h1>
        <div className="col-md-12">
          {bookings.length === 0 && (
            <div className="alert alert-danger" role="alert">
              Il n'y a aucune réservation
            </div>
          )}
          {bookings &&
            bookings.map((booking, index) => {
              return (
                <div className="container mt-4 bs" key={index}>
                  <div className="card">
                    <div className="row no-gutters">
                      <div className="col-md-2">
                        <div className="image-container d-flex justify-content-center align-items-center">
                          <img
                            src={`/static${booking.roomId.imageurls[0]}`}
                            className="card-img"
                            width={"50px"}
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{booking.room}</h5>
                          <p className="card-text">
                            {user.firstname} {user.lastname}
                          </p>
                          <p>
                            De :{" "}
                            <b>
                              {moment(booking.fromDate)
                                .locale("fr")
                                .format("LL")}
                            </b>{" "}
                            au <b>{moment(booking.toDate).format("LL")}</b>
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              {booking.status !== "cancelled" ? (
                                booking.status === "payed" ? (
                                  <Tag color="green">PAYEE</Tag>
                                ) : (
                                  <Tag color="orange">RESERVEE</Tag>
                                )
                              ) : (
                                <Tag color="red">ANNULEE</Tag>
                              )}
                            </small>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <p>
                          <b>
                            {booking.totalAmount
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                            Ar
                          </b>
                        </p>

                        <div
                          className="justify-content"
                          style={{ paddingRight: "15px" }}
                        >
                          {booking.status !== "cancelled" && (
                            <div className="text-right">
                              {!cancelIsLoading ? (
                                <button
                                  className="button-submit"
                                  style={{
                                    display:
                                      moment(booking.fromDate).diff(
                                        moment(),
                                        "days"
                                      ) < 5 && "none",
                                    backgroundColor: "red",
                                    color: "white",
                                  }}
                                  onClick={() => {
                                    cancelBooking(booking._id, booking.roomId);
                                  }}
                                >
                                  Annuler la réservation
                                </button>
                              ) : (
                                <button className="button-submit" disabled>
                                  <span className="spinner-border spinner-border-sm"></span>
                                  Annulation...
                                </button>
                              )}
                            </div>
                          )}

                          {booking.status !== "cancelled" &&
                            booking.status !== "payed" && (
                              <div className="text-right">
                                <Link to={`/book/${booking._id}`}>
                                  <button className="button-submit">
                                    Payer maintenant
                                  </button>
                                </Link>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>

                    <div
                      className="alert alert-warning"
                      role="alert"
                      style={{
                        display:
                          moment(booking.fromDate).diff(moment(), "days") >=
                            5 && "none",
                      }}
                    >
                      Cette réservation ne peut plus être annulée car elle est
                      déjà comprise 5 jours avant votre arrivée sur les lieux.
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
