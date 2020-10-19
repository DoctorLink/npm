import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  padding: 16px;
  background-color: #1018d5;
  color: white;
`;

export interface ChatSectionProps {
  text: string | null;
}

const ChatSection: React.FC<ChatSectionProps> = ({ text }) =>
  text ? <Section>{text}</Section> : null;

export default ChatSection;
