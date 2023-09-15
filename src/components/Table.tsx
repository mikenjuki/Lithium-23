import { FC } from "react";

import { MainTable } from "./ui/MainTable";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface TableProps {}

const Table: FC<TableProps> = () => {
  return (
    <MainTable>
      <TableHead />
      <TableBody />
    </MainTable>
  );
};

export default Table;
