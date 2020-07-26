import {IconButton} from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React, {memo} from "react";
import PropTypes from 'prop-types';
import useCountRenders from "hooks/useCountRenders";

// Memoize to avoid re render the pagination on dark mode switch change, or other changes
const Pagination = memo(({nextPage, previousPage}) => {
  // useCountRenders(); uncomment for debug purpose

  return (
    <div data-testid='pagination'>
      <IconButton
        data-testid={'previous-page-button'}
        onClick={previousPage}
      >
        <NavigateBeforeIcon/>
      </IconButton>
      <IconButton
        data-testid={'next-page-button'}
        onClick={nextPage}
      >
        <NavigateNextIcon/>
      </IconButton>
    </div>
  );
});

Pagination.propTypes = {
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default Pagination;
