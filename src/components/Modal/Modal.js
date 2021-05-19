import React from 'react';

export const Modal = ({ className, children, onClose }) => {
    return (
        <div className={className}>
            <div className="modal">
                <button onClick={onClose} className="modal__close">
                    Close
                </button>
                <div className="modal__content">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
