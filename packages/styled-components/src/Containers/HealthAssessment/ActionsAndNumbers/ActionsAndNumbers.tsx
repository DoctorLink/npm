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
      <PanelBlocks>
        {numbersConclusions.length > 0 && (
          <MyNumbers numbersConclusions={numbersConclusions} />
        )}
        {actionConclusions.length > 0 && (
          <ActionsNowDue actionConclusions={actionConclusions} />
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
