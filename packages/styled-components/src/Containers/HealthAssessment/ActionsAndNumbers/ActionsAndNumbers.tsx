import React from 'react';
import { connect } from 'react-redux';
import {
  myNumbersSelector,
  actionsNowDueSelector,
} from '@doctorlink/traversal-redux';
import PanelBlocks from '../../../Components/PanelBlocks';
import { MyNumbers } from './MyNumbers';
import { ActionsNowDue } from './ActionsNowDue';

const ActionsAndNumbers: React.FC<{
  numbersConclusions: any;
  actionConclusions: any;
}> = ({ numbersConclusions, actionConclusions }) => {
  return (
    <>
      <h2>Global Health Check Scores</h2>
      <PanelBlocks>
        {actionConclusions.length > 0 && (
          <ActionsNowDue actionConclusions={actionConclusions} />
        )}
        {numbersConclusions.length > 0 && (
          <MyNumbers numbersConclusions={numbersConclusions} />
        )}
      </PanelBlocks>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  numbersConclusions: myNumbersSelector(state),
  actionConclusions: actionsNowDueSelector(state),
});
export default connect(mapStateToProps)(ActionsAndNumbers);
