import { Meta, Story } from '@storybook/react';

import { Stars, StarsProps } from './Stars';

export default {
  title: 'atom/Stars',
  component: Stars
} as Meta;

const Template: Story<StarsProps> = args => <Stars {...args} />;

export const StarsTemplate = Template.bind({});

StarsTemplate.args = {
  stargazers_count: 12
};
