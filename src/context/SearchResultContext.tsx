import { RepositoryItemProps } from 'components/molecules/RepositoryItem/RepositoryItem';
import { UserProps } from 'components/templates/UserListWithRepositories/UserListResult';
import { createContext, FC, PropsWithChildren, useState } from 'react';

export type UserRepositories = UserProps & {
  repoList?: RepositoryItemProps[];
};

type SearchResultContextProps = {
  userRepos: UserRepositories[];
  setUserRepos: React.Dispatch<React.SetStateAction<UserRepositories[]>>;
};

export const SearchResultContext = createContext<SearchResultContextProps>({
  userRepos: [],
  setUserRepos: () => {
    /* do nothing, initial value */
  }
});

export const SearchResultContextProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const [userRepos, setUserRepos] = useState<UserRepositories[]>([]);

  return (
    <SearchResultContext.Provider
      value={{
        userRepos,
        setUserRepos
      }}
    >
      {children}
    </SearchResultContext.Provider>
  );
};
