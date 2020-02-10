import React from 'react';
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';
import {
  myNumbersSelector,
  actionsNowDueSelector,
} from '../../../Selectors/healthAssessment';
import { MyNumbers } from './MyNumbers';
import { ActionsNowDue } from './ActionsNowDue';

const ActionsAndNumbers: React.FC<{
  numbersConclusions: any;
  actionConclusions: any;
}> = ({ numbersConclusions, actionConclusions }) => {
  return (
    <PoseGroup animateOnMount={true}>
      {actionConclusions.length > 0 && (
        <ActionsNowDue key="actions" actionConclusions={actionConclusions} />
      )}
      {numbersConclusions.length > 0 && (
        <MyNumbers key="numbers" numbersConclusions={numbersConclusions} />
      )}
    </PoseGroup>
  );
};

const mapStateToProps = (state: any) => ({
  numbersConclusions: myNumbersSelector(state),
  actionConclusions: actionsNowDueSelector(state),
});
export default connect(mapStateToProps)(ActionsAndNumbers);
