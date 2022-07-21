import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme';
import { pixelToRem } from 'utils/pixelToRem';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = styled.button.attrs((props: ButtonProps) => ({
  type: props.type ?? 'button'
}))`
  color: ${theme.colors.white01};
  background-color: ${theme.colors.blue01};
  font-size: ${theme.fontSize.body};
  cursor: pointer;
  min-block-size: ${pixelToRem(30)};
  padding-inline: ${pixelToRem(15)};
  border: ${pixelToRem(1)} solid ${theme.colors.blue01};
  box-sizing: border-box;
  margin-block: ${pixelToRem(5)};

  &:hover {
    opacity: 0.9;
  }
`;
