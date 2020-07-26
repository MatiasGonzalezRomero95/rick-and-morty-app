import {useState, useCallback} from "react";

const MAX_PAGE = 30;
const MIN_PAGE = 1;

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(MIN_PAGE);

  const goToNextPage = useCallback(() => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, MAX_PAGE));
  }, [setCurrentPage])

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, MIN_PAGE));
  }, [setCurrentPage])

  return {currentPage, goToNextPage, goToPreviousPage, setCurrentPage};
}

export default usePagination;
