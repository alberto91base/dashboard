import React from 'react';

import Modal from './Modal.styled';

export default {
    title: 'app/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => (
    <Modal {...args}>
        <p>prueba storybook</p>
    </Modal>
);

export const Primary = Template.bind({});
Primary.args = {
    onClose: () => {
        console.log('click onCLose');
    },
};
