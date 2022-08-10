import React from "react";
import "./about.css";
/* import some image of myself for this section*/
import { FaAward } from "react-icons/fa";
import { VscFolder } from "react-icons/vsc";
import { TbHeartHandshake } from "react-icons/tb";
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
              <h5>Professional Experience</h5>
              <small>2 Years into a B.S. of Computer Science </small>
              <br />
              <small>6 Months of Research</small>
              <br />
              <small>3 Months of Pedagogy</small>
            </article>

            <article className="about__card">
              <TbHeartHandshake className="about__icon" />
              <h5>Leadership and Service</h5>
              <small>Committee Member, TAMU ENGR Honors</small>
              <br />
              <small>Sofware Documentation Lead, TAMU Robotics</small>
              <br />
              <small>Team Lead, The BIG Event Volunteering Group</small>
            </article>

            <article className="about__card">
              <VscFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ projects completed</small>
            </article>
          </div>

          <h1>HOWDY!</h1>
          <div className="about__paragraphs">
            <p>
              I am Jerry Li, a 20-year old computer science student from Austin,
              TX. I currently study at Texas A&M University in College Station,
              TX where I am pursuing my Bachelor in Computer Science along with
              minors in mathematics and philosophy.
            </p>
            <br />
            <p className="shifted">
              In my time formally studying computer science, I have contributed
              to a research team revolving around data science and statistics. I
              pioneered an improved attention to source control and
              documentation, something that will help the team long after I am
              gone. I also have worked as an instructor for younger students
              just getting introduced to computer science and technology.
              Service is my passion, and sharing the excitement of programming
              and logic has given me opportunities to learn much I never
              expected.
            </p>
            <p>
              <br />
              My favorite way to grasp new technologies, many of which I
              self-study, is through creating projects. In fact, this website
              was the result of less than a week of self-studying React! I
              appreciate the way projects allow me to express myself and answer
              the question "I wonder if this is possible?" both in computing and
              in self. You are invited to view my GitHub account at
              github/jerryli65.
            </p>
            <br />
            <p className="shifted">
              I spend a majority of my downtime in college contributing to the
              Engineering Honors Program. I am involved in making big decisions
              for the honors dorm halls as well as planning events for first
              year students. I regularly meet with department advisors and other
              shareholders including the namesake and Steering Council for the
              program. This is a program that has given me many opportunities,
              mostly in the form of knowledge and meeting inspirational students
              my age (and sometimes younger!) I am currently serving as a Fellow
              aboard the EH Committee for the second year.
            </p>
          </div>
          <br />
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
