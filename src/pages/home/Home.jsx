import React from "react";
import Profile from "../../assets/home.jpg";
import profile from "../../assets/profile-home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Javier Holguin </span>
            Full Stack Developer
          </h1>
          <p className="home__description">
            I have a constant learning mentality and a great ability to work in
            a team. I am willing to take on new challenges and quickly acquire
            new technological skills. I am excited to collaborate with and learn
            from more experienced professionals as I develop my career as a Full
            Stack Junior programmer.
          </p>

          <Link to="/about" className="button button--flex">
            More about me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
