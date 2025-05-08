import Axios from "./caller.service";

let bookRoom = async (payload) => {
  try {
    const { data } = await Axios.post("/api/bookings/bookRoom", payload);
    return data;
  } catch (error) {
    return error.message;
  }
};
let getBookingByUserId = async (payload) => {
  try {
    const { data } = await Axios.post(
      "/api/bookings/getBookingByUserId",
      payload
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
let getBookById = async (payload) => {
  try {
    const { data } = await Axios.get("/api/bookings/getBookById/" + payload);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const bookingService = {
  bookRoom,
  getBookingByUserId,
  getBookById,
};
