import { FC } from "react";
import { HomeLogo } from "./../../components";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { StyledFooter } from "./StyledFooter";
import Fade from "react-reveal/Fade";

const Index: FC = () => {
    let socials = [
        { href: "https://twitter.com/OlaleyeBlessin", Icon: AiOutlineTwitter },
        { href: "https://github.com/Olaleye-Blessing", Icon: AiFillGithub },
        {
            href: "https://www.linkedin.com/in/blessing-olaleye-139a22204/",
            Icon: FaLinkedinIn,
        },
    ];

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
                            <h5>Contact Me</h5>
                        </header>
                        <ul className="footer__socials">
                            {socials.map(({ Icon, href }, i) => (
                                <li key={i}>
                                    <a href={href}>
                                        <Icon />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <p className="footer__contact-gmail">
                            <a href="mailto:olayinkablexxy@gmail.com">
                                <figure>
                                    <CgMail />
                                </figure>
                                <span>olayinkablexxy@gmail.com</span>
                            </a>
                        </p>
                    </section>
                </div>
            </StyledFooter>
        </Fade>
    );
};

export default Index;
