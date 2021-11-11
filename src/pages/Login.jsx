import React from "react";

// Component
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <LoginForm />
    </div>
  );
}

export default Login;
