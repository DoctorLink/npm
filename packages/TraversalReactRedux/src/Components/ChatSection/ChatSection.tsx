import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  padding: 16px;
  background-color: #1018d5;
  color: white;
`;

const ChatSection: React.FC<{ text: any }> = ({ text }) =>
  text && <Section>{text}</Section>;

export default ChatSection;
