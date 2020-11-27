import { SymptomReportModel } from '@doctorlink/traversal-core';
import React from 'react';
import colors from '../../Theme/base/colors';
import { BulletsPanel } from './BulletsPanel';
import { ConclusionsPanel } from './ConclusionsPanel';
import {
  defaultSymptomReportActions,
  defaultSymptomReportComponents,
} from './defaults';
import { MessagePanel } from './MessagePanel';
import { SymptomReportCallbacks } from './SymptomReportCallbacks';
import { SymptomReportComponents } from './SymptomReportComponents';

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

  return (
    <comps.Blocks key="panel" staggerChildren={0.2} style={{ margin: 0 }}>
      <MessagePanel symptomReport={symptomReport} components={comps} />
      <ConclusionsPanel
        showTruncated
        conclusions={reasonConclusions}
        title={reasonConclusionTitle}
        headerColor={colors.brand100}
        actions={actions}
        components={comps}
      />
      <ConclusionsPanel
        conclusions={otherConclusions}
        title={otherConclusionTitle}
        headerColor={colors.brand100}
        actions={actions}
        components={comps}
      />
      <BulletsPanel
        collapse
        bullets={dangerBullets}
        title={dangerBulletTitle}
        headerColor={colors.danger}
        components={comps}
      />
      <BulletsPanel
        collapse
        bullets={contactBullets}
        title={contactBulletTitle}
        headerColor={colors.moderate}
        components={comps}
      />
      <BulletsPanel
        collapse
        bullets={reasonBullets}
        title={reasonBulletTitle}
        headerColor={colors.lightBlue100}
        firstItemBold
        components={comps}
      />
      <ConclusionsPanel
        collapse
        conclusions={informationConclusions}
        title={informationConclusionTitle}
        headerColor={colors.brand100}
        actions={actions}
        components={comps}
      />
    </comps.Blocks>
  );
};
