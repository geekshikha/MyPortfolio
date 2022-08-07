import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Coding from "../../assets/Coding.gif";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to my portfolio !</h1>
        <p>Full Stack Web Developer </p>
      </header>
      <div className="home-btns">
        <Link to="/about" className="btn btn-white">
          <p className="btn-text">Know more about me</p>
        </Link>
        <Link to="/contact" className="btn btn-transparent">
          <p className="btn-text">Connect with me</p>
        </Link>
      </div>
      <div className="splash-image">
        <img src={Coding} alt="Homepage anime" className="home-anime" />
      </div>
    </div>
  );
};

export default Home;
