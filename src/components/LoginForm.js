import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen md:-m-10">
        <div className="bg-gray-800 flex flex-col w-1/3 border border-gray-900 rounded-lg px-5 py-5">
          <div className="text-white mt-10">
            <h1 className="font-bold text-4xl">Welcome</h1>
            <p className="font-semibold">Log-in With Your Account</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-8 mt-10"
          >
            <input
              type="text"
              placeholder="Email"
              value={email}
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold"
            >
              Log-in
            </button>
            <p className="text-center text-white">
              Dont have Account??{" "}
              <Link
                className="text-blue-700 underline hover:text-green-300"
                to="/register"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
