import styled from "styled-components";

interface DataSpanProps {
  value: boolean;
}

export const DataSpan = styled.div<DataSpanProps>`
  padding-left: 24px;
  font-size: 14px;
  font-weight: 600;
  color: #6f767e;
  line-height: 24px;
  letter-spacing: -0.14px;
  ${
    (props) =>
    props.value && `
    color: #1A1D1F;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.14px;
    `
  }
`;
