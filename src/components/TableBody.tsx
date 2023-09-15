import styled from "styled-components";
import { StatusChip } from "./ui/StatusChip";
import { TableTR } from "./ui/TableTR";
import { TableTH } from "./ui/TableTH";
import { DataSpan } from "./ui/DataSpan";
import { connect } from "react-redux";
import {useEffect} from 'react';

const FlexTD = styled.td`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

const TableBody = ({ payouts }: { payouts: Payout[] }) => {

useEffect(() => {
}, [payouts]);

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
          {payouts?.map((payout, i) => {
            return (
              <TableTR key={`${i}${payout.username}`} isEven={i % 2 === 0}>
                <td>
                  <DataSpan value={false}>{payout.dateAndTime}</DataSpan>
                </td>
                <td>{payout.username}</td>
                <FlexTD>
                  <StatusChip paid={payout.status !== 'Pending'}>{payout.status}</StatusChip>
                </FlexTD>
                <td><DataSpan value>{payout.value}</DataSpan></td>
              </TableTR>
            );
          })}

          {/* <TableTR isEven>
            <td>Fri, Apr 9, 18:03</td>
            <td>Michael</td>
            <FlexTD>
              <StatusChip paid>Paid</StatusChip>
            </FlexTD>
            <td>$12.00</td>
          </TableTR> */}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state: { app: any }) => {
  const {
    app: { payouts },
  } = state;
  return {
    payouts
  };
};
export default connect(mapStateToProps, null)(TableBody);
