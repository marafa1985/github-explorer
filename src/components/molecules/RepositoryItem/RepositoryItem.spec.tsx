import { render, screen } from '@testing-library/react';
import { RepositoryItem } from './RepositoryItem';
describe('RepositoryItem', () => {
  it('should render the RepositoryItem by default', () => {
    render(
      <RepositoryItem
        name="Repository Title "
        stargazers_count={46}
        description="Repository Description"
      />
    );

    const repositoryItem = screen.getByTestId('repositoryItem');

    expect(repositoryItem).toHaveTextContent('Title');
    expect(repositoryItem).toHaveTextContent('46');
    expect(repositoryItem).toHaveTextContent('Description');
  });

  it('should render the a default text if there are no props', () => {
    render(<RepositoryItem />);

    const repositoryItem = screen.getByTestId('repositoryItem');

    expect(repositoryItem).toHaveTextContent('Untitled');
    expect(repositoryItem).toHaveTextContent('No description found!');
  });
});
