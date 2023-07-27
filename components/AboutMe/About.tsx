import Link from "next/link";
import { FC } from "react";
import Fade from "react-reveal/Fade";
import { StyledSubSection } from "../Style/StyledHomeContent";

const About: FC = () => {
  return (
    <Fade left>
      <StyledSubSection className="section__content-about">
        <header>
          <h3>Want to know me?</h3>
        </header>
        <p>
          I&apos;m a <strong>Frontend Developer</strong> passionate about
          crafting interactive, accessible, and responsive websites. Check out
          my <a href="#projects">projects section</a> for some of the beautiful
          websites I&apos;ve built.
        </p>
        <p>
          I&apos;m currently open to Job opportunities where I can contribute to
          your business and create delightful user experiences. Feel free to
          contact me if you find my skills useful.
        </p>
        <Link href="/#contact">
          <a className="btn btn__primary">Contact Me</a>
        </Link>
      </StyledSubSection>
    </Fade>
  );
};

export default About;
