import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import MyPagination from 'components/Pagination/MyPagination';

describe('Pagination', () => {
  test('renders Pagination component', () => {
    // prepare
    const setCurrentPage = jest.fn();

    // action
    render(
      <MyPagination
        currentPage={1}
        pagesCount={30}
        onChange={setCurrentPage}
      />
    );

    // aserts
    const paginationElement = screen.getByTestId('pagination');
    expect(paginationElement).toBeInTheDocument();
  });

  test('click go from page 1 to page 2', () => {
    // prepare
    const setCurrentPage = jest.fn();

    // action
    render(
      <MyPagination
        currentPage={1}
        pagesCount={30}
        onChange={setCurrentPage}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /go to page 2/i }));

    // assert
    expect(setCurrentPage).toHaveBeenCalledTimes(1);
  });

  test('click go from page 1 to page 1', () => {
    // prepare
    const setCurrentPage = jest.fn();

    //action
    render(
      <MyPagination
        currentPage={1}
        pagesCount={30}
        onChange={setCurrentPage}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /page 1/i }));

    // assert
    expect(setCurrentPage).toHaveBeenCalledTimes(0);
  });
});
