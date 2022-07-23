import { Meta, Story } from '@storybook/react';

import { Repository, RepositoryProps } from './Repository';

export default {
  title: 'molecules/Repository',
  component: Repository
} as Meta;

const Template: Story<RepositoryProps> = (args: RepositoryProps) => (
  <Repository {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Header Text',
  description: 'Repository Description',
  stargazers_count: 14
};
