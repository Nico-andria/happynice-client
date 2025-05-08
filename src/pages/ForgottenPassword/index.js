import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../Login/form.css";
import { accountService } from "../../_services/account.service";

const ForgottenPassword = () => {
  //   const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  const [email, setEmail] = useState("");

  const handleResetRequest = async () => {
    try {
      setIsLoading(true);
      const response = await axios
        .post("http://localhost:8800/api/users/requestPasswordReset", {
          email,
          redirectUrl: "http://localhost:3000/resetPassword",
        })
        .then((res) => {
          if (res.data.status === "PENDING") {
            message.success(res.data.message);
          }
        })
        .catch((err) => {
          message.error(err.message);
        });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      message.error("Error occurred while sending reset email");
    }
  };
  useEffect(() => {
    const response = accountService.isLogged();
    if (response) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="center-container">
      <Form
        layout="vertical"
        className="form_user"
        onFinish={handleResetRequest}
      >
        <h1 className="text-center">Mot de passe oublié</h1>
        <Form.Item label="Adresse Email" name="email">
          <div className="inputForm">
            <svg
              height="20"
              viewBox="0 0 32 32"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
              </g>
            </svg>
            <input
              type="text"
              className="input-form"
              placeholder="Entrez Votre Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </Form.Item>

        {!isLoading ? (
          <button className="button-submit">Envoyer</button>
        ) : (
          <button className="button-submit" disabled>
            <span className="spinner-border spinner-border-sm"></span>
            Envoi en cours...
          </button>
        )}
        <p className="p">
          Pas encore de compte?{" "}
          <span className="span">
            <Link to={"/register"} style={{ color: "black" }}>
              Ouvrir un compte
            </Link>
          </span>
        </p>
      </Form>
    </div>
  );
};

export default ForgottenPassword;
