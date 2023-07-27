import styled from "styled-components";

export const StyledHeader = styled.header`
  min-height: 75vh;
  background-image: linear-gradient(0deg, var(--home-bg), var(--home-bg-sec));
  padding-top: 8rem;
  padding-bottom: 8rem;
  display: flex;
  align-items: center;

  h1,
  p {
    max-width: 50rem;
  }

  a {
    width: max-content;
  }

  .header {
    &__content {
      display: flex;
      flex-flow: column wrap;
    }

    &__greeting,
    &__name {
      display: block;
    }

    &__greeting {
      font-size: 1.5rem;
      margin-bottom: calc(-0.5rem - 0.4vw);
      color: var(--color-gray-800);
    }

    &__name {
      font-size: calc(3rem + 4vw);
      font-size: clamp(2rem, 12vw, 9rem);
      line-height: 1.2;
      margin-top: 0.1rem;
      margin-bottom: 0.3rem;
    }

    &__intro {
      font-size: 1.6rem;
      color: var(--color-gray-800);
    }

    &__svg {
      display: none;
    }

    &__links {
      margin-top: 4rem;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: start;

      a {
        margin-bottom: 2rem;

        &:first-child {
          margin-right: 2rem;
        }
      }
    }
  }

  @media screen and (min-width: 481px) {
  }

  @media screen and (min-width: 769px) {
    min-height: 100vh;
    display: flex;
    padding: 0;

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 0;
      padding-bottom: 0;
    }

    .header {
      &__content {
        flex: 3;
      }
      &__svg {
        flex: 2;
        display: block;
        width: 100%;
        max-width: 40rem;
      }
    }
  }
`;

export const MainPage = styled.main`
  margin-top: 5rem;

  @media screen and (min-width: 481px) {
  }
`;

export const StyledSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  scroll-margin-top: 8rem;

  .section {
    &__content {
      display: grid;
      grid-template-columns: 1fr;

      &-about {
        max-width: 46rem;

        button {
          margin-top: 2rem;
        }
      }

      &-skills {
      }
    }

    &__header {
      &-main {
        margin-bottom: 5.4rem;
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
          max-width: 70rem;
          margin-right: auto;
          margin-left: auto;
        }
      }
    }

    &__project {
      &-others {
        /* background-color: #f555; */
        max-width: 53rem;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  @media screen and (min-width: 481px) {
    .section {
      &__content {
      }
    }
  }

  @media screen and (min-width: 769px) {
    .section {
      &__content {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
      }
      &__project {
        &-others {
          max-width: 85rem;
        }
      }
    }
  }
`;

export const StyledSubSection = styled.section`
  margin-bottom: 5rem;

  h3 {
    text-align: left;
    font-size: 2.1rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    opacity: 0.8;
  }

  h4 {
    /* margin-top: -0.5rem; */
  }
`;
