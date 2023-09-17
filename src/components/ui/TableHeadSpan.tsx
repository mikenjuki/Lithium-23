import styled from "styled-components";
import theme from "../../theme";

// Project specific
// span used for the thead
interface THSpanProps {
  $first?: boolean;
  color?: keyof typeof theme.colors;
}

export const THSpan = styled.span<THSpanProps>`
  color: ${(props) =>
    props.color ? theme.colors[props.color] : theme.colors.medleyNeutralGray};
  padding-left: ${(props) => (props.$first ? "24px" : "")};

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.12px;
`;
