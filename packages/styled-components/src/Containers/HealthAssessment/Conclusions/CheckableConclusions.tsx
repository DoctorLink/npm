import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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

import { useToggle } from '../../../Hooks/useToggle';
import Color from '../../../Theme/base/colors';

const ConclusionLabel = styled(Label)`
  padding: 0;
  box-shadow: none;
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: ${Color.linkBlue};
  text-decoration: underline;
`;

const StyledDisplayText = styled(DisplayText)`
  font-size: inherit;
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
        onChange={(e: any) => onChange(conclusion.assetId, e.target.checked)}
      />
      <StyledDisplayText>{conclusion.displayText}</StyledDisplayText>
    </ConclusionLabel>
    <InfoButton explanation={conclusion.explanation} />
  </ConclusionContainer>
);

const CheckableConclusions: React.FC<{
  conclusions: Conclusion[];
  selectedIds: number[];
  dispatch: any;
  restrictList?: number;
}> = ({ conclusions, selectedIds, dispatch, restrictList }) => {
  const onCheckboxChange = (assetId: number, checked: boolean) =>
    checked
      ? dispatch(hraConclusionCheck(assetId))
      : dispatch(hraConclusionUncheck(assetId));
  const numberOfLines = restrictList ?? conclusions.length;
  const [moreLines, setMoreLines] = useToggle(false);

  if (conclusions.length === 0) {
    return null;
  }

  return (
    <>
      {conclusions.map((conc, i) => (
        <PanelConclusion
          key={conc.assetId}
          style={{ display: i < numberOfLines || moreLines ? 'block' : 'none' }}
        >
          <CheckableConclusion
            conclusion={conc}
            checked={selectedIds.indexOf(conc.assetId) > -1}
            onChange={onCheckboxChange}
          />
        </PanelConclusion>
      ))}
      {restrictList && !moreLines && conclusions.length >= restrictList && (
        <PanelConclusion>
          <StyledLink onClick={setMoreLines}>
            View more additional recommendations
          </StyledLink>
        </PanelConclusion>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  selectedIds: state.healthAssessment.checkedConclusions,
});
export default connect(mapStateToProps)(CheckableConclusions);
