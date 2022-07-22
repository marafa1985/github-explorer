import { useEffect, useState } from 'react';
import { SearchForm } from 'components/molecules/SearchForm/SearchForm';
import styled from 'styled-components';
import { pixelToRem } from 'utils/pixelToRem';
import { useFetch } from 'hook/useFetch';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import { User, UserProps } from 'components/organisms/User/User';

export type Users = {
  items: UserProps[];
};

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const { data, isLoading, setApiUrl, hasError } = useFetch<Users>();

  useEffect(() => {
    searchTerm &&
      setApiUrl(
        `https://api.github.com/search/users?q=${searchTerm} in:login&per_page=5`
      );
  }, [searchTerm, setApiUrl]);

  return (
    <StyledSearchPage>
      <SearchForm
        handleSearchClicked={passedSearchTerm =>
          setSearchTerm(passedSearchTerm)
        }
      />
      <section data-testid="searchResult">
        {hasError && (
          <p>Something went wrong!, please check your internet connection.</p>
        )}
        {isLoading && <Spinner />}
        {data &&
          data.items.map((user: UserProps) => {
            return <User key={user.login} {...user}></User>;
          })}
      </section>
    </StyledSearchPage>
  );
};

const StyledSearchPage = styled.main`
  margin: auto;
  max-inline-size: ${pixelToRem(600)};
`;
