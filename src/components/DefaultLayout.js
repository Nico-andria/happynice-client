import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const DefaultLayout = ({ children }) => {
  const { user } = useSelector((state) => state.users);
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
