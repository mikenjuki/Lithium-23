import { FC, useEffect, useState } from "react";
import { THSpan } from "./ui/TableHeadSpan";
import { DataCell } from "./ui/DataCell";
import { StatusChip } from "./ui/StatusChip";
import { TableRow } from "./ui/TableRow";
import { setPayouts, useFetchDataQuery } from "../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Pagination from "./ui/Pagination";
import moment from "moment";

import Spinner from "../assets/loader.svg";
import EmptyImage from "../assets/empty.png";
import { Title } from "./ui/Title";

// Table head titles
const tableData: string[] = ["Date & Time", "Username", "Status", "Value"];

//Table
//This displays data from the store and API
const TableBody: FC = () => {
  const itemsPerPage = 10;

  // Call api RTK query directly
  const {
    data: { data: initialData = [] } = {} as InitialData,
    isError,
    isLoading,
  } = useFetchDataQuery();
  const dispatch = useDispatch();
  const [dataToDisplay, setDataToDisplay] = useState<Payout[]>([]);
  const [currentData, setCurrentData] = useState<Payout[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Get data from redux store data
  const payoutsFromStore = useSelector(
    (state: { payouts: PayoutStore }) => state.payouts.payouts
  );
  const payoutsFromSearch = useSelector(
    (state: { payouts: PayoutStore }) => state.payouts.searchResults
  );
  const isSearchEmpty = useSelector(
    (state: { payouts: PayoutStore }) => state.payouts.isSearchEmpty
  );

  // modify data in the redux store
  useEffect(() => {
    if (initialData && initialData.length !== 0) {
      dispatch(setPayouts(initialData));
    }
  }, [initialData]);

  //setting data to be displayed, and modifying format and pagination
  useEffect(() => {
    if (isSearchEmpty && payoutsFromStore) {
      const formatedData = dateFormater(payoutsFromStore);
      setDataToDisplay(formatedData);
      paginate(formatedData);
    } else if (!isSearchEmpty && payoutsFromSearch) {
      const formatedData = dateFormater(payoutsFromSearch);
      setDataToDisplay(formatedData);
      paginate(formatedData);
    }
  }, [payoutsFromStore, payoutsFromSearch, isSearchEmpty]);

  ///Handles pagination by limiting number of displayed data
  const paginate = (dataToDisplay: Payout[]) => {
    setCurrentPage(1);

    if (dataToDisplay.length <= itemsPerPage) {
      setCurrentData(dataToDisplay);
    } else {
      setCurrentData(dataToDisplay.slice(0, 10));
    }
  };

  const handlePageChange = (nextPage: number) => {
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPage(nextPage);
    setCurrentData(dataToDisplay.slice(startIndex, endIndex));
  };

  //I used moment js to modify date according to design
  const dateFormater = (data: Payout[]) => {
    const formatedData = data.slice().map((payout) => {
      return {
        ...payout,
        dateAndTime: moment(payout.dateAndTime).format("ddd, MMM D, HH:mm"),
      };
    });
    return formatedData;
  };

  //initial fetch error and loading
  if (isLoading) {
    return (
      <div className="feedback-image">
        <img src={Spinner} alt="loading-spinner" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="feedback-image">
        <img src={EmptyImage} alt="Error display" />
        <Title as="h3">Uh Oh, our bad!</Title>
      </div>
    );
  }

  return (
    //Table component
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {tableData.map((name, i) => {
              return (
                <DataCell as="th" key={i}>
                  <THSpan $first={i === 0}>{name}</THSpan>
                </DataCell>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {currentData?.map((payout: Payout, i: number) => {
            return (
              <TableRow
                $isEven={i % 2 === 0}
                $customStyle="height: 48px; padding: 24px;
              "
                key={`${i}`}
              >
                <DataCell $first $highlight data-cell="date">
                  {payout.dateAndTime}
                </DataCell>
                <DataCell data-cell="name">{payout.username}</DataCell>

                <DataCell
                  $customStyle="display: flex; align-items: center; padding: 10px 0;"
                  data-cell="status"
                >
                  <StatusChip $paid={payout.status !== "Pending"}>
                    {payout.status}
                  </StatusChip>
                </DataCell>
                <DataCell data-cell="value">{payout.value}</DataCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <Pagination
            totalPages={Math.ceil(dataToDisplay.length / itemsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </tfoot>
      </table>
    </div>
  );
};

export default TableBody;
