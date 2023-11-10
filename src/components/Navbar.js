import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { accountService } from "../_services/account.service";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(location.pathname === "/");
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    // Mettez à jour isHome lorsque la route change
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const publicMenu = [
    {
      title: "Accueil",
      onClick: () => navigate("/"),
      path: "/",
    },
    {
      title: "Nos chambres",
      onClick: () => navigate("/chambres"),
      path: "/chambres",
    },
    {
      title: "Nous contacter",
      onClick: () => navigate("/contact"),
      path: "/contact",
    },
    {
      title: "Réservation",
      onClick: () => navigate("/reservation"),
      path: "/reservation",
    },
  ];
  const publicMenuRight = [
    {
      title: "Se connecter",
      onClick: () => navigate("/login"),
      path: "/login",
    },
    {
      title: "S'enregistrer",
      onClick: () => navigate("/register"),
      path: "/register",
    },
  ];
  const privateMenuRight = [
    {
      title: "Mes réservations",
      onClick: () => navigate("/mesreservations"),
      path: "/mesreservations",
    },
    {
      title: "Se déconnecter",
      onClick: () => {
        accountService.logout();
        navigate("/login");
      },
      //path: "/logout",
    },
  ];

  const menuToRender = user ? privateMenuRight : publicMenuRight;

  return (
    <>
      <nav
        class={`navbar navbar-expand-sm navbar-dark bg-dark  ${
          isHome ? "header-home" : "header-black"
        }`}>
        <div
          class={`container-fluid fixed-top ${
            isHome ? "header-home" : "header-black"
          }`}>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              {publicMenu.map((item, index) => {
                const isActive = window.location.pathname === item.path;
                return (
                  <li class="nav-item">
                    <a
                      href={item.path}
                      className={`nav-link link px-3 ${
                        isActive ? "selected" : ""
                      }`}
                      onClick={item.onClick}
                      style={{ marginRight: "10px;" }}
                      key={index}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div class="d-flex">
              {!user ? (
                <>
                  <ul class="navbar-nav me-auto">
                    {publicMenuRight.map((item) => {
                      const isActive = window.location.pathname === item.path;
                      return (
                        <li class="nav-item">
                          <a
                            href={item.path}
                            className={`nav-link link px-3 ${
                              isActive ? "selected" : ""
                            }`}
                            onClick={item.onClick}
                            style={{ marginRight: "10px;" }}>
                            {item.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <>
                  <ul class="navbar-nav me-auto">
                    {privateMenuRight.map((item, index) => {
                      const isActive = window.location.pathname === item.path;
                      return (
                        <a
                          href={item.path}
                          className={` nav-link link px-3 ${
                            isActive ? "selected" : ""
                          }`}
                          onClick={item.onClick}
                          style={{ marginRight: "10px;" }}
                          key={index}>
                          {item.title}
                        </a>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
