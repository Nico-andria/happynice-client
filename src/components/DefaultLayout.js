import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Navigation from "./Navigation";

const DefaultLayout = ({ children }) => {
  const { user } = useSelector((state) => state.users);
  return (
    <>
      {/* <Navbar /> */}
      <Navigation />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
