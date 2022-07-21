import styled from 'styled-components';
import { pixelToRem } from 'utils/pixelToRem';

export type StarsProps = {
  stargazers_count?: number;
};

export const Stars = ({ stargazers_count = 0 }: StarsProps) => (
  <StyledStar data-testid="starts">
    {stargazers_count}
    <svg height="14">
      <path
        fillRule="evenodd"
        d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"
      ></path>
    </svg>
  </StyledStar>
);

const StyledStar = styled.label`
  display: flex;

  svg {
    width: ${pixelToRem(16)};
    height: ${pixelToRem(16)};
    margin-inline: ${pixelToRem(2)};
  }
`;
