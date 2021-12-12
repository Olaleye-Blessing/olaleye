import { FC } from "react";
import { StyledButton } from "./StyledButton";

interface Props {
    text: string;
    rest?: Object;
}

const Index: FC<Props> = ({ text, rest }) => {
    return (
        <StyledButton {...rest} className="btn__primary">
            {text}
        </StyledButton>
    );
};

export default Index;
