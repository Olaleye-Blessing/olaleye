import styled from "styled-components";

export const StyledNav = styled.nav`
  padding-top: 1rem;
  padding-bottom: 1.3rem;
  z-index: 120;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &.scrolled {
    box-shadow: var(--box-shadow-md);
    background-color: var(--bg-blurred);
    background-color: rgba(14, 20, 27, 0.8);
    /* background-color: rgba(169, 185, 204, 0.5); */
    /* background-color: rgba(115, 130, 148, 0.3); */
  }

  .nav {
    &__container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 0;
      overflow: hidden;
      transition: all 0.3s linear;
    }

    &__lists {
    }

    &__links {
    }

    &__toggle {
      margin-left: auto;
    }
  }

  @media screen and (max-width: 481px) {
    .nav {
      &__list {
        position: absolute;
        top: 5.75rem;
        left: 0;
        width: 100%;
        background-color: var(--bg-main);
        background-image: linear-gradient(
          360deg,
          var(--home-bg),
          var(--home-bg-sec)
        );

        &.active {
          height: calc(100vh - 5.9rem);

          .nav {
            &__lists {
              transform: translateY(0);
            }
          }
        }
      }

      &__lists {
        margin-bottom: 2rem;
        transition: all 0.3s linear;

        &:nth-child(1) {
          transition-delay: 0.3s;
          transform: translateY(-15rem);
        }
        &:nth-child(2) {
          transition-delay: 0.2s;
          transform: translateY(-22rem);
        }
        &:nth-child(3) {
          transition-delay: 0.1s;
          transform: translateY(-29rem);
        }
        &:nth-child(4) {
          transition-delay: 0s;
          transform: translateY(-36rem);
        }
      }

      &__links {
        font-size: calc(2.1rem + 3.5vw);
      }
    }
  }

  @media screen and (min-width: 481px) {
    .nav {
      &__list {
        margin-left: auto;
        position: static;
        height: auto;
        background-color: transparent;
        background-image: none;
        flex-direction: row;
        justify-content: flex-end;
        gap: calc(1rem + 1vw);
      }

      &__lists {
        transform: translateY(0) !important;
        margin-bottom: 0;
      }

      &__toggle {
        display: none;
      }
    }
  }

  @media screen and (min-width: 769px) {
    /* position: fixed; */
  }
`;
