import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2.5+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            As a front-end developer with 3 years of experience, based in
            Toronto, Ontario, I am skilled in creating dynamic and user-friendly
            web applications using JavaScript and React. With experience in
            HTML, CSS, TailwindCSS, and feature flag-based deployment, I am
            proficient in building and deploying high-performing, scalable React
            applications. Additionally, my expertise in A/B testing, unit
            testing, and collaborating with multiple teams allows me to
            effectively communicate technical concepts to both technical and
            non-technical stakeholders. Passionate about technology, I am
            continuously seeking opportunities to expand my knowledge and
            expertise in React development while staying up-to-date with the
            latest development trends and technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
