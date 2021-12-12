import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 100%;
    min-height: 60vh;
    max-height: 35rem;

    z-index: 100;
    background-image: linear-gradient(0deg, var(--home-bg), var(--home-bg-sec));
    padding: 8rem 1.2rem;
    display: flex;
    flex-flow: column wrap;

    @media screen and (min-width: 481px) {
        padding-left: calc(1.2rem + 4vw);
        padding-right: calc(1.2rem + 4vw);
    }

    h1,
    p {
        max-width: 50rem;
    }

    .header {
        &__greeting,
        &__name {
            display: block;
        }

        &__greeting {
            font-size: 1.5rem;
        }

        &__name {
            font-size: 3.3em;
            line-height: 1.3;
            margin-top: 1rem;
            margin-bottom: 1.2rem;
        }

        &__intro {
            font-size: 1.6rem;
            color: var(--color-gray-800);
        }
    }
`;

export const MainPage = styled.main`
    margin-top: 5rem;

    @media screen and (min-width: 481px) {
        padding-left: calc(1.2rem + 4vw);
        padding-right: calc(1.2rem + 4vw);
    }
`;

export const StyledSection = styled.section`
    padding: 1rem 2rem;

    .section {
        &__header {
            &-main {
                margin-bottom: 3rem;
                text-align: center;

                &-head {
                    position: relative;
                    width: max-content;
                    margin: 0 auto 1rem;

                    &::after {
                        content: "";
                        display: block;
                        position: absolute;
                        bottom: -0.2rem;
                        left: 0;
                        right: 0;
                        height: 0.1rem;
                        width: 45%;
                        margin-right: auto;
                        margin-left: auto;
                        background-color: red;
                    }
                }

                p {
                    font-size: 1.5rem;
                    color: var(--color-gray-600);
                }
            }
        }
    }
`;

export const StyledSubSection = styled.section`
    margin-bottom: 5rem;
    /* background-color: red; */

    h3 {
        text-align: left;
        font-size: 2.1rem;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
        opacity: 0.8;
    }
`;
