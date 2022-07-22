import {
  waitForElementToBeRemoved,
  fireEvent,
  render,
  screen
} from '@testing-library/react';
import { User } from './User';

describe('FetchRepositoryList', () => {
  const unMockedFetch = global.fetch;

  afterEach(() => {
    global.fetch = unMockedFetch;
  });

  it('should render FetchRepositoryList by default', async () => {
    render(
      <User
        login="marafa1985"
        repos_url="https://api.github.com/users/marafa1985/repos"
      />
    );
  });

  it('should show the repos when the user click in Accordion header and repositoryList is available', () => {
    render(
      <User
        login="marafa1985"
        repos_url="https://api.github.com/users/marafa1985/repos"
        repositoryList={[
          {
            name: 'repo1',
            stargazers_count: 46,
            description: 'Repository Description'
          },
          {
            name: 'repo2',
            stargazers_count: 46,
            description: 'Repository Description'
          }
        ]}
      />
    );
    const accHeader = screen.getByTestId('accordion-header');
    fireEvent.click(accHeader);
    const repoList = screen.getAllByRole('listitem');
    expect(repoList.length).toBe(2);
  });

  it('should fetch the repos when the user click in Accordion header', async () => {
    render(
      <User
        login="marafa1985"
        repos_url="https://api.github.com/users/marafa1985/repos"
      />
    );
    const accHeader = screen.getByTestId('accordion-header');
    fireEvent.click(accHeader);
    const content = await screen.findByTestId('spinner');
    await waitForElementToBeRemoved(content);
  });

  it('should show error in case of something went wrong', async () => {
    global.fetch = jest.fn().mockRejectedValue('');
    render(
      <User
        login="marafa1985"
        repos_url="https://api.github.com/users/marafa1985/repos"
      />
    );
    const accHeader = screen.getByTestId('accordion-header');
    fireEvent.click(accHeader);
    const content = await screen.findByTestId('spinner');
    await waitForElementToBeRemoved(content);
    expect(screen.getByTestId('accordion')).toHaveTextContent(
      'Something went wrong!'
    );
  });
});
