import React, {memo, useCallback} from "react";
import PropTypes from 'prop-types';
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '1em'
  }
}));

// Memoize to avoid re render the pagination on dark mode switch change, or other changes
const MyPagination = memo(({currentPage, pagesCount, onChange}) => {
  const classes = useStyles();
  // useCountRenders(); uncomment for debug purpose

  const handlePageChange = useCallback((e, page) => {
    if (page === currentPage) {
      return;
    }

    onChange(page)
  }, [currentPage, onChange]);

  return (
    <div data-testid='pagination' className={classes.root}>
      <Pagination
        count={pagesCount}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
});

MyPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MyPagination;
