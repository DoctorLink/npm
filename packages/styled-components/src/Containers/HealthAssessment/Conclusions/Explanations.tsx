import React, { useState } from 'react';
import {
  AccordionHeader,
  AccordionBody,
  HealthReportTitle,
  PanelContent,
  PanelConclusion,
} from '../../../Components';
import {
  replaceLineBreaks,
  Conclusion,
  ConclusionBullet,
} from '@doctorlink/traversal-core';

const HtmlContent = ({ children = '', element = 'div' }) =>
  React.createElement(element, {
    dangerouslySetInnerHTML: { __html: replaceLineBreaks(children) },
  });

const Bullets: React.FC<{
  bullets: ConclusionBullet[];
}> = ({ bullets }) => {
  const [header, ...items] = bullets;
  return (
    <>
      {header && <HtmlContent>{header.displayText}</HtmlContent>}
      <ul>
        {items.map((item) => (
          <HtmlContent element="li" key={item.bulletUniqueId}>
            {item.displayText}
          </HtmlContent>
        ))}
      </ul>
    </>
  );
};

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
        <HtmlContent>{conclusion.explanation}</HtmlContent>
        <HtmlContent>{conclusion.moreDetail}</HtmlContent>
        <Bullets bullets={conclusion.bullets} />
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
