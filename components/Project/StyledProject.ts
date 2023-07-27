import styled from "styled-components";
import { Project } from "../../interface";

export const StyledProject = styled.li`
  margin-bottom: 8rem;
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
    flex-direction: column;
    position: relative;
    height: 100%;
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

    &__details {
      height: 100%;
    }

    &__links {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-flow: row wrap;

      a {
        font-size: 1.4rem;
        padding: 0.5rem 2rem 0.6rem;
        /* color: var(--color-red-100); */
        position: relative;
        transition: all 0.3s linear;

        &:hover {
          text-decoration: none;
        }

        &:first-child {
          margin-right: 2rem;
        }

        &:nth-child(2) {
          margin-right: auto;
        }
      }

      button {
        padding: 0.7rem 1.8rem 0.9rem;
        font-size: 1.4rem;
        cursor: pointer;
      }

      a,
      button {
        margin-bottom: 2rem;
      }
    }

    &__figures {
      width: 100%;
    }

    &__img {
    }

    &__review {
      transition: all 0.3s linear;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 0;
      opacity: 0;

      &.show {
        height: 70%;
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: 769px) {
    margin-bottom: 0;
    height: 100%;

    &:nth-child(even) {
      article {
      }
    }

    article {
      align-items: stretch;
    }

    .project {
      &__details {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &__figures {
      }

      &__img {
        width: 100%;
      }
    }
  }
`;
