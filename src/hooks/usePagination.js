import {useState} from "react";

const MAX_PAGE = 30;
const MIN_PAGE = 1;

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(MIN_PAGE);

  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, MAX_PAGE));
  }

  const previousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, MIN_PAGE));
  }

  return {currentPage, nextPage, previousPage};
}

export default usePagination;
