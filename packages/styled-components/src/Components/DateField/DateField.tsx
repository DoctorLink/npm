import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const StyledInput = styled.input.attrs({ type: 'date' })`
  width: ${(p) => p.theme.datefield.width}px;
  height: ${(p) => p.theme.datefield.height}px;
  font-family: ${(p) => p.theme.datefield.fontFamily};
  font-size: ${(p) => p.theme.datefield.fontSize}px;
  text-align: ${(p) => p.theme.datefield.textAlign};
  border: 1px solid ${(p) => p.theme.datefield.borderColor};
  border-radius: 3px;
  transition: all 150ms;
  &:focus {
    outline: 0;
    border-color: ${(p) => p.theme.datefield.hoverColor};
    box-shadow: ${(p) => p.theme.datefield.focusColor} 0px 0px 3px 2px;
  }
`;

StyledInput.defaultProps = {
  theme: defaultTheme,
};

const DateField: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  checked,
  type,
  ...props
}) => <StyledInput className={className} {...props} />;

export default DateField;
