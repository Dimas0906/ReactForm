import React from "react";
import { Link } from "react-router-dom";

import { FaCameraRetro } from "react-icons/fa";
// Pages

function Header() {
  return (
    <div>
      <div className="header flex justify-between items-center bg-gray-500 px-8 py-5">
        <div className="logo">
          <FaCameraRetro size="2em" />
        </div>
        <div className="login">
          <Link className="text-xl font-semibold" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
