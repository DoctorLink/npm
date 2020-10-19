import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const ChatGroupContainer = styled.div`
  margin-bottom: 34px;
  text-align: center;
  width: 100%;
  font-size: 18px;
  line-height: 18px;
`;

const ChatContent = styled.div`
  max-width: 640px;
  text-align: left;
  margin: 0px auto;
`;

const Step: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => (
  <ChatGroupContainer {...props}>
    <ChatContent>{children}</ChatContent>
  </ChatGroupContainer>
);

export default Step;
