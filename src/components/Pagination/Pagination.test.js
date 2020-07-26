import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import Pagination from './Pagination';

describe('Pagination', () => {
  test('renders Pagination component', () => {
    render(
      <Pagination
        nextPage={() => {
        }}
        previousPage={() => {
        }}
      />
    );

    const paginationElement = screen.getByTestId('pagination');

    expect(paginationElement).toBeInTheDocument();
  });

  test('click previous page', () => {
    const nextPage = jest.fn();
    const previousPage = jest.fn();

    render(
      <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
      />
    );

    fireEvent.click(screen.getByTestId('previous-page-button'));

    expect(previousPage).toHaveBeenCalledTimes(1);
  });

  test('click previous page', () => {
    const nextPage = jest.fn();
    const previousPage = jest.fn();

    render(
      <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
      />
    );

    fireEvent.click(screen.getByTestId('previous-page-button'));

    expect(previousPage).toHaveBeenCalledTimes(1);
  });
});
