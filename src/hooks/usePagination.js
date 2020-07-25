import {useState, useCallback} from "react";

const MAX_PAGE = 30;
const MIN_PAGE = 1;

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(MIN_PAGE);

  const nextPage = useCallback(() => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, MAX_PAGE));
  }, [setCurrentPage])

  const previousPage = useCallback(() => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, MIN_PAGE));
  }, [setCurrentPage])

  return {currentPage, nextPage, previousPage};
}

export default usePagination;
