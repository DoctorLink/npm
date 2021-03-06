import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const StyledInput = styled.input.attrs({ type: 'number' })`
  width: ${(p) => p.theme.numberfield.width}px;
  height: ${(p) => p.theme.numberfield.height}px;
  font-family: ${(p) => p.theme.numberfield.fontFamily};
  font-size: ${(p) => p.theme.numberfield.fontSize}px;
  text-align: ${(p) => p.theme.numberfield.textAlign};
  border: 1px solid ${(p) => p.theme.numberfield.borderColor};
  border-radius: 3px;
  transition: all 150ms;
  &:focus {
    outline: 0;
    border-color: ${(p) => p.theme.numberfield.hoverColor};
    box-shadow: ${(p) => p.theme.numberfield.focusColor} 0px 0px 3px 2px;
  }
`;

StyledInput.defaultProps = {
  theme: defaultTheme,
};

const NumberField: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  checked,
  type,
  ...props
}) => <StyledInput className={className} {...props} />;

export default NumberField;
