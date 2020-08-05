import React from 'react';
import { SymptomReportConnected as SymptomReport } from '../SymptomReport';
import {
  HealthAssessmentConnected,
  HealthAssessmentRoutedConnected,
} from '../HealthAssessment';
import { AssessmentType } from '@doctorlink/traversal-core';

export const ConclusionReportConnected: React.FC<{
  traversalId: any;
  assessmentType: AssessmentType;
  noRouter?: boolean;
}> = ({ traversalId, assessmentType, noRouter }) => {
  const HealthAssessment =
    noRouter === true
      ? HealthAssessmentConnected
      : HealthAssessmentRoutedConnected;
  switch (assessmentType) {
    case 2:
      return <HealthAssessment traversalId={traversalId} />;
    default:
      return <SymptomReport traversalId={traversalId} />;
  }
};
