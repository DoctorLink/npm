import React from 'react';
import SymptomReport from '../SymptomReport';
import HealthAssessment from '../HealthAssessment';
import HealthAssessmentStatic from '../HealthAssessment/HealthAssessmentStatic';

export const ConclusionReportConnected: React.FC<{
  traversalId: any;
  assessmentType: any;
  noRouter?: boolean;
}> = ({ traversalId, assessmentType, noRouter }) => {
  const HRA = noRouter === true ? HealthAssessmentStatic : HealthAssessment;
  switch (assessmentType) {
    case 2:
      return <HRA traversalId={traversalId} />;
    default:
      return <SymptomReport traversalId={traversalId} />;
  }
};

export default ConclusionReportConnected;
