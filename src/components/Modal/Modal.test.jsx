import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  it('renders with default props', () => {
    const { queryAllByText } = render(
      <Modal open={true} onClose={() => {}}>
        <p>Hello World</p>
      </Modal>
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
      <Modal open={true} onClose={() => {}} {...customStyles} />
    );

    const modalContent = container.querySelector('#modal-parent-div');
    const styles = modalContent.style;

    expect(styles.padding).toBe('20px');
    expect(styles.margin).toBe('30px');
    expect(styles.fontSize).toBe('2rem');
    expect(styles.fontWeight).toBe('normal');
    expect(styles.backgroundColor).toBe('blue');
    expect(styles.color).toBe('red');
    expect(styles.border).toBe('1px solid black');
    expect(styles.borderRadius).toBe('10px');
    expect(styles.outline).toBe('none');
    expect(styles.transition).toBe('all 0.5s');
    expect(styles.cursor).toBe('pointer');
    expect(styles.maxWidth).toBe('600px');
    expect(styles.maxHeight).toBe('400px');
    expect(styles.width).toBe('100%');
    expect(styles.height).toBe('100%');
  });
});
