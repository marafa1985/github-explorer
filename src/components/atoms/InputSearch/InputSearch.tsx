import styled from 'styled-components';
import { theme } from 'theme';
import { pixelToRem } from 'utils/pixelToRem';

export type InputSearchProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputSearch = (props: InputSearchProps) => (
  <StyledInputSearch
    {...props}
    className="InputSearch"
    data-testid="inputSearch"
  />
);

const StyledInputSearch = styled.input`
  box-sizing: border-box;
  min-block-size: ${pixelToRem(30)};
  font-size: ${theme.fontSize.body};
  padding-inline: ${pixelToRem(15)};
  border: ${pixelToRem(1)} solid ${theme.colors.gray01};
  background-color: ${theme.colors.gray02};

  &:active,
  &:focus {
    border-color: ${theme.colors.blue02};
    outline: none;
  }

  &:disabled {
    pointer-events: none;
    color: ${theme.colors.gray01};
  }
`;
