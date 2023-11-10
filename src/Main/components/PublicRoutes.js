import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { accountService } from "../_services/account.service";
import Layout from "./Layout";

function PublicRoutes(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (accountService.isLogged()) {
      // navigate("/");
      //window.location.href = "/";
    }
  }, []);
  return (
    <Layout>
      <div>{props.children}</div>
    </Layout>
  );
}

export default PublicRoutes;
