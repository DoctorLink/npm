import React from 'react';
import Risks from './Risks/Risks';
import HealthAge from './HealthAge/HealthAge';
import Wellbeing from './Wellbeing/Wellbeing';
import ActionsAndNumbers from './ActionsAndNumbers/ActionsAndNumbers';
import AdditionalInfo from './AdditionalInfo/AdditionalInfo';
import ComparisonReport from './ComparisonReport/ComparisonReport';

interface HealthAssessmentPageProps {
  route: string;
  traversalId: string;
}

export const HealthAssessmentPage: React.FC<HealthAssessmentPageProps> = ({
  route,
  traversalId,
}) => {
  switch (route) {
    case 'health-age':
      return <HealthAge traversalId={traversalId} />;
    case 'risks':
      return <Risks traversalId={traversalId} />;
    case 'wellbeing':
      return <Wellbeing traversalId={traversalId} />;
    case 'my-numbers':
      return <ActionsAndNumbers />;
    case 'comparison-report':
      return <ComparisonReport traversal={traversalId} />;
    case 'info':
      return <AdditionalInfo />;
    default:
      return null;
  }
};
