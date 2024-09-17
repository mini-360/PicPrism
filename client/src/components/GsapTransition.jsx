import React, { useEffect, useRef } from "react";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { Route, Routes, useLocation } from "react-router-dom";
import gsap from "gsap";
import toast, { Toaster } from "react-hot-toast";
import Forgot from "../pages/Forgot";
import Verify from "../pages/Verify";

const GsapTransition = () => {
  const nodeRef = useRef(null);
  const location = useLocation();
  console.log("Location is", location);

  useEffect(() => {
    if (nodeRef.current) {
      gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, [location]);

  return (
    <>
      <div ref={nodeRef}>
        <Toaster />
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/seller/profile" element={<SellerDashboard />} />
          <Route path="/buyer/profile" element={<BuyerDashboard />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </div>
    </>
  );
};

export default GsapTransition;
