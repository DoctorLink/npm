import React from 'react';
import styled from 'styled-components';

const TextFieldPadding = styled.div`
  margin-bottom: 0px;
  padding-bottom: 18px;
`;

const TextFieldInner = styled.div`
  vertical-align: baseline;
  display: flex;
  align-items: center;
  height: 54px;
  background-color: rgb(255, 255, 255);
  box-sizing: content-box;
  margin: 0px;
  padding: 0px;
  border-image: initial;
  font: inherit inherit inherit inherit inherit inherit inherit;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(222, 222, 222);
  border-radius: 4px;
`;

const DisplayText = styled.div`
  width: 100%;
  transition: all 0.4s ease-out;
  vertical-align: baseline;
  color: rgb(87, 87, 87);
  margin: 0px;
  font: inherit inherit inherit inherit inherit inherit inherit;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: transparent;
  padding: 10px 18px 0;
  flex: 1 1 0%;
  font-size: 14px;
  line-height: 22px;
  box-sizing: border-box;
`;

export interface ChatTextWrapperProps {
  text: string;
}

const ChatTextWrapper: React.FC<ChatTextWrapperProps> = ({
  children,
  text,
}) => (
  <TextFieldPadding>
    <TextFieldInner>{children}</TextFieldInner>
    <DisplayText dangerouslySetInnerHTML={{ __html: text }} />
  </TextFieldPadding>
);

export default ChatTextWrapper;
