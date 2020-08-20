import React, { FC } from 'react';
import { Conclusion } from '@doctorlink/traversal-core/lib/Models/Conclusion';
import CheckableConclusions from './CheckableConclusions';
import { CheckableConclusionHeader } from '../../../Components';

export const CheckableConclusionWithHeader: FC<{
  conclusions: Conclusion[];
  restrictList: number;
}> = ({ conclusions, restrictList }) => {
  return (
    <React.Fragment>
      <CheckableConclusionHeader
        style={{ marginTop: '0px', borderRadius: '0' }}
      />
      <CheckableConclusions
        conclusions={conclusions}
        restrictList={restrictList}
      />
    </React.Fragment>
  );
};
