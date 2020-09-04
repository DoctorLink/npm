import React from 'react';

import { RiskScores } from '../../Containers';

const CompareRisks: React.FC<{
  traversalId: string;
  pastTraversalId: string;
}> = ({ traversalId, pastTraversalId }) => {
  return (
    <React.Fragment>
      <RiskScores traversalId={traversalId} />
      <RiskScores traversalId={traversalId} />
    </React.Fragment>
  );
};

export default CompareRisks;
