import React from 'react';
import { render } from '@testing-library/react';
import DraggableModal from './DraggableModal';

describe('DraggableModal component', () => {
  it('renders with default props', () => {
    const { queryAllByText } = render(
      <DraggableModal open={true} onClose={() => {}}>
        <p>Hello World</p>
      </DraggableModal>
    );

    expect(queryAllByText('Hello World')).toHaveLength(1);
  });

  it('applies custom styles', () => {
    const customStyles = {
      padding: '20px',
      margin: '30px',
      fontSize: '2rem',
      fontWeight: 'normal',
      bgcolor: 'blue',
      color: 'red',
      border: '1px solid black',
      borderRadius: '10px',
      outline: 'none',
      transition: 'all 0.5s',
      cursor: 'pointer',
      maxWidth: '600px',
      maxHeight: '400px',
      fullWidth: true,
      fullHeight: true,
    };

    const { container } = render(
      <DraggableModal open={true} onClose={() => {}} {...customStyles}>
        <div>Custom Modal Content</div>
      </DraggableModal>
    );

    const modalContent = container.querySelector('.MuiPaper-root');

    expect(modalContent).toHaveStyle('padding: 20px');
    expect(modalContent).toHaveStyle('margin: 30px');
    expect(modalContent).toHaveStyle('font-size: 2rem');
    expect(modalContent).toHaveStyle('font-weight: normal');
    expect(modalContent).toHaveStyle('background-color: blue');
    expect(modalContent).toHaveStyle('color: red');
    expect(modalContent).toHaveStyle('border: 1px solid black');
    expect(modalContent).toHaveStyle('border-radius: 10px');
    expect(modalContent).toHaveStyle('outline: none');
    expect(modalContent).toHaveStyle('transition: all 0.5s');
    expect(modalContent).toHaveStyle('cursor: pointer');
    expect(modalContent).toHaveStyle('max-width: 600px');
    expect(modalContent).toHaveStyle('max-height: 400px');
    expect(modalContent).toHaveStyle('width: 100%');
    expect(modalContent).toHaveStyle('height: 100%');
  });
});
