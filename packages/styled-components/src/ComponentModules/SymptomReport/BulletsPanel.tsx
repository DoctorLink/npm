import { ConclusionBullet } from '@doctorlink/traversal-core';
import React from 'react';
import { SymptomReportComponents } from './SymptomReportComponents';

export const BulletsPanel: React.FC<{
  bullets: ConclusionBullet[];
  title: string;
  headerColor: string;
  firstItemBold?: boolean;
  components: SymptomReportComponents;
}> = ({ bullets, title, headerColor, firstItemBold, components }) => {
  if (!bullets?.length) {
    return null;
  }

  const { Panel, Header, Title, Conclusion, BodyText } = components;

  return (
    <Panel>
      <Header color={headerColor}>
        <Title>{title}</Title>
      </Header>
      {bullets.map((bullet, i) => (
        <Conclusion key={bullet.bulletUniqueId}>
          <BodyText bold={firstItemBold && i === 0}>
            {bullet.displayText}
          </BodyText>
        </Conclusion>
      ))}
    </Panel>
  );
};
