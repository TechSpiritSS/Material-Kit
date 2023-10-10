import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Button />);
    const button = getByText('Custom Button');
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveAttribute('disabled');
  });

  it('renders with custom text', () => {
    const { getByText } = render(<Button text="Click Me" />);
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('calls the click handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button text="Click Me" onClick={handleClick} />
    );
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom styles', () => {
    const { getByText } = render(
      <Button
        text="Styled Button"
        bgcolor="blue"
        color="white"
        border="1px solid gray"
        borderRadius="5px"
        padding="10px"
        margin="5px"
        transition="0.3s"
        cursor="pointer"
        fontWeight="normal"
        fontSize="14px"
        bgcolorHover="blue"
      />
    );
    const button = getByText('Styled Button');
    expect(button).toHaveStyle('background-color: blue');
    expect(button).toHaveStyle('color: white');
    expect(button).toHaveStyle('border: 1px solid gray');
    expect(button).toHaveStyle('border-radius: 5px');
    expect(button).toHaveStyle('padding: 10px');
    expect(button).toHaveStyle('margin: 5px');
    expect(button).toHaveStyle('transition: 0.3s');
    expect(button).toHaveStyle('cursor: pointer');
    expect(button).toHaveStyle('font-weight: normal');
    expect(button).toHaveStyle('font-size: 14px');
  });

  it('disables the button', () => {
    const { getByText } = render(<Button text="Disabled Button" disabled />);
    const button = getByText('Disabled Button');
    expect(button).toBeDisabled();
  });
});
