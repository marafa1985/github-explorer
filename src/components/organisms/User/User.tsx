import { Spinner } from 'components/atoms/Spinner/Spinner';
import { Accordion } from 'components/molecules/Accordion/Accordion';
import {
  Repository,
  RepositoryProps
} from 'components/molecules/Repository/Repository';
import { useFetch } from 'hook/useFetch';
import { useEffect, useState } from 'react';

export type UserProps = {
  login: string;
  repos_url: string;
  repositoryList?: RepositoryProps[];
};

export const User = (props: UserProps) => {
  const [user, setUser] = useState<UserProps>({ ...props });
  const { data, isLoading, setApiUrl, hasError } =
    useFetch<RepositoryProps[]>();

  useEffect(() => {
    if (data) setUser(state => ({ ...state, repositoryList: [...data] }));
  }, [data, setUser]);

  const handleHeaderClicked = () => {
    if (!user.repositoryList) {
      setApiUrl(user.repos_url);
    }
  };

  return (
    <Accordion {...props} onHeaderClick={handleHeaderClicked}>
      {hasError && (
        <p>Something went wrong!, please check your internet connection.</p>
      )}
      {isLoading && <Spinner />}
      {user.repositoryList &&
        user.repositoryList.map(repository => {
          return (
            <Repository key={repository.name} {...repository}></Repository>
          );
        })}
    </Accordion>
  );
};
