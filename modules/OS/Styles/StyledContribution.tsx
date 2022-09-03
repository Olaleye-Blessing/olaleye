import styled from "styled-components";

export const StyledContributions = styled.ul`
  margin-top: 2rem;

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    border: 0.15rem solid var(--color-gray-600);
    border-radius: 1rem;
    padding: 1rem 1rem 1.2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* box-shadow: var(--box-shadow-md); */
  }

  figure {
    font-size: 1.8rem;
    margin-top: 0.2rem;
    margin-right: 0.5rem;
  }

  & .open {
    color: var(--issue-open);
  }

  & .completed,
  & .closed {
    color: var(--issue-completed);
  }

  & .not_planned {
    color: var(--color-gray-700);
  }

  a {
    color: var(--fg-primary);
    display: inline-block;
    margin-right: 0.6rem;

    &:hover,
    &:focus {
      color: var(--color-red-100);
      background-color: transparent;
    }
  }

  .reason {
    display: inline-block;
    margin-left: auto;
    font-size: 1.2rem;
    border: 0.1rem solid;
    border-radius: 1rem;
    padding: 0.4rem 0.8rem 0.5rem;
  }
`;
