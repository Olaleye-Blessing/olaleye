import styled from "styled-components";

export const StyledProjects = styled.ul`
  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    gap: 6rem 4rem;
    margin-bottom: 5rem;
  }
`;
