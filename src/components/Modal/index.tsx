import React, { FC } from 'react';
import styled from 'styled-components';

import { ModalProps } from './Modal.types';

const StyledModal = styled.div<ModalProps>`
  position: fixed;
  z-index: 1;
  min-height: 400px;
  min-width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Modal: FC<ModalProps> = ({ onClose, heading, ...props }) => (
  <StyledModal {...props}>
    <div
      style={{
        textAlign: 'right',
        padding: '0 1rem',
        borderBottom: '1px solid #eeeeee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onClick={onClose}
    >
      <div>
        <h3>{heading}</h3>
      </div>
      <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>X</div>
    </div>
    {props.children}
  </StyledModal>
);

export default Modal;
