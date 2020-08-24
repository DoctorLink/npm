import React from 'react';
import { PanelContent } from '../../../Components';
import NumberConclusions from '../Conclusions/NumberConclusions';
import HealthReportTitle from '../../../Components/HealthReportTitle';
import { NumberConclusion } from '@doctorlink/traversal-core';

export const MyNumbers: React.FC<{
  numbersConclusions: NumberConclusion[];
}> = ({ numbersConclusions }) => {
  const title = 'My numbers';
  return (
    <PanelContent title={title}>
      <HealthReportTitle>{title}</HealthReportTitle>
      <NumberConclusions conclusions={numbersConclusions} />
    </PanelContent>
  );
};
