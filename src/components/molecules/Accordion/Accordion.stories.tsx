import { Meta, Story } from '@storybook/react';

import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'molecules/Accordion',
  component: Accordion
} as Meta;

const Template: Story<AccordionProps> = (args: AccordionProps) => (
  <Accordion {...args}>Content</Accordion>
);

export const Default = Template.bind({});
Default.args = {
  login: 'Header Text',
  isOpen: true
};
