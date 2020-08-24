import React from 'react';
import { connect } from 'react-redux';
import {
  myNumbersSelector,
  actionsNowDueSelector,
  additionalConclusionsSelector,
} from '@doctorlink/traversal-redux';
import PanelBlocks from '../../../Components/PanelBlocks';
import { MyNumbersBox } from './MyNumbersBox';
import { ActionsNowDue } from './ActionsNowDue';
import { AdditionalInfo } from '../AdditionalInfo/AdditionalInfo';

import {
  Conclusion,
  NumberConclusion,
  RootState,
} from '@doctorlink/traversal-core';

interface ActionsAndNumbersProps {
  numbersConclusions: NumberConclusion[];
  actionConclusions: Conclusion[];
  additionalConclusions: Conclusion[];
}

const ActionsAndNumbers: React.FC<ActionsAndNumbersProps> = ({
  numbersConclusions,
  actionConclusions,
  additionalConclusions,
}) => {
  return (
    <PanelBlocks>
      {numbersConclusions.length > 0 && (
        <MyNumbersBox numbersConclusions={numbersConclusions} />
      )}
      {actionConclusions.length > 0 && (
        <ActionsNowDue actionConclusions={actionConclusions} />
      )}
      {additionalConclusions.length > 0 && (
        <AdditionalInfo additionalConclusions={additionalConclusions} />
      )}
    </PanelBlocks>
  );
};

const mapStateToProps = (state: RootState) => ({
  numbersConclusions: myNumbersSelector(state),
  actionConclusions: actionsNowDueSelector(state),
  additionalConclusions: additionalConclusionsSelector(state),
});
export default connect(mapStateToProps)(ActionsAndNumbers);
