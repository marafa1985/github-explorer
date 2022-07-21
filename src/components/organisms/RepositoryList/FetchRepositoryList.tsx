import { Spinner } from 'components/atoms/Spinner/Spinner';
import {
  RepositoryItem,
  RepositoryItemProps
} from 'components/molecules/RepositoryItem/RepositoryItem';
import { UserProps } from 'components/templates/UserListWithRepositories/UserListResult';
import { SearchResultContext } from 'context/SearchResultContext';
import { useFetch } from 'hook/useFetch';
import { useContext, useEffect } from 'react';

export const FetchRepositoryList = ({ login, repos_url }: UserProps) => {
  const { setUserRepos } = useContext(SearchResultContext);
  const { isLoading, data, hasError } = useFetch(repos_url);

  useEffect(() => {
    if (data) {
      setUserRepos(state => [
        ...state,
        {
          login,
          repos_url,
          repoList: [...data]
        }
      ]);
    }
  }, [data, login, repos_url, setUserRepos]);

  return (
    <>
      {hasError && (
        <p>Something went wrong!, please check your internet connection.</p>
      )}
      {isLoading && <Spinner />}
      {data &&
        data.map((repo: RepositoryItemProps) => {
          return (
            <RepositoryItem
              key={repo.name}
              name={repo.name}
              description={repo.description}
              stargazers_count={repo.stargazers_count}
            ></RepositoryItem>
          );
        })}
    </>
  );
};
