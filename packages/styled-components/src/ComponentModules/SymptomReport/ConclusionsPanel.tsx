import { Conclusion } from '@doctorlink/traversal-core';
import React from 'react';
import { SymptomReportCallbacks } from './SymptomReportCallbacks';
import { SymptomReportComponents } from './SymptomReportComponents';

interface ConclusionPanelProps {
  title: string;
  conclusions: Conclusion[];
  headerColor: string;
  showTruncated?: boolean;
  actions: SymptomReportCallbacks;
  components: SymptomReportComponents;
}

export const ConclusionsPanel: React.FC<ConclusionPanelProps> = ({
  conclusions,
  title,
  headerColor,
  showTruncated,
  actions,
  components,
}) => {
  if (!conclusions?.length) {
    return null;
  }

  const {
    Panel,
    Header,
    Title,
    Conclusion,
    ConclusionTitle,
    Info,
    BodyText,
  } = components;

  return (
    <Panel>
      <Header color={headerColor}>
        <Title>{title}</Title>
      </Header>
      {conclusions.map((conclusion) => (
        <Conclusion key={conclusion.assetId}>
          <ConclusionTitle>{conclusion.displayText}</ConclusionTitle>
          <Info
            onClick={actions.showExplanation}
            explanation={conclusion.explanation}
          />
          {showTruncated && <BodyText>{conclusion.truncated}</BodyText>}
        </Conclusion>
      ))}
    </Panel>
  );
};
