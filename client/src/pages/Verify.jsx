import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/verify", {
      otp,
      password,
    });
    const data = await res.data;
    toast.success(data.message);
    navigate("/login");
  };

  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center w-full min-h-screen">
        <form
          action=""
          onSubmit={handleVerify}
          className="bg-white shadow-md rounded-md px-10 py-6 w-full sm:w-[30vw]"
        >
          <h1 className="text-center font-bold text-2xl mb-7">
            OTP verification
          </h1>
          <div className="mb-4">
            <label htmlFor="otp" className="block font-bold text-gray-700 mb-2">
              Otp :
            </label>
            <input
              type="otp"
              name="otp"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter your otp"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black "
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block font-bold text-gray-700 mb-2"
            >
              New Password :
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black "
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="bg-black text-white shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Verify;
