import { FC, useEffect, useState } from "react";
import { FlexContainer } from "./ui/FlexContainer";
import { LuSearch } from "react-icons/lu";
import { Input } from "./ui/SearchInput";
import theme from "../theme";
import { useSearchDataMutation } from "../store/apis/payoutDataApi";
import { useDispatch } from "react-redux";
import { setIsSearchEmpty, setSearchResults } from "../store";

//colors from themes.ts
const paleWhite = theme.colors.medleyPaleWhite;
const medleyGray = theme.colors.medleyGray;

// User uses this to sort through table
const SearchComponent: FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [trigger, result] = useSearchDataMutation();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  // useeffects interact with slices and store to propagate data thorought the app
  useEffect(() => {
    if (searchTerm) {
      trigger(searchTerm);
      dispatch(setIsSearchEmpty(false));
    } else {
      dispatch(setIsSearchEmpty(true));
    }
  }, [searchTerm]);

  useEffect(() => {
    const { data } = result;
    dispatch(setSearchResults(data));
  }, [result]);

  return (
    <FlexContainer
      $direction="row"
      $alignitems="center"
      $padding="8px 16px"
      $gap="8px"
      $borderradius="12px"
      $border={`2px solid ${paleWhite}`}
      $customStyle=" /* Media query for smaller screens */
@media screen and (max-width: 768px) {
 padding: 6px 12px;
 gap: 4px;
}"
    >
      <LuSearch style={{ color: `${medleyGray}` }} />
      <Input
        placeholder="Search username"
        type="text"
        name="search-payouts"
        id="search-payouts"
        value={searchTerm}
        onChange={changeHandler}
      />
    </FlexContainer>
  );
};

export default SearchComponent;
