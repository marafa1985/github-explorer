import { Meta, Story } from '@storybook/react';

import { SearchForm } from './SearchForm';

export default {
  title: 'molecules/SearchForm',
  component: SearchForm
} as Meta;

const Template: Story = () => {
  const handleSearchTerm = (searchTerm?: string) => {
    if (!searchTerm) return;
    alert(searchTerm);
  };
  return <SearchForm handleSearchClicked={handleSearchTerm} />;
};

export const Default = Template.bind({});
