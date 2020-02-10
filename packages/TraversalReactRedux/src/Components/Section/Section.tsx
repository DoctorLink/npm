import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-weight: bold;
  padding: 10px;
`;

export const Section: React.FC<{ text: any }> = ({ text }) =>
  text && <Text>{text}</Text>;

export default Section;
