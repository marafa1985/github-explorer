import { Spinner } from 'components/atoms/Spinner/Spinner';
import { UserRepos } from 'components/organisms/UserRepos/UserRepos';
import { useFetch } from 'hook/useFetch';

export type UserProps = {
  login: string;
  repos_url: string;
};

export type UserListProps = {
  usersList?: UserProps[];
  searchTerm?: string;
};

export const UserListResult = ({ searchTerm }: UserListProps) => {
  const { isLoading, data, hasError } = useFetch(
    `https://api.github.com/search/users?q=${searchTerm} in:login&per_page=5`
  );

  return (
    <section data-testid="searchResult">
      {hasError && (
        <p>Something went wrong!, please check your internet connection.</p>
      )}
      {isLoading && <Spinner />}
      {data &&
        data.items.map((user: UserProps) => {
          return (
            <UserRepos
              key={user.login}
              login={user.login}
              repos_url={user.repos_url}
            ></UserRepos>
          );
        })}
    </section>
  );
};
