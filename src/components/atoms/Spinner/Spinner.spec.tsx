import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('should render start by default', () => {
    render(<Spinner />);
    const starts = screen.getByTestId('spinner');

    expect(starts).toBeTruthy();
  });
});
