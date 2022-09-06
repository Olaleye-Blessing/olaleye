import styled from "styled-components";

export const StyledResume = styled.a`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.4rem 0.1rem 0.3rem 0.2rem;
  background-color: var(--color-gray-900);
  box-shadow: var(--box-shadow-md);
  transition: all 0.2s linear;
  z-index: 999;

  &:hover {
    transform: scale(1.1);
  }

  span {
    display: inline-block;
    height: 0;
    width: 0;
    overflow: hidden;
  }
`;
