import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react';
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

  it('should fetch user from github', async () => {
    render(<SearchPage />);
    const input = screen.getByPlaceholderText('Enter username');

    fireEvent.change(input, { target: { value: 'marafa1985' } });
    const searchForm = screen.getByTestId('searchForm');
    fireEvent.submit(searchForm);

    const content = await screen.findByTestId('spinner');
    await waitForElementToBeRemoved(content);
  });

  it('should show error in case of something went wrong in the search', async () => {
    global.fetch = jest.fn().mockRejectedValue('');
    render(<SearchPage />);

    const input = screen.getByPlaceholderText('Enter username');

    fireEvent.change(input, { target: { value: 'marafa1985' } });
    const searchForm = screen.getByTestId('searchForm');
    fireEvent.submit(searchForm);

    const content = await screen.findByTestId('spinner');
    await waitForElementToBeRemoved(content);

    expect(screen.getByTestId('searchResult')).toHaveTextContent(
      'Something went wrong!'
    );
  });
});
