import { fireEvent, render, screen } from '@testing-library/react';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  it('should render by default and contain search and submit button', () => {
    const handleSearchClicked = jest.fn();
    render(<SearchForm handleSearchClicked={handleSearchClicked} />);

    const input = screen.getByTestId('inputSearch');
    const button = screen.getByRole('button');

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('should  call function handleSearchClicked on click', () => {
    const handleSearchClicked = jest.fn();
    render(<SearchForm handleSearchClicked={handleSearchClicked} />);

    const searchForm = screen.getByTestId('searchForm');
    fireEvent.submit(searchForm);

    expect(handleSearchClicked).toBeCalled();
  });

  it('should change the text value when use type', () => {
    const handleSearchClicked = jest.fn();
    render(<SearchForm handleSearchClicked={handleSearchClicked} />);

    const input = screen.getByPlaceholderText('Enter username');

    fireEvent.change(input, { target: { value: 'usersearch' } });

    expect(input.getAttribute('value')).toBe('usersearch');
  });
});
