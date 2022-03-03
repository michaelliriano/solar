import React from 'react';
import { Story, Meta } from '@storybook/react';

import Dropdown from '../components/Dropdown';
import { DropdownProps } from '../components/Dropdown/Dropdown.types';

export default {
  title: 'Solar/Dropdown',
  component: Dropdown,
  argTypes: {},
} as Meta<typeof Dropdown>;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: 'Second example',
  label: 'Your label here',
  options: ['First example', 'Second example'],
};
