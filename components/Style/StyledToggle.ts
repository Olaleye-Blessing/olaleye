import styled from "styled-components";

const StyledToggle = styled.button`
  display: inline-block;
  cursor: pointer;

  &.active {
    .bar {
      background-color: var(--fg-primary) !important;

      &:nth-child(1) {
        transform: translateY(0.8rem) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: translateY(-0.8rem) rotate(-45deg);
      }
    }
  }

  .bar {
    display: inline-block;
    display: block;
    width: 2.5rem;
    height: 0.3rem;
    margin: 0.5rem auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      background-color: var(--color-gray-800);
    }
    &:nth-child(2) {
      background-color: var(--color-gray-700);
    }
    &:nth-child(3) {
      background-color: var(--color-gray-900);
    }
  }
`;

export default StyledToggle;
