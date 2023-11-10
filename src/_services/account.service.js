import Axios from "./caller.service";

let login = async (payload) => {
  try {
    const { data } = await Axios.post("/api/users/login", payload);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

let register = async (payload) => {
  try {
    const { data } = await Axios.post("/api/users/register", payload);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let logout = () => {
  localStorage.removeItem("token");
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

export const accountService = {
  login,
  register,
  saveToken,
  logout,
  isLogged,
};
