import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding: 1.4rem 1.2rem 1.8rem;
    z-index: 120;
    box-shadow: var(--box-shadow-md);
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--bg-blurred);

    .nav {
        &__list {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 0;
            overflow: hidden;
            transition: all 0.3s linear;
        }

        &__lists {
        }

        &__links {
        }

        &__toggle {
            margin-left: auto;
        }
    }

    @media screen and (max-width: 481px) {
        .nav {
            &__list {
                position: absolute;
                top: 5.75rem;
                left: 0;
                width: 100%;
                background-color: var(--bg-main);
                background-image: linear-gradient(
                    360deg,
                    var(--home-bg),
                    var(--home-bg-sec)
                );

                &.active {
                    height: calc(100vh - 5.9rem);

                    .nav {
                        &__lists {
                            transform: translateY(0);
                        }
                    }
                }
            }

            &__lists {
                margin-bottom: 2rem;
                transition: all 0.3s linear;

                &:nth-child(1) {
                    transition-delay: 0.3s;
                    transform: translateY(-15rem);
                }
                &:nth-child(2) {
                    transition-delay: 0.2s;
                    transform: translateY(-22rem);
                }
                &:nth-child(3) {
                    transition-delay: 0.1s;
                    transform: translateY(-29rem);
                }
                &:nth-child(4) {
                    transition-delay: 0s;
                    transform: translateY(-36rem);
                }
            }

            &__links {
                font-size: calc(2.1rem + 3.5vw);
            }
        }
    }

    @media screen and (min-width: 481px) {
        padding-left: calc(1.2rem + 4vw);
        padding-right: calc(1.2rem + 4vw);

        .nav {
            &__list {
                margin-left: auto;
                position: static;
                height: auto;
                background-color: transparent;
                background-image: none;
                flex-direction: row;
                justify-content: flex-end;
                gap: calc(1rem + 1vw);
            }

            &__lists {
                transform: translateY(0) !important;
                margin-bottom: 0;
            }

            /* &__links {
                font-size: 1.8rem;
            } */

            &__toggle {
                display: none;
            }
        }
    }

    @media screen and (min-width: "769px") {
        /* padding-left: calc(13rem + 3vw);
        padding-right: calc(13rem + 3vw); */
    }
`;
