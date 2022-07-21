import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'atom/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}>Search</Button>;

export const Search = Template.bind({});

Search.args = {
  onClick: () => alert('Search clicked')
};
