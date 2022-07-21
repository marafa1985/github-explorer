import { render, screen } from '@testing-library/react';
import { RepositoryList } from './RepositoryList';

const repoList = [
  {
    name: 'Repository Title',
    stargazers_count: 46,
    description: 'Repository Description'
  }
];

describe('RepositoryItem', () => {
  it('should render the RepositoryList by default', () => {
    render(<RepositoryList repositoryList={repoList} />);

    const repositoryItem = screen.getByTestId('repositoryList');

    expect(repositoryItem).toHaveTextContent('Title');
    expect(repositoryItem).toHaveTextContent('46');
    expect(repositoryItem).toHaveTextContent('Description');
  });

  it('should render the RepositoryList by default when empty', () => {
    render(<RepositoryList repositoryList={[]} />);

    const repositoryItem = screen.getByTestId('repositoryList');

    expect(repositoryItem.childNodes.length).toBe(0);
  });
});
