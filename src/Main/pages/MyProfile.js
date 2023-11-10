import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../_services/user.service";

export const MyProfile = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const getUserInfo = async () => {
    try {
      const response = await userService.getMyInfo();
      if (response.success) {
        // Utilisez les informations de l'utilisateur ici
        console.log("Informations de l'utilisateur:", response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    getUserInfo(); // Appelez cette fonction lorsque le composant est monté
  }, []);

  return <div>{user && <h1> {user.firstname} </h1>}</div>;
};
