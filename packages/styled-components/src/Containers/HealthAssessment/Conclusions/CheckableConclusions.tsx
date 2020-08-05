import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  hraConclusionCheck,
  hraConclusionUncheck,
} from '@doctorlink/traversal-redux';
import {
  PanelConclusion,
  Checkbox,
  Label,
  DisplayText,
} from '../../../Components';
import { InfoIconConnected as InfoButton } from '../../InfoIcon';
import { Conclusion } from './Conclusion';

const ConclusionLabel = styled(Label)`
  padding: 0;
  box-shadow: none;
`;

const CheckableConclusion: React.FC<{
  conclusion: any;
  checked: any;
  onChange: any;
}> = ({ conclusion, checked, onChange }) => (
  <Conclusion>
    <ConclusionLabel>
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={(e: any) => onChange(conclusion.assetId, e.target.checked)}
      />
      <DisplayText>{conclusion.displayText}</DisplayText>
    </ConclusionLabel>
    <InfoButton explanation={conclusion.explanation} />
  </Conclusion>
);

const CheckableConclusions: React.FC<{
  conclusions: any;
  selectedIds: any;
  dispatch: any;
}> = ({ conclusions, selectedIds, dispatch }) => {
  const onCheckboxChange = (assetId: any, checked: any) =>
    checked
      ? dispatch(hraConclusionCheck(assetId))
      : dispatch(hraConclusionUncheck(assetId));

  if (conclusions.length === 0) {
    return null;
  }

  return (
    <>
      {conclusions.map((conc: any) => (
        <PanelConclusion key={conc.assetId}>
          <CheckableConclusion
            conclusion={conc}
            checked={selectedIds.indexOf(conc.assetId) > -1}
            onChange={onCheckboxChange}
          />
        </PanelConclusion>
      ))}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  selectedIds: state.healthAssessment.checkedConclusions,
});
export default connect(mapStateToProps)(CheckableConclusions);
