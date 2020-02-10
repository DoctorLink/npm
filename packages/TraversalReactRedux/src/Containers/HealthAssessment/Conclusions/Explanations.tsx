import React, { useState } from 'react';
import {
  AccordionHeader,
  AccordionBody,
  HealthReportPanelHeader,
  PanelContent,
  PanelConclusion,
} from '../../../Components';
import { replaceLineBreaks } from '../../../Helpers';

const HtmlContent = ({ children = '', element = 'div' }) =>
  React.createElement(element, {
    dangerouslySetInnerHTML: { __html: replaceLineBreaks(children) },
  });

const Bullets: React.FC<{
  bullets: any;
}> = ({ bullets }) => {
  const [header, ...items] = bullets;
  return (
    <>
      {header && <HtmlContent>{header.displayText}</HtmlContent>}
      <ul>
        {items.map((item: any) => (
          <HtmlContent element="li" key={item.bulletUniqueId}>
            {item.displayText}
          </HtmlContent>
        ))}
      </ul>
    </>
  );
};

const Explanation: React.FC<{
  conclusion: any;
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
  title: any;
  explanations: any;
}> = ({ title, explanations }) => {
  return (
    <>
      <HealthReportPanelHeader>{title}</HealthReportPanelHeader>
      <PanelContent>
        {explanations.map((conc: any) => (
          <Explanation key={conc.assetId} conclusion={conc} />
        ))}
      </PanelContent>
    </>
  );
};

export default Explanations;
