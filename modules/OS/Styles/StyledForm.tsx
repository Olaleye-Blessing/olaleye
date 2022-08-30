import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 2rem;
  justify-content: space-between;

  .form__control {
    width: 100%;
    max-width: 20rem;
  }

  label {
    display: block;
    margin-bottom: 0.6rem;
  }

  select {
    appearance: none;
    display: block;
    width: 100%;
    padding: 0.8rem 0.8rem;
    text-transform: capitalize;
    background-color: transparent;
    position: relative;
    z-index: 2;
    color: var(--color-black-100);
  }

  .select-wrapper {
    position: relative;
    background-color: var(--fg-primary);
    box-shadow: inset 0.1rem 0.1rem 0.3rem var(--color-gray-600);
    border-radius: 0.5rem;

    &::after {
      position: absolute;
      content: "▼";
      font-size: 1.5rem;
      top: 0.7rem;
      right: 1rem;
      color: var(--color-black-200);
      z-index: 1;
    }
  }

  @media screen and (min-width: 500px) {
    .form__control {
      &:nth-child(2) {
        justify-self: end;
      }
    }
  }
`;
