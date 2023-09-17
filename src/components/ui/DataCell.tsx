import styled, { css } from "styled-components";

interface DataCellProps {
  $customStyle?: string;
  $first?: boolean;
  $highlight?: boolean;
}

export const DataCell = styled.td<DataCellProps>`
  color: #1a1d1f;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;

  padding-left: ${(props) => (props.$first ? "24px" : "")};

  ${(props) => props.$highlight && `color: #6f767e;`}

  ${(props) =>
    css`
      ${props.$customStyle}
    `}

    /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 20px;
  }

  /* Media query for smaller screens */
  @media screen and (max-width: 480px) {
    font-size: 8px;
    line-height: 10px;
  }
`;
