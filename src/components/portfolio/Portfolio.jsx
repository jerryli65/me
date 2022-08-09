import React from "react";
import "./portfolio.css";
import PROJ1 from "../../assets/bg-2.png";
import PROJ2 from "../../assets/bg-3.png";
import PROJ3 from "../../assets/bg4.png";
import PROJ4 from "../../assets/bg5.png";
import PROJ5 from "../../assets/bg6small.png";

const projectData = [
  {
    id: 1,
    image: PROJ1,
    title: "Title",
    github: "https://github.com/",
  },
  {
    id: 2,
    image: PROJ2,
    title: "Title",
    github: "https://github.com/",
  },
  {
    id: 3,
    image: PROJ3,
    title: "Title",
    github: "https://github.com/",
  },
  {
    id: 4,
    image: PROJ4,
    title: "Title",
    github: "https://github.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>The Projects I've Created</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projectData.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
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
