import React from 'react';
import {
  HealthReportPanelHeader,
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
    <>
      <HealthReportPanelHeader>
        Your lifestyle and wellbeing scores
      </HealthReportPanelHeader>
      <PanelContent>
        <UpdateWhenVisible offset={{ top: -50 }}>
          <WellbeingChart scores={wellness.scores} />
        </UpdateWhenVisible>
      </PanelContent>
    </>
  );
};

export default WellbeingScores;
