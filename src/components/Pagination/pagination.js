import {IconButton} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React, {memo} from "react";
import PropTypes from 'prop-types';
import useCountRenders from "../../../src/hooks/useCountRenders";

// Memo to avoid re render the pagination on dark mode switch change
const Pagination = memo( ({nextPage, previousPage}) => {
  useCountRenders();
  return (
    <>
      <IconButton
        onClick={previousPage}
      >
        <NavigateBeforeIcon/>
      </IconButton>
      <IconButton
        onClick={nextPage}
      >
        <NavigateNextIcon/>
      </IconButton>
    </>
  );
})

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
}

export default Pagination;
