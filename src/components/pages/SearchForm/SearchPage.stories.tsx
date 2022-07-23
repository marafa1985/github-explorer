import { Meta, Story } from '@storybook/react';

import { SearchPage } from './SearchPage';

export default {
  title: 'page/SearchPage',
  component: SearchPage
} as Meta;

const Template: Story = () => <SearchPage />;

export const Default = Template.bind({});
