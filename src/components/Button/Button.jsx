import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({
  text,
  color,
  bgcolor,
  outline,
  border,
  borderRadius,
  padding,
  margin,
  transition,
  disabled,
  cursor,
  bgcolorHover,
  disabledElevation,
  fontWeight,
  fontSize,
}) => {
  return (
    <MUIButton
      disabled={disabled ?? false}
      disableElevation={disabledElevation ?? true}
      variant="text"
      onClick={() => {
        console.log('Button clicked');
      }}
      sx={{
        bgcolor: disabled ? 'grey' : bgcolor ?? 'primary',
        color: disabled ? 'grey' : color ?? 'white',
        outline: outline ?? 'none',
        border: border ?? 'none',
        borderRadius: borderRadius ?? 'none',
        padding: padding ?? 'none',
        margin: margin ?? 'none',
        transition: transition ?? 'none',
        cursor: disabled ? 'not-allowed' : cursor ?? 'none',
        fontWeight: fontWeight ?? 'bold',
        fontSize: fontSize ?? '1rem',
        '&:hover': {
          bgcolor: bgcolorHover ?? 'secondary',
        },
      }}
    >
      {text ?? 'Custom Button'}
    </MUIButton>
  );
};

export default Button;
