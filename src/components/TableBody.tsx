import styled from "styled-components";
import { StatusChip } from "./ui/StatusChip";
import { TableTR } from "./ui/TableTR";
import { TableTH } from "./ui/TableTH";
import { DataSpan } from "./ui/DataSpan";

const FlexTD = styled.td`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const TableBody = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>
              <TableTH>
                <DataSpan>Date & Time</DataSpan>
              </TableTH>
            </td>
            <td>
              <TableTH>Username</TableTH>
            </td>
            <td>
              <TableTH>Status</TableTH>
            </td>
            <td>
              <TableTH>Value</TableTH>
            </td>
          </tr>
        </thead>
        <tbody>
          <TableTR>
            <td>
              <DataSpan>Fri, Apr 9, 18:03</DataSpan>
            </td>
            <td>Michael</td>
            <FlexTD>
              <StatusChip>Pending</StatusChip>
            </FlexTD>
            <td>$12.00</td>
          </TableTR>
        </tbody>
      </table>
    </>
  );
};

export default TableBody;
