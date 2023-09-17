import { FC } from "react";
import Button from "./Button";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";
import { FlexContainer } from "./FlexContainer";

// This is the UI for the pagination
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <FlexContainer
      $direction="row"
      $gap="3px"
      $alignitems="center"
      style={{ marginTop: "20px" }}
    >
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <LuChevronLeft style={{ fontsize: `10px` }} />
      </Button>

      <Button variant="outline">
        page {currentPage} of {totalPages}
      </Button>

      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <LuChevronRight />
      </Button>
    </FlexContainer>
  );
};

export default Pagination;
