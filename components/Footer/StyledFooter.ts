import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: var(--color-black-200);
    background-color: var(--color-black-100);
    padding-top: 6rem;
    padding-bottom: 6rem;
    margin-top: 3rem;

    .container {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 2rem;
    }

    section {
        &:first-child {
            margin-top: -0.7rem;
            margin-bottom: 1.8rem;

            p {
                padding-left: 0.5rem;
            }
        }
        &:last-child {
        }
    }

    a {
        color: var(--color-gray-600);

        &:hover {
            color: var(--color-red-100);
        }
    }

    .footer {
        &__socials {
            margin-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            li {
                margin-right: 2rem;
                font-size: 2.2rem;
            }
        }

        &__contact {
            &-gmail {
                a {
                    display: flex;
                    align-items: center;

                    figure {
                        margin-top: 0.4rem;
                        margin-right: 0.3rem;
                    }
                }
            }
        }
    }
`;
