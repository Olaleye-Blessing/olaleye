import { FC } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { StyledResume } from "./Style/StyledResume";

const Resume: FC = () => {
  return (
    <StyledResume
      href="https://docs.google.com/document/d/1u8sv0wNbkGsq2eGa3yHVyOvfn5x294Xsn10QhtdxAOg/edit"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>check my resume</span>
      <figure aria-hidden="true">
        <AiOutlineFilePdf />
      </figure>
    </StyledResume>
  );
};

export default Resume;
