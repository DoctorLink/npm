import { Conclusion } from '@doctorlink/traversal-core';
import React from 'react';
import { AccordionBody, AccordionHeader } from '../../Components';
import { useToggle } from '../../Hooks';
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
  const [open, toggleOpen] = useToggle(!collapse);

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
  } = components;

  return (
    <Panel>
      <Header color={headerColor}>
        <AccordionHeader open={open} toggleOpen={toggleOpen}>
          <Title>{title}</Title>
        </AccordionHeader>
      </Header>
      <AccordionBody open={open}>
        {conclusions.map((conclusion) => (
          <Conclusion key={conclusion.assetId}>
            <ConclusionTitle>{conclusion.displayText}</ConclusionTitle>
            <Info
              onClick={actions.showExplanation}
              explanation={conclusion.explanation}
            />
          </Conclusion>
        ))}
      </AccordionBody>
    </Panel>
  );
};
