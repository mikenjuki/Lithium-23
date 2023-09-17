import React from "react";
import styled, { css } from "styled-components";
import theme from "../../theme";

// Button component for the whole app
interface StyledButtonProps {
  $variant?: "default" | "destructive" | "outline" | "secondary";
}

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  padding: 10px;
  height: 2rem;

  background-color: ${theme.colors.medleyPurple};
  color: ${theme.colors.medleyWhite};

  &:hover {
    background-color: #2980b9;
  }

  ${(props) =>
    props.$variant === "destructive" &&
    css`
      background-color: #e74c3c;
      color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: #c0392b;
      }
    `}

  ${(props) =>
    props.$variant === "outline" &&
    css`
      background-color: transparent;
      border: 1px solid #000;
      color: #000;
      box-shadow: none;

      &:hover {
        background-color: #000;
        color: #fff;
      }
    `}

  /* Secondary Variant */
  ${(props) =>
    props.$variant === "secondary" &&
    css`
      background-color: #95a5a6;
      color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      &:hover {
        background-color: #7f8c8d;
      }
    `}

    //  /* Media query for smaller screens */
  @media screen and (max-width: 820px) {
    font-size: 10px;
  }
  @media screen and (max-width: 570px) {
    font-size: 6px;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  ...props
}) => {
  return <StyledButton className={className} $variant={variant} {...props} />;
};

export default Button;
