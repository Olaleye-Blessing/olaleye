import { FC, useState } from "react";
import { Project } from "../../interface";
import { StyledProject } from "./StyledProject";
import Link from "next/link";
import { Button, ProjectPreview } from "./../../components";

const Index: FC<Project> = ({
    heading,
    paragraphs,
    tech,
    live,
    source,
    src,
    youtubeUrl,
}) => {
    const [showPreview, setShowPreview] = useState(false);

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
                        <Button
                            text="Preview"
                            rest={{
                                onClick: () => setShowPreview((prev) => !prev),
                            }}
                        />
                    </div>
                </section>
                <div className="project__figures" aria-hidden="true">
                    <figure className="project__img"></figure>
                    <ProjectPreview
                        show={showPreview}
                        youtubeUrl={youtubeUrl}
                    />
                </div>
            </article>
        </StyledProject>
    );
};

export default Index;
