import { FC } from "react";
import Fade from "react-reveal/Fade";
import { activeTechs, familiarTechs } from "../utils/technologies";
import { StyledSubSection } from "./Style/StyledHomeContent";

const Technologies: FC = () => {
  return (
    <Fade right>
      <StyledSubSection className="section__content-skills">
        <header>
          <h3>Skills and Technologies</h3>
          <p>I&apos;m actively using and familiar with the following:</p>
        </header>
        <h4>Actively using</h4>
        <ul className="technologies">
          {activeTechs.map((tech, i) => (
            <li key={i} className="tech">
              {tech}
            </li>
          ))}
        </ul>

        <h4>Familiar with</h4>
        <ul className="technologies">
          {familiarTechs.map((tech, i) => (
            <li key={i} className="tech">
              {tech}
            </li>
          ))}
        </ul>
      </StyledSubSection>
    </Fade>
  );
};

export default Technologies;
