import React, { useState } from 'react';
import {
  AccordionHeader,
  AccordionBody,
  HealthReportTitle,
  HealthReportExplanation,
  PanelContent,
  PanelConclusion,
} from '../../../Components';
import { Conclusion } from '@doctorlink/traversal-core';

const Explanation: React.FC<{
  conclusion: Conclusion;
}> = ({ conclusion }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <PanelConclusion>
      <AccordionHeader open={open} toggleOpen={toggleOpen}>
        {conclusion.displayText}
      </AccordionHeader>
      <AccordionBody open={open}>
        <HealthReportExplanation conclusion={conclusion} />
      </AccordionBody>
    </PanelConclusion>
  );
};

const Explanations: React.FC<{
  title: string;
  explanations: Conclusion[];
}> = ({ title, explanations }) => {
  return (
    <PanelContent>
      <HealthReportTitle>{title}</HealthReportTitle>
      {explanations.map((conc) => (
        <Explanation key={conc.assetId} conclusion={conc} />
      ))}
    </PanelContent>
  );
};

export default Explanations;
