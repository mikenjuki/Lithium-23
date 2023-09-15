import styled from "styled-components";
interface StatusChipProps {
  paid?: boolean;
}

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
    props.paid ? " #60ca57" : "rgba(111, 118, 126, 0.40)"};
`;
