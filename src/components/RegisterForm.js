import React from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <div>
      <div className="flex items-center justify-center h-full ">
        <div className="bg-gray-800 my-10 flex flex-col w-full border border-gray-900 rounded-lg px-5 py-5">
          <div className="text-white mt-5">
            <h1 className="font-bold text-4xl">Register Account</h1>
          </div>
          <form className="flex flex-col space-y-8 mt-10">
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
            />
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
            <div className="flex flex-row justify-around items-center">
              <div classname="w-1/2">
                <p className="text-xl font-semibold text-white">Gender :</p>
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <input type="radio" value="Male" id="Male" />
                    <label className="text-xl mx-2 text-white" for="Male">
                      Male
                    </label>
                  </div>
                  <div className="flex flex-row items-center">
                    <input type="radio" value="Female" id="Female" />
                    <label className="text-xl mx-2 text-white" for="Female">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col">
                <div className="flex flex-col my-2">
                  <label
                    for="Kota"
                    className="text-xl font-semibold text-white"
                  >
                    Kota :
                  </label>
                  <select
                    className="px-5 py-2 rounded-md"
                    id="Kota"
                    name="Kota"
                    autoComplete="Kota"
                  >
                    <option>Jakarta</option>
                    <option>Bogor</option>
                    <option>Depok</option>
                    <option>Tanggerang</option>
                    <option>Bekasi</option>
                  </select>
                </div>
                <div className="flex flex-col my-2">
                  <label
                    for="Provinsi"
                    className="text-xl font-semibold text-white"
                  >
                    Provinsi :
                  </label>
                  <select
                    className="px-5 py-2 rounded-md"
                    id="Provinsi"
                    name="Provinsi"
                    autoComplete="Provinsi"
                  >
                    <option>DKI Jakarta</option>
                    <option>Jawa Barat</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold">
              Sign up
            </button>
            <p className="text-center text-white">
              Have Account??{" "}
              <Link
                className="text-blue-700 underline hover:text-green-300"
                to="/login"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>

    /* <div className="border-4 border-black rounded-md flex flex-col justify-center items-center bg-blue-300">
        <div>
          <h1 className="text-2xl font-bold">Form Register</h1>
        </div>
        <div className="flex flex-col">
          <input
            className="my-2 border-4 boder-black rounded-sm px-5 py-2 text-xl"
            type="text"
            placeholder="First Name"
          />
          <input
            className="my-2 border-4 boder-black rounded-sm px-5 py-2 text-xl"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="my-2 border-4 boder-black rounded-sm px-5 py-2 text-xl"
            type="text"
            placeholder="Email Name"
          />
          <input
            className="my-2 border-4 boder-black rounded-sm px-5 py-2 text-xl"
            type="password"
            placeholder="Password"
          />
          <div className="flex flex-row justify-around items-center">
            <div classname="w-1/2">
              <p className="text-xl font-semibold">Gender :</p>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <input type="radio" value="Male" id="Male" />
                  <label className="text-xl mx-2" for="Male">
                    Male
                  </label>
                </div>
                <div className="flex flex-row items-center">
                  <input type="radio" value="Female" id="Female" />
                  <label className="text-xl mx-2" for="Female">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="flex flex-col my-2">
                <label for="Kota" className="text-xl font-semibold">
                  Kota :
                </label>
                <select id="Kota" name="Kota" autoComplete="Kota">
                  <option>Jakarta</option>
                  <option>Bogor</option>
                  <option>Depok</option>
                  <option>Tanggerang</option>
                  <option>Bekasi</option>
                </select>
              </div>
              <div className="flex flex-col my-2">
                <label for="Provinsi" className="text-xl font-semibold">
                  Provinsi :
                </label>
                <select id="Provinsi" name="Provinsi" autoComplete="Provinsi">
                  <option>DKI Jakarta</option>
                  <option>Jawa Barat</option>
                </select>
              </div>
            </div>
          </div>
          <button className="block bg-red-300 px-5 py-2 m-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div> */
  );
}

export default RegisterForm;
