import styled, { css } from "styled-components";
// Modulare tr to be extended
// Has props to differentiate even rows from odd ones
interface TableRowProps {
  $isEven?: boolean;
  $customStyle?: string;
}

export const TableRow = styled.tr<TableRowProps>`
  ${(props) => css`
    ${props.$customStyle}
  `}
  background-color: ${(props) =>
    props.$isEven ? "" : "rgba(244, 244, 244, 0.50)"};
`;
