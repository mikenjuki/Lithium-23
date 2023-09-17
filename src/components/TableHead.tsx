import { FC } from "react";
import { FlexContainer } from "./ui/FlexContainer";
import { Title } from "./ui/Title";
import { ColorTag } from "./ui/ColorTag";
import SearchComponent from "./SearchComponent";

//This is the top part of the table, title and search bar
const TableHead: FC = () => {
  return (
    <FlexContainer
      $direction="row"
      $justifycontent="space-between"
      $alignitems="center"
      $mediaDirection="column"
    >
      <FlexContainer $direction="row" $gap="16px" $alignitems="center">
        <ColorTag />
        <Title>Payout History</Title>
      </FlexContainer>
      <SearchComponent />
    </FlexContainer>
  );
};

export default TableHead;
