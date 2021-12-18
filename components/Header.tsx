import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { StyledHeader } from "./Style/StyledHomeContent";
import headerBg from "./../public/static/images/header.svg";

const Header: FC = () => {
    return (
        <StyledHeader className="">
            <div className="container">
                <div className="header__content">
                    <h1>
                        <span className="header__greeting">
                            Hello Stranger! I&apos;m{" "}
                        </span>
                        <span className="header__name">Olaleye Blessing,</span>
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
    );
};

export default Header;
