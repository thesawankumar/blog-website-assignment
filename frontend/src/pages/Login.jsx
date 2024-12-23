/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      toast.success("Login successful!");
      navigate("/");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between bg-gray-100">
      <div className="max-w-md mx-auto w-full flex flex-col justify-center">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            What's your email
          </h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-gray-200 mb-5 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2 text-gray-800">
            Enter Password
          </h3>
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-gray-200 mb-5 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="password"
          />
          <button className="bg-black text-white font-semibold mb-4 rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-800 transition duration-300">
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          New here?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create new Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
