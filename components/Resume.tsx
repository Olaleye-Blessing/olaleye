import { FC } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { StyledResume } from "./Style/StyledResume";

const Resume: FC = () => {
    return (
        <StyledResume
            href="https://resume.io/r/MtzvmHqJI"
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
