import styled from "styled-components";
import theme from "../../theme";

interface StatusChipProps {
  $paid?: boolean;
}

const medleyGreen = theme.colors.medleyGreen;
const medleyGray = theme.colors.medleyGray;

export const StatusChip = styled.div<StatusChipProps>`
  display: flex;
  padding: 2px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 600;

  border-radius: 6px;
  background-color: ${(props) =>
    props.$paid ? `${medleyGreen}` : `${medleyGray}`};
`;
