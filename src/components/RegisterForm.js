import React, { useState } from "react";
import { Link } from "react-router-dom";

// regex
const checkEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [kota, setKota] = useState("");
  const [provinsi, setProvinsi] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = [
      { firstName: firstName },
      { lastName: lastName },
      { email: email },
      { password: password },
      { gender: gender },
      { kota: kota, provinsi: provinsi },
    ];

    data.forEach((input) => {
      if (
        input.firstName === "" ||
        input.lastName === "" ||
        input.email === "" ||
        input.password === "" ||
        input.gender === "" ||
        input.kota === "" ||
        input.provinsi === ""
      ) {
        console.log("please fill all input");
      }

      if (input.email) {
        if (checkEmail.test(input.email)) {
          console.log("Invalid Format Email");
        }
      }

      if (input.kota !== "" && input.provinsi !== "") {
        if (input.kota === "Jakarta" && input.provinsi !== "Jakarta") {
          alert("Daerah tidak sesuai");
        }
        if (input.kota === "Bogor" && input.provinsi !== "Jawa Barat") {
          alert("Daerah tidak sesuai");
        }
        if (input.kota === "Depok" && input.provinsi !== "Jawa Barat") {
          alert("Daerah tidak sesuai");
        }
        if (input.kota === "Tanggerang" && input.provinsi !== "Jakarta") {
          alert("Daerah tidak sesuai");
        }
        if (input.kota === "Bekasi" && input.provinsi !== "Jakarta") {
          alert("Daerah tidak sesuai");
        }
      }
    });

    console.log(data);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setGender("");
  };

  return (
    <div>
      <div className="flex items-center justify-center h-full ">
        <div className="bg-gray-800 my-10 flex flex-col w-full border border-gray-900 rounded-lg px-5 py-5">
          <div className="text-white mt-5">
            <h1 className="font-bold text-4xl">Register Account</h1>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col space-y-8 mt-10"
          >
            <input
              required
              type="text"
              name="firstname"
              value={firstName}
              placeholder="First Name"
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              type="text"
              name="lastname"
              value={lastName}
              placeholder="Last Name"
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              required
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              className="border rounded-lg py-3 px-3 text-white bg-gray-700 border-gray-700 placeholder-gray-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-row justify-center items-center">
              <div className="w-1/2 flex justify-center items-center flex-col">
                <p className="text-xl font-semibold text-start text-white">
                  Gender :
                </p>
                <div
                  className="flex flex-row justify-center items-center"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <input
                    required
                    className="ml-2"
                    id="Male"
                    type="radio"
                    name="Male"
                    value="Male"
                  />
                  <label for="Male" className="text-xl text-white mx-2 ">
                    Male
                  </label>
                  <input
                    required
                    className="ml-2"
                    id="Female"
                    type="radio"
                    name="Female"
                    value="Female"
                  />
                  <label for="Female" className="text-xl text-white mx-2 ">
                    Female
                  </label>
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
                    required
                    className="px-5 py-2 rounded-md"
                    id="Kota"
                    name="Kota"
                    autoComplete="Kota"
                    onChange={(e) => setKota(e.target.value)}
                  >
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bogor">Bogor</option>
                    <option value="Depok">Depok</option>
                    <option value="Tanggerang">Tanggerang</option>
                    <option value="Bekasi">Bekasi</option>
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
                    required
                    className="px-5 py-2 rounded-md"
                    id="Provinsi"
                    name="Provinsi"
                    autoComplete="Provinsi"
                    onChange={(e) => setProvinsi(e.target.value)}
                  >
                    <option value="Jakarta">DKI Jakarta</option>
                    <option value="Jawa Barat">Jawa Barat</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              onClick={handleFormSubmit}
              type="submit"
              className="border border-blue-500 bg-blue-500 text-white rounded-lg py-3 font-semibold"
            >
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
  );
}

export default RegisterForm;
