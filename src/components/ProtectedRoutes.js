import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import { SetUser } from "../redux/usersSlice";
import { message } from "antd";
import { userService } from "../_services/user.service";
import { accountService } from "../_services/account.service";
import axios from "axios";

const ProtectedRoutes = (props) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const response = await userService.getMyInfo();
      if (response.success) {
        //setUserData(response.data);
        dispatch(SetUser(response.data));
      } else {
        message.error(response.message);
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
      message.error(error.message);
    }
  };

  /*  useEffect(() => {
    if (accountService.isLogged()) {
      //if (!userData) {
      if (!user) {
        getData();
      }
    } else {
      navigate("/login");
    }
  }, []); */

  /**
   * Déconnexion automatique
   */
  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.post(
          "https://happynice-back.onrender.com/api/users/verifyToken",
          { token }
        );

        if (response.data.message === "jwt expired") {
          accountService.logout();
          navigate("/login");
        } else {
          if (!user) {
            getData();
          }
        }
      } catch (error) {
        accountService.logout(); // Déconnexion automatique
        navigate("/login");

        message.error(error.response.data.error);
      }
    };

    if (accountService.isLogged()) {
      verifyToken();
    } else {
      navigate("/login");
    }
  }, [navigate, dispatch, user]);

  return user && <DefaultLayout user={user}>{props.children}</DefaultLayout>;
};

export default ProtectedRoutes;
