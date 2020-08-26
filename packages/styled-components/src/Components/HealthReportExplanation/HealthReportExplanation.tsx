import React from 'react';
import { Bullets } from './Bullets';
import { HtmlContent } from './HtmlContent';
import { Conclusion } from '@doctorlink/traversal-core';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: ${(p) => p.theme.healthReportExplanation.fontSize}px;
  line-height: ${(p) => p.theme.healthReportExplanation.lineHeight}px;
`;

export const HealthReportExplanation: React.FC<{
  conclusion: Conclusion;
}> = ({ conclusion }) => {
  return (
    <Wrapper>
      <HtmlContent>{conclusion.explanation}</HtmlContent>
      <HtmlContent>{conclusion.moreDetail}</HtmlContent>
      <Bullets bullets={conclusion.bullets} />
    </Wrapper>
  );
};
