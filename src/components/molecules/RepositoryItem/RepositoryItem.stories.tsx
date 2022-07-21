import { Meta, Story } from '@storybook/react';

import { RepositoryItem, RepositoryItemProps } from './RepositoryItem';

export default {
  title: 'molecules/RepositoryItem',
  component: RepositoryItem
} as Meta;

const Template: Story<RepositoryItemProps> = (args: RepositoryItemProps) => (
  <RepositoryItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Header Text',
  description: 'Repository Description',
  stargazers_count: 14
};
