import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Signup = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");
const [accountType, setAccountType] = useState("buyer");


  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/signup", {
      email,
      password,
      username,
      accountType,
    })
    const data = res.data;
    toast.success(data.message);
    e.target.username.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
    e.target.accountType.value = "buyer"


  }
  
  
  return (
    <>
    <Toaster/>
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="bg-white shadow-md rounded-md px-8 py-6 w-full sm:w-[30vw]">
          <h1 className="text-2xl text-center mb-4 font-bold">
            Lets Connect !
          </h1>

          <form action="" onSubmit={handleSignup}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block font-bold text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black "
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-bold text-gray-700 mb-2"
              >
                Email
              </label>
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
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-bold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black "
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="accountType"
                className="block font-bold text-gray-700 mb-2"
              >
                Select Account Type
              </label>
              <select
                name="accountType"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                id=""
                className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black "
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <button type="submit" className="bg-black text-white shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black">
              SignUp
            </button>

            <div className="my-3 flex gap-2 justify-end">
              <p>Already Account?</p>
              <Link to="/login" className="text-black hover:scale-105 transition-all ease-linear duration-700 transform">LogIn</Link>
            </div>

            <div></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
