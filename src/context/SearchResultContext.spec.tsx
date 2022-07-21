import { screen, render } from '@testing-library/react';
import { useContext, useEffect } from 'react';
import {
  SearchResultContext,
  SearchResultContextProvider
} from './SearchResultContext';

it('Should be able to use the SearchResultContextProvider', () => {
  const TestComponent = () => {
    const { setUserRepos } = useContext(SearchResultContext);
    useEffect(() => {
      setUserRepos([{ login: 'username', repos_url: 'http' }]);
    }, []);

    return <div>username</div>;
  };

  render(
    <SearchResultContextProvider>
      <TestComponent />
    </SearchResultContextProvider>
  );

  const userRepos = screen.getByText('username');

  expect(userRepos).toBeDefined();
});
