import { Meta, Story } from '@storybook/react';

import { InputSearch, InputSearchProps } from './InputSearch';

export default {
  title: 'atom/InputSearch',
  component: InputSearch
} as Meta;

const Template: Story<InputSearchProps> = args => <InputSearch {...args} />;

export const PlaceHolder = Template.bind({});
export const Disabled = Template.bind({});

PlaceHolder.args = {
  placeholder: 'Enter username'
};

Disabled.args = {
  disabled: true,
  value: 'Disabled'
};
