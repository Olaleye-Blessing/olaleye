import { FC, MouseEventHandler, RefObject, useRef, useState } from "react";
import { Project } from "../../interface";
import { StyledProject } from "./StyledProject";
import { Button, ProjectPreview } from "./../../components";
import Image from "next/image";

const Index: FC<Project> = ({
  heading,
  paragraphs,
  tech,
  live,
  source,
  youtubeUrl,
  image,
  name,
}) => {
  const projectRef = useRef<null | HTMLElement>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview: MouseEventHandler<HTMLButtonElement> = () => {
    setShowPreview((prev) => !prev);
    let projectContainer = projectRef.current!;

    // scroll screen to place attention on the preview video when user wants to check preview
    if (!showPreview) projectContainer.scrollIntoView(false);
  };

  return (
    <StyledProject>
      <article ref={projectRef}>
        <div className="project__figures">
          <figure
            className="project__img"
            style={{ backgroundImage: `url(${image})` }}
          />
          {youtubeUrl && (
            <ProjectPreview show={showPreview} youtubeUrl={youtubeUrl} />
          )}
        </div>
        <section className="project__details">
          <header>
            <h3>{heading}</h3>
          </header>
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="project__para">
              {paragraph}
            </p>
          ))}
          <ul aria-label="technologies used" className="technologies">
            {tech.map((t) => (
              <li key={t} className="tech">
                {t}
              </li>
            ))}
          </ul>
          <div className="project__links">
            <a
              className="btn btn__secondary"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
            <a
              className="btn btn__secondary"
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
            {youtubeUrl && (
              <Button
                text="Preview"
                rest={{
                  onClick: handlePreview,
                }}
              />
            )}
          </div>
        </section>
        {/* <div className="project__figures">
                    <figure className="project__img">
                        <Image
                            src={image}
                            alt={`${name}'s screenshot`}
                            layout="responsive"
                        />
                    </figure>
                    {youtubeUrl && (
                        <ProjectPreview
                            show={showPreview}
                            youtubeUrl={youtubeUrl}
                        />
                    )}
                </div> */}
      </article>
    </StyledProject>
  );
};

export default Index;
