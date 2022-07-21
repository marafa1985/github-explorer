import { Stars } from 'components/atoms/Stars/Stars';
import styled from 'styled-components';
import { theme } from 'theme';
import { pixelToRem } from 'utils/pixelToRem';

export type RepositoryItemProps = {
  name?: string;
  stargazers_count?: number;
  description?: string | null;
};

export const RepositoryItem = ({
  name = 'Untitled Repo',
  stargazers_count = 0,
  description
}: RepositoryItemProps) => (
  <StyledRepositoryItem data-testid="repositoryItem">
    <StyledRepositoryItemHeader>
      <StyledRepositoryItemTitle>{name}</StyledRepositoryItemTitle>
      <Stars stargazers_count={stargazers_count} />
    </StyledRepositoryItemHeader>
    <p>{description ? description : 'No description found!'}</p>
  </StyledRepositoryItem>
);

const StyledRepositoryItem = styled.article`
  padding: ${pixelToRem(10)} ${pixelToRem(5)};
  background: ${theme.colors.gray01};
  margin-block: ${pixelToRem(10)};
  margin-inline-start: ${pixelToRem(15)};
`;

const StyledRepositoryItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledRepositoryItemTitle = styled.h3`
  margin-inline: 0;
  margin-block: 0;
`;
