import styled from 'styled-components';

export interface ChatContainerProps {
  minHeight: number;
}

export const ChatContainer = styled.div<ChatContainerProps>`
  box-sizing: border-box;
  padding: 0 10px;
  min-height: ${(props) => props.minHeight}px;
`;
