import React, { useEffect } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { message } from "antd";

import { accountService } from "../_services/account.service";
import { userService } from "../_services/user.service";

function ProtectedRoutes(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);

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

  useEffect(() => {
    if (accountService.isLogged()) {
      if (!user) {
        getData();
      } else {
        navigate("/login");
      }
    }
  }, []);
  return (
    user && (
      <div>
        <Layout user={user}>{props.children}</Layout>
      </div>
    )
  );
}

export default ProtectedRoutes;
