import styled from "styled-components";

type TitleProps = {
  $ismain?: boolean;
  children: React.ReactNode;
};
//use any title element example h1, h2, h3... or use h2 as default
//just pass the heading element you want like this: as="h3"
export const Title = styled.h2<TitleProps>`
  color: ${(props) => (props.$ismain ? "#272B30" : "#1a1d1f")};
  font-weight: 600;
  font-size: ${(props) => (props.$ismain ? "40px" : "20px")};
  line-height: ${(props) => (props.$ismain ? "48px" : "32px")};
  letter-spacing: ${(props) => (props.$ismain ? "-0.8px" : "-0.4px")};

  /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.$ismain ? "30px" : "16px")};
    line-height: ${(props) => (props.$ismain ? "36px" : "24px")};
  }

  @media screen and (max-width: 480px) {
    font-size: ${(props) => (props.$ismain ? "25px" : "12px")};
    line-height: ${(props) => (props.$ismain ? "25px" : "12px")};
  }
`;
