import { createRef, FC, Ref, useRef } from "react";
import { HomeLogo, Toggle } from "..";
import { Links } from "./links";
import { StyledNav } from "./StyledNav";
import Link from "next/link";

const Index: FC = () => {
    let hamburgerRef = createRef<HTMLButtonElement>();
    let listRef = useRef<HTMLUListElement | null>(null);

    const toggleHamburger = () => {
        let btn = hamburgerRef.current!;
        let list = listRef.current!;

        let open = btn.classList.contains("active");

        if (open) {
            btn.classList.remove("active");
            list.classList.remove("active");
        } else {
            btn.classList.add("active");
            list.classList.add("active");
        }
    };

    return (
        <StyledNav>
            <div className="nav__logo">
                <HomeLogo />
            </div>
            <ul className="nav__list" ref={listRef}>
                {Links.map(({ path, text }) => (
                    <li key={path} className="nav__lists">
                        <Link href={path}>
                            <a className="nav__links">{text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
            <Toggle
                ref={hamburgerRef}
                onClick={toggleHamburger}
                rest={{ className: "nav__toggle" }}
            />
        </StyledNav>
    );
};

export default Index;
