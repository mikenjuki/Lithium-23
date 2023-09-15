import styled from "styled-components";

interface TableTRProps {
  isEven?: boolean;
}

export const TableTR = styled.tr<TableTRProps>`
  height: 48px;
  padding: 24px;
  background-color: ${(props) =>
    props.isEven ? "" : "rgba(244, 244, 244, 0.50)"};
`;
//rgba(244, 244, 244, 0.50)
