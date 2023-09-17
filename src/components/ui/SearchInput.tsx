import React from "react";
import styled from "styled-components";
import theme from "../../theme";

// Modular input component
// To be extended as needed
interface StyledInputProps {
  // styling props
}

const medleyNeutralGray = theme.colors.medleyNeutralGray;

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  height: 2.25rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  border: none;
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: ${medleyNeutralGray};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    height: 1.8rem;
    font-size: 0.7rem;
  }

`;

// props to add to functionality of the input
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return <StyledInput className={className} ref={ref} {...props} />;
  }
);

Input.displayName = "Input";

export { Input };

