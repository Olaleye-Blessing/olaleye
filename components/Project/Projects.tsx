import { FC } from "react";
import { Project } from "./../../components";
import { projects } from "../../utils/projects";
import { StyledProjects } from "./StyledProjects";
import { StyledSection } from "../Style/StyledHomeContent";
import Fade from "react-reveal/Fade";

const Projects: FC = () => {
  return (
    // @ts-expect-error Correct
    <StyledSection id="projects" aria-label="Projects' Section">
      <Fade top>
        <header className="section__header-main">
          <h2 className="section__header-main-head">PROJECTS</h2>
          <p>
            These are some of the projects I built to practice and get better at
            the technologies mentioned above.
          </p>
        </header>
      </Fade>
      <StyledProjects>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </StyledProjects>
      <p className="section__project-others">
        Check out my other{" "}
        <a
          href="https://portfolio-git-master-olaleye-blessing.vercel.app/projects.html"
          target="_blank"
          rel="noreferrer"
        >
          cool projects
        </a>{" "}
        I built when I started learning about web development.
      </p>
    </StyledSection>
  );
};

export default Projects;
