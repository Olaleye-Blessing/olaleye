import { FC } from "react";
import { Project } from "./../../components";
import { projects } from "../../utils/projects";
import { StyledProjects } from "./StyledProjects";

const Projects: FC = () => {
    return (
        <StyledProjects>
            {projects.map((project, i) => (
                <Project key={i} {...project} />
            ))}
        </StyledProjects>
    );
};

export default Projects;
