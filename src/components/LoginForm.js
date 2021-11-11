import React from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen md:-m-10">
        <div className="bg-gray-800 flex flex-col w-1/3 border border-gray-900 rounded-lg px-5 py-5">
          <div className="text-white mt-10">
            <h1 className="font-bold text-4xl">Welcome</h1>
            <p className="font-semibold">Log-in With Your Account</p>
          </div>
          <form className="flex flex-col space-y-8 mt-10">
            <input
              type="text"
              placeholder="Email"
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
            />
            <button className="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold">
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
