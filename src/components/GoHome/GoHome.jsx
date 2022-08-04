import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import homeIconBlack from "../../assets/home_black.png";
import homeIconWhite from "../../assets/home_white.png";
import "./GoHome.css";

const GoHome = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const isHomePage = location.pathname === "/";
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <button
      className={`go-home-btn ${isHomePage ? "white-bkg" : "gradient-bkg"}`}
      onClick={navigateToHome}
    >
      <img
        className="home-icon"
        src={isHomePage ? homeIconBlack : homeIconWhite}
        alt="home-icon"
      />
    </button>
  );
};

export default GoHome;
