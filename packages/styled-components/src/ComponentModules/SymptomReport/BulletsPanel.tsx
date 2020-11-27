import { ConclusionBullet } from '@doctorlink/traversal-core';
import React from 'react';
import { AccordionBody, AccordionHeader } from '../../Components';
import { useToggle } from '../../Hooks';
import { SymptomReportComponents } from './SymptomReportComponents';

interface BulletsPanelProps {
  bullets: ConclusionBullet[];
  title: string;
  headerColor: string;
  firstItemBold?: boolean;
  collapse?: boolean;
  components: SymptomReportComponents;
}

export const BulletsPanel: React.FC<BulletsPanelProps> = ({
  bullets,
  title,
  headerColor,
  firstItemBold,
  collapse,
  components,
}) => {
  const [open, toggleOpen] = useToggle(!collapse);

  if (!bullets?.length) {
    return null;
  }

  const { Panel, Header, Title, Conclusion, BodyText } = components;

  return (
    <Panel>
      <Header color={headerColor}>
        <AccordionHeader open={open} toggleOpen={toggleOpen}>
          <Title>{title}</Title>
        </AccordionHeader>
      </Header>
      <AccordionBody open={open}>
        {bullets.map((bullet, i) => (
          <Conclusion key={bullet.bulletUniqueId}>
            <BodyText bold={firstItemBold && i === 0}>
              {bullet.displayText}
            </BodyText>
          </Conclusion>
        ))}
      </AccordionBody>
    </Panel>
  );
};
