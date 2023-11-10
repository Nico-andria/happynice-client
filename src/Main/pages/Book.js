import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
//import { roomService } from "../_services/room.service";
import { bookingService } from "../_services/booking.service";
import Loader from "../_helpers/Loader";
import Error from "../_helpers/Error";
import { useDispatch, useSelector } from "react-redux";

export const Book = () => {
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

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  return (
    <div className="m-5">
      <div>
        <div className="row justify-content-center mt-5 bs">
          <div className="col-md-6">
            <h1>Test</h1>
            <img
              src="static/images/chambre-1.jpg"
              className="bigImg"
              style={{ width: "auto" }}
              alt="test"
            />
            <hr />
            <div className="alert alert-primary" role="alert">
              L'annulation de la réservation ne peut se faire que 5 jours avant
              la date d'arrivée dans nos locaux, passé ce délai, vous ne pourrez
              plus annuler votre réservation
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-3">
            <h1>Détails de la réservation</h1>

            <div>
              <p>
                <b>Nom du client : {user.firstname} </b>
              </p>
              <p>
                <b>Date de début : </b>
              </p>
              <p>
                <b>Date de départ : </b>
              </p>
              <p>
                <b>Capacité maximum : </b> test personnes
              </p>
            </div>
            <hr />

            <div>
              <h1>Prix</h1>
              <p>
                <b>Durée du séjour : </b>
                15 jours
              </p>
              <p>
                <b>Prix journalier : </b>
                180000 Ar
              </p>

              <p>
                <b>Montant total : </b> 180000 Ar
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
                  checked="mvola"
                  //onChange={handleOpti//onChange}
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
                  checked="orangemoney"
                  //onChange={handleOpti//onChange}
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
                  checked="especes"
                  //onChange={handleOpti//onChange}
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
                  //onClick={bookRoom}
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
    </div>
  );
};
