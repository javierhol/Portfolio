import React from "react";
import Info from "../../components/Info";
import Stast from "../../components/Stast";
import Skills from "../../components/Skills";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/javier-cv.pdf";
import { resume } from "../../data";
import ResumeItem from "../../components/ResumeItem";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__tittle">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              Download cv
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stast />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
        <div className="separator"></div>

        <section className="resume">
          <h3 className="section__subtitle subtitle__center">
            Experience & Education
          </h3>

          <div className="resume__container grid">
            <div className="resume__data">
              {resume.map((item) => {
                if (item.category === "experience") {
                  return <ResumeItem key={item.id} {...item} />;
                }
              })}
            </div>

            <div className="resume__data">
              {resume.map((item) => {
                if (item.category === "education") {
                  return <ResumeItem key={item.id} {...item} />;
                }
              })}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
