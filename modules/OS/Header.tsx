import React, { FC } from "react";
import styled from "styled-components";

const Header: FC = () => {
  return (
    <StyledHeader className="container">
      <h1>
        These are the list of contributions I&rsquo;ve made to open source
        projects.
      </h1>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;
