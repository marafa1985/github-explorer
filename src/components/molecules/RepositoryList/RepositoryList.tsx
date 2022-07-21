import {
  RepositoryItem,
  RepositoryItemProps
} from '../RepositoryItem/RepositoryItem';

type RepositoryListProps = {
  repositoryList: RepositoryItemProps[];
};

export const RepositoryList = ({ repositoryList }: RepositoryListProps) => (
  <p data-testid="repositoryList">
    {repositoryList.map(
      ({ name, description, stargazers_count }: RepositoryItemProps) => {
        return (
          <RepositoryItem
            key={name}
            name={name}
            description={description}
            stargazers_count={stargazers_count}
          ></RepositoryItem>
        );
      }
    )}
  </p>
);
