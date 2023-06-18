import React from "react";
import { Link } from "react-router-dom";

const AuthLink = ({ path, name, setSwitchValue, val }) => {
  return (
    <div
      className="w-28 sm:w-40 flex z-10"
      onClick={(e) => {
        setSwitchValue(val);
        console.log(e.target.getBoundingClientRect());
      }}
    >
      <Link to={path} className="auth-link">
        {name}
      </Link>
    </div>
  );
};

export default AuthLink;
