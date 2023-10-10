import React from 'react';
import Card from '../components/Card/Card';
import { Button } from '@mui/material';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => (
  <Card {...args}>
    <p> Hello World </p>
  </Card>
);

export const primary = Template.bind({});
primary.args = {
  title: 'Elevated Card',
  subheader: 'This card has a shadow',
  variant: 'elevated',
  padding: '20px',
  margin: '10px',
  display: 'inline-block',
  color: 'primary.textColor',
  bgcolor: 'primary.bgColor',
  borderRadius: 'primary.borderRadius',
  transition: 'primary.transition',
  cursor: 'primary.cursor',
  outline: 'primary.outline',
  border: 'primary.border',
  fontWeight: 'primary.fontWeight',
  fontSize: 'primary.fontSize',
  footer: (
    <Button variant="contained" onClick={() => console.log('Button clicked')}>
      Action Footer Button
    </Button>
  ),
};

export const secondary = Template.bind({});
secondary.args = {
  title: 'Flat Card',
  subheader: 'This card has no shadow',
  variant: 'flat',
  display: 'inline-block',
  color: 'secondary.textColor',
  bgcolor: 'secondary.bgColor',
  borderRadius: 'secondary.borderRadius',
  padding: 'secondary.padding',
  margin: 'secondary.margin',
  transition: 'secondary.transition',
  cursor: 'secondary.cursor',
  outline: 'secondary.outline',
  border: 'secondary.border',
  fontWeight: 'secondary.fontWeight',
  fontSize: 'secondary.fontSize',
  footer: (
    <Button variant="contained" onClick={() => console.log('Button clicked')}>
      Action Footer Button
    </Button>
  ),
};
