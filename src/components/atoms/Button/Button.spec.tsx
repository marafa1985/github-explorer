import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render the Button by default', () => {
    render(<Button />);
    const button = screen.getByRole('button');

    expect(button).toBeTruthy();
  });

  it('should execute a function when button clicked', () => {
    const clickFunction = jest.fn();
    render(<Button onClick={() => clickFunction()} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(clickFunction).toBeCalled();
  });
});
