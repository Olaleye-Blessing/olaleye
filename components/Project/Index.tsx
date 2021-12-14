import { FC } from "react";
import { Project } from "../../interface";
import { StyledProject } from "./StyledProject";
import Link from "next/link";

const Index: FC<Project> = ({
    heading,
    // image,
    paragraphs,
    tech,
    // video,
    live,
    source,
    src,
}) => {
    return (
        <StyledProject src={src}>
            <article>
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
                        <Link href={live}>
                            <a className="btn__primary">Live</a>
                        </Link>
                        <Link href={source}>
                            <a className="btn__primary">Source</a>
                        </Link>
                    </div>
                </section>
                <div className="project__figures">
                    <figure className="project__img"></figure>
                    <figure className="project__video">
                        <video playsInline autoPlay muted loop>
                            <source
                                src={`/static/videos/projects/${src}.mp4`}
                                type="video/mp4"
                            />
                            <source
                                src={`/static/videos/projects/${src}.webm`}
                                type="video/webm"
                            />
                        </video>
                    </figure>
                </div>
            </article>
        </StyledProject>
    );
};

export default Index;
