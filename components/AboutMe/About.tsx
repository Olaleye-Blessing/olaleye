import Link from "next/link";
import { FC } from "react";
import Fade from "react-reveal/Fade";
import { StyledSubSection } from "../Style/StyledHomeContent";

const About: FC = () => {
  return (
    <Fade left>
      {/* @ts-expect-error Correct */}
      <StyledSubSection className="section__content-about">
        <header>
          <h3>Want to know me?</h3>
        </header>
        <p>
          I&apos;m a <strong>Frontend Developer</strong> whose whole interest is
          building interactive, accessible, and responsive websites. My project
          section contains some beautiful websites I&apos;ve built.
        </p>
        <p>
          I&apos;m currently open to Job opportunities where I can contribute to
          your business and make your users happy. Contact me if you&apos;re
          interested in having a taste of my skills.
        </p>
        <Link href="/#contact">
          <a className="btn btn__primary">Contact Me</a>
        </Link>
      </StyledSubSection>
    </Fade>
  );
};

export default About;
