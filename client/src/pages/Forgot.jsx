import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgot = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/forgot", {
      email,
    });
    const data = res.data;
    toast.success(data.message);
    navigate("/verify");
  };

  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center w-full min-h-screen">
        <form
          action=""
          onSubmit={handleForgot}
          className="bg-white shadow-md rounded-md px-10 py-6 w-full sm:w-[30vw]"
        >
          <h1 className="text-center font-bold text-2xl mb-7">Forgot Password</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black "
            />
          </div>

          <div className="my-4">
            <span>or</span>
            <Link to="/forgot">Sign In</Link>
          </div>
          <div>
          <button type="submit" className="bg-black text-white shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black">
              Send Otp
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forgot;
