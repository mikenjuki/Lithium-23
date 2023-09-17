import { FC } from "react";
import { TableContainer } from "./ui/TableContainer";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface TableProps {}

// Beginning of table
const Table: FC<TableProps> = () => {
  return (
    <div>
      <TableContainer>
        <TableHead />
        <TableBody />
      </TableContainer>
    </div>
  );
};

export default Table;
