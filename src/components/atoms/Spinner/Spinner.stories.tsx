import { Meta, Story } from '@storybook/react';

import { Spinner } from './Spinner';

export default {
  title: 'atom/Spinner',
  component: Spinner
} as Meta;

const Template: Story = () => <Spinner />;

export const StarsTemplate = Template.bind({});
