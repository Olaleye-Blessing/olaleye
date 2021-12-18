import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Projects, Resume } from "../components";
import {
    MainPage,
    StyledHeader,
    StyledSection,
    StyledSubSection,
} from "../components/Style/StyledHomeContent";
import { technologies } from "../utils/technologies";
import headerBg from "./../public/static/images/header.svg";
import Fade from "react-reveal/Fade";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Olaleye Blessing | Frontend Developer</title>
                <meta name="Author" content="Olaleye Blessing" />
                <meta
                    name="description"
                    content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
                />
                <meta name="twitter:creator" content="@OlaleyeBlessin" />
                <meta
                    name="twitter:title"
                    content="Olaleye Blessing | Frontend Developer"
                />
                <meta
                    name="twitter:description"
                    content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
                />
                <meta
                    property="og:description"
                    content="A passionate frontend developer focused on creating interactive, accessible and responsive websites"
                />
                <meta
                    property="og:title"
                    content="Olaleye Blessing | Frontend Developer"
                />
            </Head>
            <StyledHeader className="">
                <div className="container">
                    <div className="header__content">
                        <h1>
                            <span className="header__greeting">
                                Hello Stranger! I&apos;m{" "}
                            </span>
                            <span className="header__name">
                                Olaleye Blessing,
                            </span>
                        </h1>
                        <p className="header__intro">
                            a passionate frontend developer focused on creating
                            interactive, accessible and responsive websites.
                        </p>
                        <Link href="/#projects">
                            <a className="btn__primary btn">See My Work</a>
                        </Link>
                    </div>
                    <div className="header__svg" aria-hidden="true">
                        <Image alt="" src={headerBg} layout="responsive" />
                    </div>
                </div>
            </StyledHeader>
            <MainPage>
                <div className="container">
                    <StyledSection id="aboutme">
                        <Fade top>
                            <header className="section__header-main">
                                <h2 className="section__header-main-head">
                                    About Me
                                </h2>
                                <p>
                                    You will find a little intro about me and
                                    the skills and technologies I use daily.
                                </p>
                            </header>
                        </Fade>
                        <div className="section__content">
                            <Fade left>
                                <StyledSubSection className="section__content-about">
                                    <header>
                                        <h3>Want to know me?</h3>
                                    </header>
                                    <p>
                                        I&apos;m a{" "}
                                        <strong>Frontend Developer</strong>{" "}
                                        whose whole interest is building of
                                        interactive, accessible and responsive
                                        websites. My project section contains
                                        some beautiful website I&apos;ve built.
                                    </p>
                                    <p>
                                        I&apos;m currently opened to Job
                                        opportunities where I can contribute to
                                        your business and make your users happy.
                                        Contact me if you&apos;re interested in
                                        having a taste of my skills
                                    </p>
                                    <Link href="/#contact">
                                        <a className="btn btn__primary">
                                            Contact Me
                                        </a>
                                    </Link>
                                </StyledSubSection>
                            </Fade>
                            <Fade right>
                                <StyledSubSection className="section__content-skills">
                                    <header>
                                        <h3>Skills and Technologies</h3>
                                    </header>
                                    <ul className="technologies">
                                        {technologies.map((tech, i) => (
                                            <li key={i} className="tech">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </StyledSubSection>
                            </Fade>
                        </div>
                    </StyledSection>

                    <StyledSection id="projects">
                        <Fade top>
                            <header className="section__header-main">
                                <h2 className="section__header-main-head">
                                    PROJECTS
                                </h2>
                                <p>
                                    These are some of the projects I built to
                                    practice and get better in the technologies
                                    mentioned above.
                                </p>
                            </header>
                        </Fade>
                        <Projects />
                        <p className="section__project-others">
                            Check out my other{" "}
                            <a
                                href="https://portfolio-git-master-olaleye-blessing.vercel.app/projects.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                cool projects
                            </a>{" "}
                            I built when I started learning about web
                            development
                        </p>
                    </StyledSection>
                </div>
                <Resume />
            </MainPage>
        </>
    );
};

export default Home;
