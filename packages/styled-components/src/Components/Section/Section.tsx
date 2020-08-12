import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  padding: 10px;
`;

export interface SectionProps {
  text: string;
}

export const Section: React.FC<SectionProps> = ({ text }) =>
  text ? <Text>{text}</Text> : null;

export default Section;
