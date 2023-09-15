import styled from "styled-components";
import { CommonTitle } from "./ui/CommonTitle";
import { TitleChip } from "./ui/TitleChip";

const TableHeading = styled.div`
  display: flex;
  flex-direction: row;
`;

const TableTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const TableHead = () => {
  return (
    <TableHeading>
      <TableTitle>
        <TitleChip />
        <CommonTitle>Payout history</CommonTitle>
      </TableTitle>
      {/* Search component here */}
    </TableHeading>
  );
};

export default TableHead;
