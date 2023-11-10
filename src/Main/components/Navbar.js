import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

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
      onClick: () => navigate("/"),
      path: "/",
    },
    {
      title: "Se déconnecter",
      onClick: () => navigate("/logout"),
      path: "/logout",
    },
  ];

  const menuToRender = user ? privateMenuRight : publicMenuRight;

  return (
    <>
      <header className={`${isHome ? "header-home" : "header-black"}`}>
        <div className="container-fluid index-up">
          <div className="topbar">
            <div className="row nav-expand">
              <nav className="navigation col-lg-12">
                {publicMenu.map((item) => {
                  const isActive = window.location.pathname === item.path;
                  return (
                    <a
                      href={item.path}
                      className={`link px-3 ${isActive ? "selected" : ""}`}
                      onClick={item.onClick}
                      style={{ marginRight: "10px;" }}>
                      {item.title}
                    </a>
                  );
                })}
              </nav>
            </div>
            <div className="row nav-toogle" id="nav-toogle">
              <div className="toggle-button py-1">
                <img
                  src="static/images/toogle-icone.png"
                  alt=""
                  className="img img-fluid"
                />
              </div>
            </div>

            <div className="row hidden" id="menu-toogle">
              <ul style={{ textAlign: "center" }}>
                {publicMenu.map((item) => {
                  const isActive = window.location.pathname === item.path;
                  return (
                    <a
                      href={item.path}
                      className={`toggle-item ${isActive ? "selected" : ""}`}
                      onClick={item.onClick}
                      style={{ marginRight: "10px;" }}>
                      {item.title}
                    </a>
                  );
                })}

                <div className="ml-auto">
                  {menuToRender.map((item) => {
                    const isActive = window.location.pathname === item.path;
                    return (
                      <a
                        href={item.path}
                        className={`link px-3 ${
                          isActive ? "selected" : ""
                        } mr-2`}
                        onClick={item.onClick}>
                        {item.title}
                      </a>
                    );
                  })}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
