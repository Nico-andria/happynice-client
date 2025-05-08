//import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import PublicRoutes from "./components/PublicRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Chambres from "./pages/Chambres";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Detailsscreen from "./pages/Details/Detailsscreen";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Tab from "./pages/Tab";
import ForgottenPassword from "./pages/ForgottenPassword";
import ResetPassword from "./pages/ResetPassword";
import Success from "./_helpers/Success";
import EmailVerify from "./_helpers/EmailVerify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes>
                <Homepage />
              </PublicRoutes>
            }
          />
          <Route
            path="/tab"
            element={
              <PublicRoutes>
                <Tab />
              </PublicRoutes>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoutes>
                <Register />
              </PublicRoutes>
            }
          />
          <Route
            path="/emailVerified"
            element={
              <PublicRoutes>
                <EmailVerify />
              </PublicRoutes>
            }
          />

          <Route
            path="/forgottenpassword"
            element={
              <PublicRoutes>
                <ForgottenPassword />
              </PublicRoutes>
            }
          />
          <Route
            path="/resetPassword/:userId?/:resetString?"
            element={
              <PublicRoutes>
                <ResetPassword />
              </PublicRoutes>
            }
          />
          <Route
            path="/success"
            element={
              <PublicRoutes>
                <Success />
              </PublicRoutes>
            }
          />
          <Route
            path="/chambres"
            element={
              <PublicRoutes>
                <Chambres />
              </PublicRoutes>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicRoutes>
                <Contact />
              </PublicRoutes>
            }
          />
          <Route
            path="/reservation"
            element={
              <ProtectedRoutes>
                <Reservation />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/book/:bookingId"
            element={
              <ProtectedRoutes>
                <Booking />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/details/:roomid"
            element={
              <PublicRoutes>
                <Detailsscreen />
              </PublicRoutes>
            }
          />

          <Route
            path="/mesreservations"
            element={
              <ProtectedRoutes>
                <MyBookings />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
