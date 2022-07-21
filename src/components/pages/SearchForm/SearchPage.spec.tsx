import { fireEvent, render, screen } from '@testing-library/react';
import { SearchPage } from './SearchPage';

describe('SearchPage', () => {
  it('should render by default and contain search and submit button', () => {
    render(<SearchPage />);

    const input = screen.getByTestId('inputSearch');
    const button = screen.getByRole('button');

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('should  call function handleSearchClicked on click', () => {
    const handleSearchClicked = jest.fn();
    render(<SearchPage />);

    const searchForm = screen.getByTestId('searchForm');
    fireEvent.submit(searchForm);

    expect(handleSearchClicked).not.toBeCalled();
  });

  it('should change the text value when use type', () => {
    render(<SearchPage />);

    const input = screen.getByPlaceholderText('Enter username');

    fireEvent.change(input, { target: { value: 'usersearch' } });

    expect(input.getAttribute('value')).toBe('usersearch');
  });
});
