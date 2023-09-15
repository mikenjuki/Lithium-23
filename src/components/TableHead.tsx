import styled from "styled-components";
import { CommonTitle } from "./ui/CommonTitle";
import { TitleChip } from "./ui/TitleChip";
import Search from "./SearchComponent";

const TableHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
      <Search />
    </TableHeading>
  );
};

export default TableHead;
