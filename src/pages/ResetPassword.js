import React, { useEffect, useState } from "react";
import { Form, message } from "antd";
import { redirect, useParams } from "react-router-dom";
import axios from "axios";
import "./Login/form.css";
import { accountService } from "../_services/account.service";

function ResetPassword() {
  //const navigate = useNavigate();
  const { userId, resetString } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [isLoading, setIsLoading] = useState();

  const onFinish = async () => {
    try {
      setIsLoading(true);

      /* const response = accountService.resetPassword(values);*/
      await axios
        .post("http://localhost:8800/api/users/resetPassword", {
          userId,
          resetString,
          newPassword,
        })
        .then((res) => {
          if (res.data.status === "SUCCESS") {
            message.success(res.data.message);
            window.location.href = "/success";
          }
        })
        .catch((err) => {
          message.error(err.data.error);
        });
      setIsLoading(false);
    } catch (error) {
      message.error(error.message);
      setIsLoading(false);
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
      <Form layout="vertical" className="form_user" onFinish={onFinish}>
        <h1 className="text-center">Mot de passe oublié</h1>

        <Form.Item label="Entrez un nouveau Mot de passe" name="newPassword">
          <div className="inputForm">
            <svg
              height="20"
              viewBox="-64 0 512 512"
              width="20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
            </svg>
            <input
              type={showPassword ? "text" : "password"}
              className="input-form"
              placeholder="Entrez Votre Mot de Passe"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}>
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
            </svg>
          </div>
        </Form.Item>

        {!isLoading ? (
          <button className="button-submit">Confimer</button>
        ) : (
          <button className="button-submit" disabled>
            <span className="spinner-border spinner-border-sm"></span>
            Modification en cours...
          </button>
        )}
      </Form>
    </div>
  );
}

export default ResetPassword;
