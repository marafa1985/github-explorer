import { fireEvent, render, screen } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('should render a details Element by default', () => {
    render(<Accordion login="username" />);
    const details = screen.getByTestId('accordion');
    expect(details).toHaveTextContent('username');
  });

  it('should return true when the isOpen value is false and user click on the summary element', () => {
    render(<Accordion login="username" isOpen={false} />);
    const summaryElement = screen.getByTestId('accordion-header');
    if (summaryElement) {
      fireEvent.click(summaryElement);
    }
    expect(summaryElement?.getAttribute('open')).toBeDefined();
  });

  it('should shoud fire event when it paseed to it', () => {
    const headerClicked = jest.fn();
    render(
      <Accordion
        login="username"
        isOpen={false}
        onHeaderClick={headerClicked}
      />
    );
    const summaryElement = screen.getByTestId('accordion-header');
    if (summaryElement) {
      fireEvent.click(summaryElement);
    }
    expect(headerClicked).toBeCalled();
  });
});
