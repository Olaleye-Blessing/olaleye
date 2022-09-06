import { FC } from "react";
import { StyledSection } from "../Style/StyledHomeContent";
import { About, AboutHeader, Technologies } from "./../../components";

const Index: FC = () => {
  return (
    <StyledSection id="aboutme">
      <AboutHeader />
      <div className="section__content">
        <About />
        <Technologies />
      </div>
    </StyledSection>
  );
};

export default Index;
