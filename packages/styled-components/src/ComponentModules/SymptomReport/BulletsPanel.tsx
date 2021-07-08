import { ConclusionBullet } from '@doctorlink/traversal-core';
import React from 'react';
import { CollapsiblePanel } from './CollapsiblePanel';
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
  if (!bullets?.length) {
    return null;
  }

  const { Conclusion, BodyText } = components;

  return (
    <CollapsiblePanel
      title={title}
      headerColor={headerColor}
      collapse={collapse}
      components={components}
    >
      {bullets.map((bullet, i) => {
        const bold = firstItemBold && i === 0;
        const bulletStyle = bold
          ? undefined
          : bullet.category2.startsWith('Alert: Danger Signs')
          ? 'warning'
          : 'default';
        return (
          <Conclusion key={bullet.bulletUniqueId}>
            <BodyText
              bullet={bulletStyle}
              bold={bold}
              dangerouslySetInnerHTML={{ __html: bullet.displayText }}
            />
          </Conclusion>
        );
      })}
    </CollapsiblePanel>
  );
};
