import React from 'react';
import { Bullets } from './Bullets';
import { HealthReportExplanationBody } from './HealthReportExplanationBody';
import { HtmlContent } from './HtmlContent';
import { Conclusion } from '@doctorlink/traversal-core';

export const HealthReportExplanation: React.FC<{
  conclusion: Conclusion;
}> = ({ conclusion }) => {
  return (
    <HealthReportExplanationBody>
      <HtmlContent>{conclusion.explanation}</HtmlContent>
      <HtmlContent>{conclusion.moreDetail}</HtmlContent>
      <Bullets bullets={conclusion.bullets} />
    </HealthReportExplanationBody>
  );
};
