import React from "react";
import "./portfolio.css";
import PROJ1 from "../../assets/project1image.png";
import PROJ2 from "../../assets/project2image.png";
import PROJ3 from "../../assets/project3image.png";
import PROJ4 from "../../assets/project4image.png";
import PROJ5 from "../../assets/project5image.png";
import PROJ6 from "../../assets/project6image.png";

const projectData = [
  {
    id: 1,
    image: PROJ1,
    title: "PERSONAL PORTFOLIO",
    description: "You're looking at it right now.",
    languages: "React.js, node.js, JavaScript, CSS, HTML, JSX, EmailJS",
    github: "https://github.com/jerryli65/me",
  },
  {
    id: 2,
    image: PROJ2,
    title: "GROCEREZ",
    description:
      "App that uses a combination of web-scraping and crowd-sourcing to determine which store could fulfill your grocery list for the cheapest total.",
    languages: "Python, Java, TypeScript, Selenium",
    github: "https://github.com/aggie-coding-club/GrocerEZ",
  },
  {
    id: 3,
    image: PROJ3,
    title: "SETITAIRE",
    description:
      "A GUI of an original card game created for practicing the popular game SET.",
    languages: "Java, JavaFX, SceneBuilder",
    github: "https://github.com/jerryli65/SETitaire",
  },
  {
    id: 4,
    image: PROJ4,
    title: "ANARCHIST CHESS",
    description:
      "A chess variant containing fun mechanics unofficially representing an online community.",
    languages: "Python, Tkinter",
    github: "https://github.com/jerryli65/Anarchist-Chess",
  },
  {
    id: 5,
    image: PROJ5,
    title: "DIBOT",
    description:
      "A Discord Robot that retrieves information and statistics related to Drum Corps international. Responsive to user command.",
    languages: "JavaScript, discord.js",
    github: "https://github.com/jerryli65/Discord-Bot",
  },
  {
    id: 6,
    image: PROJ6,
    title: "AUTONOMOUS ROBOTICS PATH PLANNING VISUALIZATION",
    description:
      "Modelling the movement of autonomous robots in the VEX contest, used for visualization and calculations. NOT OFFICIAL SOURCE CODE FOR THE TEXAS A&M ROBOTICS TEAM. ",
    languages: "C++, Python, matplotlib",
    github: "https://github.com/jerryli65/AROSPathPlanning/tree/my-dev",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>The Projects I've Created</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projectData.map(
          ({ id, image, title, description, languages, github }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="project image" />
                </div>
                <h4>{title}</h4>
                <br />
                <p>{description}</p>
                <br />
                <p>Technologies: {languages}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn-github" target="_blank">
                    GitHub
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
