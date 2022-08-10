import React from "react";
import Resume from "../../assets/Resume.pdf";
import { BsDownload } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
const CallToAction = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn btn-primary">
        RESUME
        <br />
        <BsDownload />
      </a>
      <a href="#contact" className="btn">
        LET'S TALK
        <br />
        <BsChatDots />
      </a>
    </div>
  );
};

export default CallToAction;
