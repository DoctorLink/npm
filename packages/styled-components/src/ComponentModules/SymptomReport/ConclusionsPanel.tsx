import { Conclusion } from '@doctorlink/traversal-core';
import React from 'react';
import { CollapsiblePanel } from './CollapsiblePanel';
import { SymptomReportCallbacks } from './SymptomReportCallbacks';
import { SymptomReportComponents } from './SymptomReportComponents';

interface ConclusionPanelProps {
  title: string;
  conclusions: Conclusion[];
  headerColor: string;
  collapse?: boolean;
  actions: SymptomReportCallbacks;
  components: SymptomReportComponents;
}

export const ConclusionsPanel: React.FC<ConclusionPanelProps> = ({
  conclusions,
  title,
  headerColor,
  collapse,
  actions,
  components,
}) => {
  if (!conclusions?.length) {
    return null;
  }

  const { Conclusion, BodyText, Info } = components;
  return (
    <CollapsiblePanel
      title={title}
      headerColor={headerColor}
      collapse={collapse}
      components={components}
    >
      {conclusions.map((conclusion) => (
        <Conclusion key={conclusion.assetId}>
          <BodyText bullet="default">
            {conclusion.displayText}
            <Info
              onClick={actions.showExplanation}
              explanation={conclusion.explanation}
            />
          </BodyText>
        </Conclusion>
      ))}
    </CollapsiblePanel>
  );
};
