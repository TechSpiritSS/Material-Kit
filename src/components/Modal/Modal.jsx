import React from 'react';
import { Modal as MUIModal } from '@mui/material';

const Modal = ({
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

  ...props
}) => {
  return (
    <MUIModal open={open} onClose={onClose}>
      <div
        id="modal-parent-div"
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
        {props.children}
      </div>
    </MUIModal>
  );
};

export default Modal;
