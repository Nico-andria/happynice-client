import React, { useEffect } from "react";
import { accountService } from "../_services/account.service";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

function PublicRoutes(props) {
  const navigate = useNavigate();
  /*   useEffect(() => {
    if (accountService.isLogged()) {
      navigate("/");
    }
  }, []); */
  return <DefaultLayout>{props.children}</DefaultLayout>;
}

export default PublicRoutes;
