import { FC } from "react";
import { StyledHomeLogo } from "./Style";
import Link from "next/link";

const HomeLogo: FC = () => {
  return (
    <Link href="/" passHref>
      <StyledHomeLogo aria-label="Olaleye Blessing's Site logo" translate="no">
        B
      </StyledHomeLogo>
    </Link>
  );
};

export default HomeLogo;
