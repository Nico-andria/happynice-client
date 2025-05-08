import { message, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { roomService } from "../_services/room.service";
import Room from "../components/Room";
import moment from "moment";
import Loader from "../_helpers/Loader";

const { RangePicker } = DatePicker;
function Reservation() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const [duplicateRooms, setDuplicateRooms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await roomService.getAllRooms();
        if (response.success) {
          setRooms(response.rooms); // Vous pouvez consulter les données ici
        }
        /**
         * Déconnexion automatique
         */
        /* if (response.message == "token expired") {
          alert("token expired, please login again");
          localStorage.removeItem("token");
          window.location.href = "/login";
        } */
        setLoading(false);
      } catch (error) {
        message.error(error.message);
      }
    };

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
              todate <= moment(dates[1])._i.format("DD-MM-YYYY"))
          ) {
            console.log("oui");
          } else {
            //console.log("non");
            availability = true;
          }
        }
      }
      if (availability == true || room.currentbookings.length == 0) {
        tempRooms.push(room);
      }

      setRooms(tempRooms);
    }
  }
  return (
    <div>
      <div className="row mt-5 bs">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h3 className="text-center">Choisissez vos dates :</h3>
          <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
        </div>
        <div className="col-md-4"></div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          {rooms.map((room, index) => {
            return (
              <Room
                room={room}
                fromDate={fromDate}
                toDate={toDate}
                index={index}
                key={index}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default Reservation;
