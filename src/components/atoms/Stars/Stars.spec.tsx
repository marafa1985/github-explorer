import { render, screen } from '@testing-library/react';
import { Stars } from './Stars';

describe('Stars', () => {
  it('should render start by default', () => {
    render(<Stars stargazers_count={12} />);
    const starts = screen.getByTestId('starts');

    expect(starts).toHaveTextContent('12');
  });

  it('should render start with 0 start label if noStarts not passed', () => {
    render(<Stars />);
    const starts = screen.getByTestId('starts');

    expect(starts).toHaveTextContent('0');
  });
});
