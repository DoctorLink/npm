import React from 'react';
import { connect } from 'react-redux';
import {
  myNumbersSelector,
  actionsNowDueSelector,
  additionalConclusionsSelector,
} from '@doctorlink/traversal-redux';
import { PanelBlocks, PanelContainer, Panel } from '../../../Components';
import { MyNumbers } from './MyNumbers';
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
        <PanelContainer>
          <Panel>
            <MyNumbers numbersConclusions={numbersConclusions} />
          </Panel>
        </PanelContainer>
      )}
      {actionConclusions.length > 0 && (
        <PanelContainer>
          <Panel>
            <ActionsNowDue actionConclusions={actionConclusions} />
          </Panel>
        </PanelContainer>
      )}
      {additionalConclusions.length > 0 && (
        <PanelContainer>
          <Panel>
            <AdditionalInfo additionalConclusions={additionalConclusions} />
          </Panel>
        </PanelContainer>
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
