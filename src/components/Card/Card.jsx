import React from 'react';
import {
  Card as MUICard,
  CardContent,
  CardHeader,
  CardActions,
} from '@mui/material';

const Card = ({
  variant = 'elevated',
  color,
  bgcolor,
  outline,
  border,
  borderRadius,
  fontWeight,
  fontSize,
  padding,
  margin,
  display,
  title,
  subheader,
  footer,
  ...props
}) => {
  return (
    <MUICard
      elevation={variant === 'elevated' ? 1 : 0}
      sx={{
        color: color ?? 'black',
        bgcolor: bgcolor || 'primary',
        border: border || 'none',
        borderRadius: borderRadius || 'none',
        fontWeight: fontWeight || 'bold',
        fontSize: fontSize || '1rem',
        padding: padding || '16px',
        margin: margin || '16px',
        display: display || 'block',
      }}
    >
      <CardHeader
        title={title ?? 'Default Title'}
        subheader={subheader ?? 'Default Content'}
      />
      <CardContent>{props.children}</CardContent>
      <CardActions>{footer}</CardActions>
    </MUICard>
  );
};

export default Card;
