import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { SearchResultContextProvider } from 'context/SearchResultContext';
import { FetchRepositoryList } from './FetchRepositoryList';

describe('FetchRepositoryList', () => {
  it('should render FetchRepositoryList by default', async () => {
    render(
      <SearchResultContextProvider>
        <FetchRepositoryList
          login="marafa1985"
          repos_url="https://api.github.com/users/marafa1985/repos"
        />
      </SearchResultContextProvider>
    );
    // eslint-disable-next-line testing-library/no-node-access
    waitForElementToBeRemoved(document.querySelector('svg')).then(() =>
      console.log('Element no longer in DOM')
    );
  });
});
