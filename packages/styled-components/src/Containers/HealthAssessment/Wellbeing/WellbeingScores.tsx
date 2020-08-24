import React from 'react';
import {
  HealthReportTitle,
  PanelContent,
  WellbeingChart,
  UpdateWhenVisible,
} from '../../../Components';
import { useWellness } from '../../../Hooks';

const WellbeingScores: React.FC<{
  traversalId: string;
}> = ({ traversalId }) => {
  const wellness = useWellness(traversalId);
  return (
    <PanelContent>
      <HealthReportTitle>My lifestyle and wellbeing scores</HealthReportTitle>
      <UpdateWhenVisible offset={{ top: -50 }}>
        <WellbeingChart scores={wellness.scores} />
      </UpdateWhenVisible>
    </PanelContent>
  );
};

export default WellbeingScores;
