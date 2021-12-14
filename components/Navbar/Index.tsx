import { createRef, FC, Ref, useRef } from "react";
import { HomeLogo, Toggle } from "..";
import { Links } from "./links";
import { StyledNav } from "./StyledNav";
import Link from "next/link";

const Index: FC = () => {
    let hamburgerRef = createRef<HTMLButtonElement>();
    let listRef = useRef<HTMLUListElement | null>(null);

    const closeHamburger = () => {
        let btn = hamburgerRef.current!;
        let list = listRef.current!;

        btn.classList.remove("active");
        list.classList.remove("active");
    };

    const toggleHamburger = () => {
        let btn = hamburgerRef.current!;
        let list = listRef.current!;

        let open = btn.classList.contains("active");

        if (open) {
            closeHamburger();
        } else {
            btn.classList.add("active");
            list.classList.add("active");
        }
    };

    return (
        <StyledNav className="">
            <div className="container nav__container">
                <div className="nav__logo">
                    <HomeLogo />
                </div>
                <ul className="nav__list" ref={listRef}>
                    {Links.map(({ path, text }) => (
                        <li key={path} className="nav__lists">
                            <Link href={path}>
                                <a
                                    className="nav__links"
                                    onClick={closeHamburger}
                                >
                                    {text}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Toggle
                    ref={hamburgerRef}
                    onClick={toggleHamburger}
                    rest={{ className: "nav__toggle" }}
                />
            </div>
        </StyledNav>
    );
};

export default Index;
