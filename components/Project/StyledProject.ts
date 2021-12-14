import styled from "styled-components";
import { Project } from "../../interface";

type StyledProps = Pick<Project, "src">;

const projectBg = (src: string) => {
    return `/static/images/projects/${src}.webp`;
};

export const StyledProject = styled.li<StyledProps>`
    margin-bottom: 15rem;
    box-shadow: var(--box-shadow-md);
    background-color: var(--color-black-200);
    width: 100%;
    max-width: 53rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: var(--border-rad-md);
    overflow: hidden;

    &:last-child {
        margin-bottom: 5rem;
    }

    article {
        display: flex;
        flex-direction: column-reverse;
    }

    h3 {
        margin-bottom: 1rem;
    }

    p {
        color: var(--color-gray-800);
    }

    section {
        padding: 2.5rem 2.5rem;
    }

    .project {
        &__para {
            margin-bottom: 1rem;
        }

        &__links {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-flow: row wrap;

            a {
                font-size: 1.4rem;
                padding: 0.3rem 2rem 0.7rem;
                color: var(--color-red-100);
                position: relative;
                transition: all 0.3s linear;
                background-color: transparent;

                &:hover {
                    text-decoration: underline;
                }

                &:first-child {
                    margin-right: 2rem;
                }
            }
        }

        &__figures {
            width: 100%;
            height: 30rem;
            position: relative;

            &:hover {
                .project {
                    &__img {
                        opacity: 0;
                    }

                    &__video {
                        height: 100%;
                        opacity: 1;
                    }
                }
            }
        }

        &__img {
            background-image: url(${({ src }) => projectBg(src)});
            height: 100%;
            background-position: center;
            background-size: cover;
            transition: all 0.3s linear;
        }

        &__video {
            transition: all 0.3s linear;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 0;
            opacity: 0;

            video {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    @media screen and (min-width: 769px) {
        max-width: 85rem;

        &:nth-child(even) {
            article {
                flex-direction: row-reverse;
            }
        }

        article {
            flex-direction: row;
            align-items: stretch;
        }

        .project {
            &__details {
                width: 100%;
                height: auto;
                flex: 3;
            }

            &__figures {
                height: auto;
                flex: 5;
            }

            &__img {
            }
        }
    }
`;
