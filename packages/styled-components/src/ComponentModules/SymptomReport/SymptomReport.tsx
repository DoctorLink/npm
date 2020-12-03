import { SymptomReportModel } from '@doctorlink/traversal-core';
import React from 'react';
import { BulletsPanel } from './BulletsPanel';
import { ConclusionsPanel } from './ConclusionsPanel';
import {
  defaultSymptomReportActions,
  defaultSymptomReportComponents,
} from './defaults';
import { MessagePanel } from './MessagePanel';
import { SymptomReportCallbacks } from './SymptomReportCallbacks';
import { SymptomReportComponents } from './SymptomReportComponents';
import { useTheme } from 'styled-components';

export const SymptomReport: React.FC<{
  symptomReport: SymptomReportModel;
  actions?: SymptomReportCallbacks;
  components?: Partial<SymptomReportComponents>;
}> = ({
  symptomReport,
  actions = defaultSymptomReportActions,
  components = defaultSymptomReportComponents,
}) => {
  const comps = { ...defaultSymptomReportComponents, ...components };
  const theme = useTheme();

  const {
    dangerBullets,
    dangerBulletTitle,
    contactBullets,
    contactBulletTitle,
    reasonConclusions,
    reasonConclusionTitle,
    otherConclusions,
    otherConclusionTitle,
    informationConclusions,
    informationConclusionTitle,
    reasonBullets,
    reasonBulletTitle,
  } = symptomReport;
  const { panelHeaders } = theme.symptomReport;

  return (
    <comps.Blocks key="panel" staggerChildren={0.2} style={{ margin: 0 }}>
      <MessagePanel symptomReport={symptomReport} components={comps} />
      <ConclusionsPanel
        conclusions={reasonConclusions}
        title={reasonConclusionTitle}
        headerColor={panelHeaders.reasonConclusions}
        actions={actions}
        components={comps}
      />
      <ConclusionsPanel
        conclusions={otherConclusions}
        title={otherConclusionTitle}
        headerColor={panelHeaders.otherConclusions}
        actions={actions}
        components={comps}
      />
      <BulletsPanel
        collapse
        bullets={dangerBullets}
        title={dangerBulletTitle}
        headerColor={panelHeaders.dangerBullets}
        components={comps}
      />
      <BulletsPanel
        collapse
        bullets={contactBullets}
        title={contactBulletTitle}
        headerColor={panelHeaders.contactBullets}
        components={comps}
      />
      <BulletsPanel
        collapse
        bullets={reasonBullets}
        title={reasonBulletTitle}
        headerColor={panelHeaders.reasonBullets}
        firstItemBold
        components={comps}
      />
      <ConclusionsPanel
        collapse
        conclusions={informationConclusions}
        title={informationConclusionTitle}
        headerColor={panelHeaders.informationConclusions}
        actions={actions}
        components={comps}
      />
    </comps.Blocks>
  );
};
