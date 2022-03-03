import React from 'react';
import { Story, Meta } from '@storybook/react';

import TextInput from '../components/TextInput';
import { TextInputProps } from '../components/TextInput/Input.types';

export default {
  title: 'Solar/TextInput',
  component: TextInput,
  argTypes: {},
} as Meta<typeof TextInput>;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Valid = Template.bind({});
Valid.args = {
  valid: true,
  label: 'Valid input',
};

export const Invalid = Template.bind({});
Invalid.args = {
  valid: false,
  label: 'Invalid input',
};
