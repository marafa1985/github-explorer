import { render } from '@testing-library/react';
import { SearchResultContextProvider } from 'context/SearchResultContext';
import { UserRepos } from './UserRepos';

describe('FetchRepositoryList', () => {
  it('should render FetchRepositoryList by default', async () => {
    render(
      <SearchResultContextProvider>
        <UserRepos
          login="marafa1985"
          repos_url="https://api.github.com/users/marafa1985/repos"
        />
      </SearchResultContextProvider>
    );
  });
});
