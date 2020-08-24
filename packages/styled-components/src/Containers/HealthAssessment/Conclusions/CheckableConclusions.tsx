import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  hraConclusionCheck,
  hraConclusionUncheck,
} from '@doctorlink/traversal-redux';
import { Conclusion } from '@doctorlink/traversal-core/lib/Models/Conclusion';
import {
  PanelConclusion,
  Checkbox,
  Label,
  DisplayText,
} from '../../../Components';
import { InfoIconConnected as InfoButton } from '../../InfoIcon';
import { ConclusionContainer } from './Conclusion';

import { useRestrictedList } from '../../../Hooks';
import { RootState } from '@doctorlink/traversal-core';

const ConclusionLabel = styled(Label)`
  padding: 0;
  box-shadow: none;
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: ${(p) => p.theme.colors.linkBlue};
  text-decoration: underline;
  font-size: ${(p) => p.theme.healthReportConclusion.fontSize}px;
`;

const CheckableConclusion: React.FC<{
  conclusion: Conclusion;
  checked: boolean;
  onChange: (assetId: number, checked: boolean) => void;
}> = ({ conclusion, checked, onChange }) => (
  <ConclusionContainer>
    <ConclusionLabel>
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(conclusion.assetId, e.target.checked)
        }
      />
      <DisplayText>{conclusion.displayText}</DisplayText>
    </ConclusionLabel>
    <InfoButton explanation={conclusion.explanation} />
  </ConclusionContainer>
);

const CheckableConclusions: React.FC<{
  conclusions: Conclusion[];
  selectedIds: number[];
  dispatch: Dispatch;
  restrictList?: number;
}> = ({ conclusions, selectedIds, dispatch, restrictList }) => {
  const onCheckboxChange = (assetId: number, checked: boolean) =>
    checked
      ? dispatch(hraConclusionCheck(assetId))
      : dispatch(hraConclusionUncheck(assetId));

  const {
    isRestricted,
    restrictedItems,
    showAll,
    toggleShowAll,
  } = useRestrictedList(conclusions, restrictList);

  if (conclusions.length === 0) {
    return null;
  }

  return (
    <>
      {restrictedItems.map((conc) => (
        <PanelConclusion key={conc.assetId}>
          <CheckableConclusion
            conclusion={conc}
            checked={selectedIds.indexOf(conc.assetId) > -1}
            onChange={onCheckboxChange}
          />
        </PanelConclusion>
      ))}
      {isRestricted && (
        <PanelConclusion>
          <StyledLink onClick={toggleShowAll}>
            {showAll
              ? 'View fewer recommendations'
              : 'View more additional recommendations'}
          </StyledLink>
        </PanelConclusion>
      )}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedIds: state.healthAssessment.checkedConclusions,
});
export default connect(mapStateToProps)(CheckableConclusions);
