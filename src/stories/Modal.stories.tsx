import React from 'react';
import { Story, Meta } from '@storybook/react';

import Modal from '../components/Modal';
import { ModalProps } from '../components/Modal/Modal.types';

export default {
  title: 'Solar/Modal',
  component: Modal,
  argTypes: {},
} as Meta<typeof Modal>;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Welcome to solar!',
};
