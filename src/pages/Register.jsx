import React from "react";

// Component
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Register() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Header />
      <div className="flex justify-center items-center mx-10">
        <div className="right w-1/2">
          <RegisterForm />
        </div>
      </div>
      <div className="mb-0">
        <Footer />
      </div>
    </div>
  );
}

export default Register;
