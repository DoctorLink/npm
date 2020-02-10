import React from 'react';
import SymptomReport from '../SymptomReport';
import HealthAssessment from '../HealthAssessment';

export const ConclusionReportConnected: React.FC<{
  traversalId: any;
  assessmentType: any;
}> = ({ traversalId, assessmentType }) => {
  switch (assessmentType) {
    case 2:
      return <HealthAssessment traversalId={traversalId} />;
    default:
      return <SymptomReport traversalId={traversalId} />;
  }
};

export default ConclusionReportConnected;
