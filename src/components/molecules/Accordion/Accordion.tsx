import React, { FC, useState, MouseEvent } from 'react';
import { pixelToRem } from 'utils/pixelToRem';
import styled from 'styled-components';
import { theme } from 'theme';

export type AccordionProps = {
  login: string;
  isOpen?: boolean;
  onHeaderClick?: () => void;
} & React.DetailsHTMLAttributes<HTMLElement>;

export const Accordion: FC<AccordionProps> = ({
  login,
  isOpen = false,
  onHeaderClick,
  children
}) => {
  const [opened, setOpened] = useState(isOpen);

  const onToggle = (event: MouseEvent) => {
    event.preventDefault();
    setOpened(!opened);
    onHeaderClick && onHeaderClick();
  };

  return (
    <StyledAccordion open={opened} data-testid="accordion">
      <StyledAccordionSummary
        onClick={onToggle}
        className="Accordion__summary"
        data-testid="accordion-header"
      >
        <StyledAccordionSummaryTitle>{login}</StyledAccordionSummaryTitle>
        <StyledAccordionArrow opened={opened}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="#fff" d="M0 0h24v24H0z" />
            <path
              fill="none"
              stroke="#222"
              strokeWidth="2"
              d="m20 16-8-8-8 8"
            />
          </svg>
        </StyledAccordionArrow>
      </StyledAccordionSummary>
      {children}
    </StyledAccordion>
  );
};

const StyledAccordion = styled.details`
  margin-block-end: ${pixelToRem(10)};
`;

const StyledAccordionSummary = styled.summary`
  background: ${theme.colors.gray02};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  padding-inline: ${pixelToRem(5)};
  min-block-size: ${pixelToRem(30)};

  &::-webkit-details-marker {
    display: none;
  }

  svg {
    width: ${pixelToRem(16)};
    height: ${pixelToRem(16)};

    path {
      fill: ${theme.colors.gray02};
    }
  }
`;

const StyledAccordionSummaryTitle = styled.h3`
  margin: 0;
`;

const StyledAccordionArrow = styled.span`
  transition: transform 0.2s;
  ${(props: { opened: boolean }) =>
    props.opened ? `transform: scaleY(1);` : `transform: scaleY(-1);`}
`;
