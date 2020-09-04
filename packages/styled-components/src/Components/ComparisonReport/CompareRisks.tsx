import React from 'react';

import { RiskScores } from '../../Containers';

const CompareRisks: React.FC<{
  traversalId: string;
  pastTraversalId: string;
  // TODO fix and remove comment
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ traversalId, pastTraversalId }) => {
  return (
    <React.Fragment>
      <RiskScores traversalId={traversalId} />
      <RiskScores traversalId={traversalId} />
    </React.Fragment>
  );
};

export default CompareRisks;
