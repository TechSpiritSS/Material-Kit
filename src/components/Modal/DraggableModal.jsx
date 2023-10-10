import React from 'react';
import { Modal } from '@mui/material';
import Draggable from 'react-draggable';

const DraggableModal = ({
  open,
  onClose,
  padding,
  margin,
  display,
  fontSize,
  fontWeight,
  bgcolor,
  color,
  border,
  borderRadius,
  outline,
  transition,
  cursor,
  maxWidth,
  maxHeight,
  fullWidth,
  fullHeight,
  children,
}) => {
  return (
    <Draggable>
      <Modal
        open={open}
        onClose={onClose}
        sx={{
          padding: padding ?? '16px',
          margin: margin ?? '16px',
          display: display ?? 'block',
          fontSize: fontSize ?? '1rem',
          fontWeight: fontWeight ?? 'bold',
          bgcolor: bgcolor ?? 'primary',
          color: color ?? 'white',
          border: border ?? 'none',
          borderRadius: borderRadius ?? 'none',
          outline: outline ?? 'none',
          transition: transition ?? 'ease-in-out 1s ',
          cursor: cursor ?? 'none',
          maxWidth: fullWidth ? '100vw' : maxWidth ?? 'xs',
          maxHeight: fullHeight ? '100vh' : maxHeight ?? 'xs',
          width: fullWidth ? '100%' : 'auto',
          height: fullHeight ? '100%' : 'auto',
        }}
      >
        {children}
      </Modal>
    </Draggable>
  );
};

export default DraggableModal;
