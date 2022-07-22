import { render } from '@testing-library/react';
import { User } from './User';

describe('FetchRepositoryList', () => {
  it('should render FetchRepositoryList by default', async () => {
    render(
      <User
        login="marafa1985"
        repos_url="https://api.github.com/users/marafa1985/repos"
      />
    );
  });
});
