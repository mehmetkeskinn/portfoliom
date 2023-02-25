import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio ",
    github: "https://github.com",
    demo: "https://mehmetkeskinn.github.io/portfoliom/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Password Generator ",
    github: "https://github.com/mehmetkeskinn/generatepassword",
    demo: "https://mehmetkeskinn.github.io/password/",
  },
  {
    id: 3,
    image: IMG3,
    title: "To Do List",
    github: "https://github.com/mehmetkeskinn/reacttodo",
    demo: "https://mehmetkeskinn.github.io/todolist/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
