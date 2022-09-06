import { FC } from "react";
import Fade from "react-reveal/Fade";

const AboutHeader: FC = () => {
  return (
    <Fade top>
      <header className="section__header-main">
        <h2 className="section__header-main-head">About Me</h2>
        <p>
          You will find a little intro about me and the skills and technologies
          I use daily.
        </p>
      </header>
    </Fade>
  );
};

export default AboutHeader;
