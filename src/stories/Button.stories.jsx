import React from 'react';
import Button from '../components/Button/Button';

export default {
  title: 'Button',
  component: Button,
  action: {
    onClick: () => {
      console.log('Button clicked');
    },
  },
};

const Template = (args) => <Button {...args} />;

export const primary = Template.bind({});

primary.args = {
  text: 'button',
  color: 'primary.textColor',
  bgcolor: 'primary.bgColor',
  bgcolorHover: 'primary.bgColorHover',
  borderRadius: 'primary.borderRadius',
  padding: 'primary.padding',
  margin: 'primary.margin',
  transition: 'primary.transition',
  disabled: false,
  disabledElevation: false,
  cursor: 'primary.cursor',
  outline: 'primary.outline',
  border: 'primary.border',
  fontWeight: 'primary.fontWeight',
  fontSize: 'primary.fontSize',
};

export const secondary = Template.bind({});
secondary.args = {
  text: 'button',
  color: 'secondary.textColor',
  bgcolor: 'secondary.bgColor',
  bgcolorHover: 'secondary.bgColorHover',
  borderRadius: 'secondary.borderRadius',
  padding: 'secondary.padding',
  margin: 'secondary.margin',
  transition: 'secondary.transition',
  disabled: false,
  disabledElevation: true,
  cursor: 'secondary.cursor',
  outline: 'secondary.outline',
  border: 'secondary.border',
  fontWeight: 'secondary.fontWeight',
  fontSize: 'secondary.fontSize',
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,

  text: 'button',
  color: 'primary.textColor',
  bgcolor: 'primary.bgColor',
  bgcolorHover: 'primary.bgColorHover',
  borderRadius: 'primary.borderRadius',
  padding: 'primary.padding',
  margin: 'primary.margin',
  transition: 'primary.transition',
  disabledElevation: true,
  cursor: 'primary.cursor',
  outline: 'primary.outline',
  border: 'primary.border',
  fontWeight: 'primary.fontWeight',
  fontSize: 'primary.fontSize',
};
