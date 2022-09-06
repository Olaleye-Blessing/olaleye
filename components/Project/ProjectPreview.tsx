import { FC } from "react";
import ReactPlayer from "react-player/youtube";
import { Project } from "./../../interface/index";

type IPreview = Pick<Project, "youtubeUrl">;

interface Preview extends IPreview {
  show: boolean;
}

const ProjectPreview: FC<Preview> = ({ show, youtubeUrl }) => {
  return (
    <figure
      aria-hidden="true"
      className={`project__review ${show ? "show" : ""}`}
    >
      <ReactPlayer
        url={youtubeUrl}
        width="100%"
        height="100%"
        volume={0}
        playing={show}
        loop={true}
        muted={true}
      />
    </figure>
  );
};

export default ProjectPreview;
