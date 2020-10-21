import React, { LabelHTMLAttributes, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const Label = styled.label`
  box-sizing: border-box;
  background: transparent;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-family: ${(p) => p.theme.chatAnswer.fontFamily};
  display: flex;
  min-height: 36px;
  position: relative;
  cursor: pointer;
  font-size: ${(p) => p.theme.chatAnswer.fontSize}px;
  width: 100%;
  line-height: 24px;
  white-space: pre-line;
  padding: 0;

  input:checked + & {
    background-color: ${(p) => p.theme.chatAnswer.checkedColor};
  }

  input:focus + & {
    box-shadow: 0 0 2px 0.1px ${(p) => p.theme.chatAnswer.focusColor};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

Label.defaultProps = {
  theme: defaultTheme,
};

const Text = styled.span`
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export type PrimaryChoiceProps = {
  displayText: string;
} & (
  | ({ button?: false } & LabelHTMLAttributes<HTMLLabelElement>)
  | ({ button: true } & ButtonHTMLAttributes<HTMLButtonElement>)
);

const PrimaryChoice = React.forwardRef<HTMLLabelElement, PrimaryChoiceProps>(
  function PrimaryChoice({ displayText, button, children, ...props }, ref) {
    return (
      <Label as={button ? 'button' : 'label'} ref={ref} {...props}>
        <Text dangerouslySetInnerHTML={{ __html: displayText }} />
        {children}
      </Label>
    );
  }
);

export default PrimaryChoice;
