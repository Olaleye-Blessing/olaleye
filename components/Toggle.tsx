import { forwardRef, MouseEventHandler } from "react";
import { StyledToggle } from "./Style";

export interface IToggle {
  onClick: MouseEventHandler<HTMLButtonElement>;
  rest?: Object;
}

const Toggle = forwardRef<HTMLButtonElement, IToggle>(
  ({ onClick, rest }, ref) => {
    return (
      // @ts-expect-error Correct
      <StyledToggle ref={ref} onClick={onClick} {...rest}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </StyledToggle>
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
