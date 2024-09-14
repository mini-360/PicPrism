import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import Footers from "./components/Footers";
import GsapTransition from "./components/GsapTransition";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <GsapTransition />
        <Footers />
      </BrowserRouter>
    </>
  );
};

export default App;
