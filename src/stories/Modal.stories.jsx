import React, { useState } from 'react';
import Modal from '../components/Modal/Modal';
import DraggableModal from '../components/Modal/DraggableModal';
import { Box, Button } from '@mui/material';

export default {
  title: 'Modal',
  component: Modal,
};

const Template = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open modal
      </Button>
      <Modal open={open} onClose={handleClose} {...args}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: 'background.paper',
            ...args,
          }}
        >
          <h2>Modal Content</h2>
          <p>This is the modal content.</p>
          <Button variant="contained" onClick={handleClose}>
            Close modal
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  padding: 'primary.padding',
  margin: 'primary.margin',
  display: 'primary.display',
  fontSize: 'primary.fontSize',
  fontWeight: 'primary.fontWeight',
  bgcolor: 'primary.bgColor',
  color: 'primary.textColor',
  borderRadius: 'primary.borderRadius',
  outline: 'primary.outline',
  border: 'primary.border',
  transition: 'primary.transition',
  cursor: 'primary.cursor',
  maxWidth: '500px',
  maxHeight: '500px',
  fullWidth: false,
  fullHeight: false,
};

const DraggableTemplate = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Draggable Modal
      </Button>
      <DraggableModal open={open} onClose={handleClose} {...args}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: 'background.paper',
            ...args,
          }}
        >
          <h2>Modal Content</h2>
          <p>This is the modal content.</p>
          <Button variant="contained" onClick={handleClose}>
            Close modal
          </Button>
        </Box>
      </DraggableModal>
    </div>
  );
};

export const Draggable = DraggableTemplate.bind({});
Draggable.args = {
  padding: 'primary.padding',
  margin: 'primary.margin',
  display: 'primary.display',
  fontSize: 'primary.fontSize',
  fontWeight: 'primary.fontWeight',
  bgcolor: 'primary.bgColor',
  color: 'primary.textColor',
  borderRadius: 'primary.borderRadius',
  outline: 'primary.outline',
  border: 'primary.border',
  transition: 'primary.transition',
  cursor: 'primary.cursor',
  maxWidth: '500px',
  maxHeight: '500px',
  fullWidth: false,
  fullHeight: false,
};
