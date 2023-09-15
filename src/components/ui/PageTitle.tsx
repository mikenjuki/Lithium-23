import styled from "styled-components";

interface TitleProps {
  primary?: boolean;
}
export const PageTitle = styled.h1<TitleProps>`
  color: #272b30;
  font-size: 40px;
`;
