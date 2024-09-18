import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      const data = await res.data;
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="bg-white shadow-md rounded-md px-8 py-6 w-full sm:w-[30vw]">
          <h1 className="text-2xl text-center mb-4 font-bold">
            Lets Connect !
          </h1>

          <form action="" onSubmit={handleLogin}>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black "
              />
            </div>

            <button className="bg-black font-bold text-white shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none focus:border-black focus:ring-black">
              LogIN
            </button>

            <div className="my-3 flex gap-2 justify-between">
              <Link
                to="/signup"
                className="text-blue-900 hover:scale-105 transition-all ease-linear duration-700 transform"
              >
                Create Account
              </Link>
              <Link to="/forgot" className="text-blue-900">
                Forget Password?
              </Link>
            </div>

            <div></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
