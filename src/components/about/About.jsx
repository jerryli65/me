import React from "react";
import "./about.css";
/* import some image of myself for this section*/
import { FaAward } from "react-icons/fa";
import { VscFolder } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__countainer">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src="" alt="" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0 years of experience</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0 years of experience</small>
            </article>

            <article className="about__card">
              <VscFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ projects completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cum
            autem repudiandae at, amet ab ducimus perspiciatis laudantium
            dolorum ratione dolorem. Nam quo atque quia dolorem quasi sint, et
            ipsam.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
