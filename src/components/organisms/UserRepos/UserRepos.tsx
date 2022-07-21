import { Accordion } from 'components/molecules/Accordion/Accordion';
import { RepositoryItemProps } from 'components/molecules/RepositoryItem/RepositoryItem';
import { RepositoryList } from 'components/molecules/RepositoryList/RepositoryList';
import { UserProps } from 'components/templates/UserListWithRepositories/UserListResult';
import { SearchResultContext } from 'context/SearchResultContext';
import { useContext, useState } from 'react';
import { FetchRepositoryList } from '../RepositoryList/FetchRepositoryList';

type LoadRepoFrom = 'Online' | 'Offline';

export const UserRepos = (props: UserProps) => {
  const { userRepos } = useContext(SearchResultContext);
  const [loadRepo, setLoadRepo] = useState<LoadRepoFrom>();
  const [offLineRepoData, setOffLineRepoData] =
    useState<RepositoryItemProps[]>();

  const handleHeaderClicked = () => {
    const userRepoFromContext = userRepos.find(
      user => user.login === props.login
    );
    if (userRepoFromContext?.repoList) {
      setLoadRepo('Offline');
      setOffLineRepoData([...userRepoFromContext.repoList]);
    }
    setLoadRepo('Online');
  };

  return (
    <Accordion {...props} onHeaderClick={handleHeaderClicked}>
      {loadRepo === 'Offline' && offLineRepoData && (
        <RepositoryList repositoryList={offLineRepoData} />
      )}
      {loadRepo === 'Online' && <FetchRepositoryList {...props} />}
    </Accordion>
  );
};
