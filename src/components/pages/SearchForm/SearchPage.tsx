import { useState } from 'react';
import { SearchForm } from 'components/molecules/UserSearchForm/SearchForm';
import { UserListResult } from 'components/templates/UserListWithRepositories/UserListResult';
import styled from 'styled-components';
import { pixelToRem } from 'utils/pixelToRem';

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <StyledSearchPage>
      <SearchForm
        handleSearchClicked={passedSearchTerm =>
          setSearchTerm(passedSearchTerm)
        }
      />
      {searchTerm && <UserListResult searchTerm={searchTerm} />}
    </StyledSearchPage>
  );
};

const StyledSearchPage = styled.main`
  margin: auto;
  max-inline-size: ${pixelToRem(600)};
`;
