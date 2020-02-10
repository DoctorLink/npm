import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../Theme';

const QuestionContainer = styled.div`
  display: flex;
  padding: ${p => p.theme.question.padding}px 0;
`;

QuestionContainer.defaultProps = {
  theme: defaultTheme,
};

const DisplayText = styled.div`
  display: inline-block;
  font-family: ${p => p.theme.question.fontFamily};
  font-size: ${p => p.theme.question.fontSize}px;
  line-height: ${p => p.theme.question.lineHeight}px;
  white-space: pre-wrap;

  .e24subtext {
    font-size: ${p => p.theme.question.fontSize * 0.8}px;
    line-height: ${p => p.theme.question.lineHeight * 0.6}px;
    font-style: italic;
  }
`;

DisplayText.defaultProps = {
  theme: defaultTheme,
};

const TraversalQuestion: React.FC<{ displayText: any; children: any }> = ({
  displayText,
  children,
}) => {
  return (
    <QuestionContainer>
      <DisplayText dangerouslySetInnerHTML={{ __html: displayText }} />
      {children}
    </QuestionContainer>
  );
};

export default TraversalQuestion;
