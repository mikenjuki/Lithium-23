import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { setPayout } from "../reducers/actions";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

let timerId: number;
const debounce = (fn: () => unknown, delay: number) => {
  return (...args: unknown[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(fn, delay, [...args]);
  };
};

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  margin-left: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const Search = ({
  setPayoutAction,
}: {
  setPayoutAction: (arg: []) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<[]>([]);

  const changeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchTerm(target.value);
  };

  const fetchData = debounce(() => {
    axios
      .get(
        `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/search?query=${searchTerm}`
      )
      .then((result) => {
        setSearchResult(result.data);
      })
      .catch((e) => console.log("UH OH", e));
  }, 500);

  useEffect(() => {
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchResult?.length !== 0) {
      setPayoutAction(searchResult);
    }
    // console.log("results: ", searchResult);
  }, [searchResult]);

  return (
    <SearchDiv>
      <FaSearch style={{ color: "#6f767e" }} />
      <SearchInput
        type="search"
        name="search-payouts"
        id="search-payouts"
        value={searchTerm}
        onChange={changeHandler}
        placeholder="Search Payouts"
      />
    </SearchDiv>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      setPayoutAction: setPayout,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Search);
