import styled from "styled-components";

export const StyledMain = styled.main`
  .contributions {
    &__loading,
    &__error {
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  .load-more {
    display: block;
    margin-right: auto;
    margin-left: auto;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
