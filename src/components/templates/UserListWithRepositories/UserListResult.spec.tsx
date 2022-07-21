import { render, screen } from '@testing-library/react';
import { UserListResult } from './UserListResult';

const userRepositoryList = [
  {
    login: 'marafa1985',
    repos_url: 'https://api.github.com/users/marafa1985/repos'
  },
  {
    login: 'dummyUser',
    repos_url: 'https://api.github.com/users/marafa1985/repos'
  }
];
describe('UserListWithRepositories', () => {
  it('should render user repositories by default if the use has no repos', () => {
    render(<UserListResult usersList={userRepositoryList} searchTerm="" />);
    const userRepos = screen.getByTestId('searchResult');

    expect(userRepos).toBeTruthy();
  });
});
