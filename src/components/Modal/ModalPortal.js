import React from 'react';
import ReactDOM from 'react-dom';

import { Modal } from './Modal';

const ModalPortal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>{children}</Modal>,
        document.getElementById('modal-root')
    );
};

export default ModalPortal;
