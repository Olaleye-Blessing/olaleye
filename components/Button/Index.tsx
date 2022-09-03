import { FC } from "react";
import { StyledButton } from "./StyledButton";

interface Props {
  text: string;
  rest?: Object;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Index: FC<Props> = ({
  text,
  className = "",
  onClick,
  disabled,
  rest,
}) => {
  return (
    <StyledButton
      {...rest}
      className={`btn__primary ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Index;
