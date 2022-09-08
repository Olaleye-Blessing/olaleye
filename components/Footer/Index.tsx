import { FC } from "react";
import { HomeLogo } from "./../../components";
import { CgMail } from "react-icons/cg";
import { StyledFooter } from "./StyledFooter";
import Fade from "react-reveal/Fade";
import { socials } from "../../utils/socails";

const Index: FC = () => {
  return (
    <Fade bottom>
      <StyledFooter>
        <div className="container">
          <section>
            <HomeLogo />
            <p>Thanks for checking my portfolio.</p>
            <p>I&apos;m currently open to work.</p>
          </section>
          <section id="contact">
            <header>
              <h4>Contact Me</h4>
            </header>
            <ul className="footer__socials">
              {socials.map(({ Icon, href, label }, i) => (
                <li key={i}>
                  <a href={href} aria-label={`my ${label} profile`}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="footer__contact-gmail">
              <a href="mailto:olaleyedev@gmail.com">
                <figure aria-hidden="true">
                  <CgMail />
                </figure>
                <span>olaleyedev@gmail.com</span>
              </a>
              
            </p>
          </section>
        </div>
      </StyledFooter>
    </Fade>
  );
};

export default Index;
