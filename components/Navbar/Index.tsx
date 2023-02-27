import { createRef, FC, useEffect, useRef } from "react";
import { HomeLogo, Toggle } from "..";
import { Links } from "./links";
import { StyledNav } from "./StyledNav";
import Link from "next/link";

const Index: FC = () => {
  const navRef = useRef() as React.MutableRefObject<HTMLElement>;
  let hamburgerRef = createRef<HTMLButtonElement>();
  let listRef = useRef<HTMLUListElement | null>(null);

  const closeHamburger = () => {
    let btn = hamburgerRef.current!;
    let list = listRef.current!;

    btn.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
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
      btn.setAttribute("aria-expanded", "true");
      list.classList.add("active");
    }
  };

  useEffect(() => {
    const addNavBackgroundOnScroll = () => {
      let height = window.pageYOffset;
      let nav = navRef.current;

      height > 80
        ? nav.classList.add("scrolled")
        : nav.classList.remove("scrolled");
    };

    window.addEventListener("scroll", addNavBackgroundOnScroll);

    return () => {
      window.removeEventListener("scroll", addNavBackgroundOnScroll);
    };
  }, []);

  return (
    <StyledNav className="" ref={navRef}>
      <div className="container nav__container">
        <div className="nav__logo">
          <HomeLogo />
        </div>
        <Toggle
          ref={hamburgerRef}
          onClick={toggleHamburger}
          rest={{
            className: "nav__toggle",
            "aria-label": "toggle navbar links",
            "aria-controls": "menu",
            "aria-expanded": false,
          }}
        />
        <ul className="nav__list" ref={listRef} id="menu">
          {Links.map(({ path, text }) => (
            <li key={path} className="nav__lists">
              <Link href={path}>
                <a
                  className="nav__links"
                  onClick={closeHamburger}
                  target={text === "BLOG" ? "_blank" : "_self"}
                  rel={text === "BLOG" ? "noopener noreferrer" : ""}
                >
                  {text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledNav>
  );
};

export default Index;
