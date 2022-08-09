import React from "react";
import Resume from "../../assets/Resume.pdf";

const CallToAction = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn btn-primary">
        RESUME
      </a>
      <a href="#contact" className="btn">
        Let's Talk
      </a>
    </div>
  );
};

export default CallToAction;
