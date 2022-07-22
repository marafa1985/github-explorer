import { render, screen } from '@testing-library/react';
import { Repository } from './Repository';
describe('RepositoryItem', () => {
  it('should render the RepositoryItem by default', () => {
    render(
      <Repository
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
    render(<Repository />);

    const repositoryItem = screen.getByTestId('repositoryItem');

    expect(repositoryItem).toHaveTextContent('Untitled');
    expect(repositoryItem).toHaveTextContent('No description found!');
  });
});
