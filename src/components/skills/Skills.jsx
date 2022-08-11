import React from "react";
import "./skills.css";
import { FaChessKing } from "react-icons/fa";
const Skills = () => {
  return (
    <section id="skills">
      <h5>The Knowledge I've Gained</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills__languages">
          <h3>Languages</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>C++</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>R</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>Haskell</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__other">
          <h3>Other</h3>
          <div className="skills__content">
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>LaTeX</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>WSL/Ubuntu</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>Notion</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>Microsoft Excel</h4>
              </div>
            </article>
            <article className="skills__details">
              <FaChessKing />
              <div>
                <h4>Microsoft OneNote</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
