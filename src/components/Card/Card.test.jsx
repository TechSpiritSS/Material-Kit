import React from 'react';
import '@testing-library/jest-dom';
import { queryAllByText, render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  it('renders with default props', () => {
    const { queryAllByText } = render(<Card />);
    expect(queryAllByText('Default Title')).toHaveLength(1);
    expect(queryAllByText('Default Content')).toHaveLength(1);
  });

  it('renders with custom title and content', () => {
    const customTitle = 'Custom Title';
    const customContent = 'Custom Content';
    const { queryAllByText } = render(
      <Card title={customTitle}>{customContent}</Card>
    );
    expect(queryAllByText(customTitle)).toHaveLength(1);
    expect(queryAllByText(customContent)).toHaveLength(1);
  });

  it('applies custom styles', () => {
    const customStyles = {
      color: 'blue',
      bgcolor: 'red',
      fontSize: '2rem',
    };
    const { container } = render(<Card {...customStyles} />);
    const card = container.firstChild;

    expect(card).toHaveStyle('color: blue');
    expect(card).toHaveStyle('background-color: red');
    expect(card).toHaveStyle('font-size: 2rem');
  });
});
