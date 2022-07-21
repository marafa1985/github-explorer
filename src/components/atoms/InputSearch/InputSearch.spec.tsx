import { render, screen } from '@testing-library/react';
import { InputSearch } from './InputSearch';

describe('Input Search', () => {
  it('should render input search by default', () => {
    render(<InputSearch placeholder="Enter username" />);
    const inputSearch = screen.getByTestId('inputSearch');

    expect(inputSearch.getAttribute('placeholder')).toBe('Enter username');
  });
});
