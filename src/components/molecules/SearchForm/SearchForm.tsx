import { Button } from 'components/atoms/Button/Button';
import { InputSearch } from 'components/atoms/InputSearch/InputSearch';
import styled from 'styled-components';
import { pixelToRem } from 'utils/pixelToRem';
import { theme } from 'theme';
import { useState, FormEvent } from 'react';

export type UserSearchFormProps = {
  handleSearchClicked: (searchTerm: string) => void;
};

export const SearchForm = ({ handleSearchClicked }: UserSearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (submitEvent: FormEvent) => {
    handleSearchClicked(searchTerm);
    submitEvent.preventDefault();
  };
  return (
    <StyledUserSearchForm
      data-testid="searchForm"
      onSubmit={handleSearchSubmit}
    >
      <InputSearch
        type="search"
        required
        placeholder="Enter username"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <StyledUserSearchFormButton type="submit">
        Search
      </StyledUserSearchFormButton>
    </StyledUserSearchForm>
  );
};

const StyledUserSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-block-end: ${pixelToRem(30)};

  @media (min-width: ${pixelToRem(theme.viewport.mobile768)}) {
    flex-direction: row;
    align-items: unset;
    justify-content: center;
    margin-block-start: ${pixelToRem(30)};
  }
`;

const StyledUserSearchFormButton = styled(Button)`
  @media (min-width: ${pixelToRem(theme.viewport.mobile768)}) {
    margin-inline: ${pixelToRem(10)};
    margin-block: 0;
  }
`;
