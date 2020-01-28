import React from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { checkConclusion, uncheckConclusion } from '../../../Actions';
import { PanelConclusion, Checkbox, Label, DisplayText } from "../../../Components";
import InfoButton from '../../InfoIcon';
import { Conclusion } from "./Conclusion";

const ConclusionLabel = styled(Label)`
    padding: 0;
    box-shadow: none;
`

const CheckableConclusion = ({ conclusion, checked, onChange }) => (
    <Conclusion>
        <ConclusionLabel>
            <Checkbox type="checkbox" checked={checked} onChange={e => onChange(conclusion.assetId, e.target.checked)} />
            <DisplayText>{conclusion.displayText}</DisplayText>
        </ConclusionLabel>
        <InfoButton explanation={conclusion.explanation} />
    </Conclusion>
)

const CheckableConclusions = ({ conclusions, selectedIds, dispatch }) => {
    const onCheckboxChange = (assetId, checked) => checked
        ? dispatch(checkConclusion(assetId))
        : dispatch(uncheckConclusion(assetId));

    if (conclusions.length === 0) {
        return null;
    }

    return (
        <>
            {conclusions.map(conc => (
                <PanelConclusion key={conc.assetId}>
                    <CheckableConclusion
                        conclusion={conc}
                        checked={selectedIds.indexOf(conc.assetId) > -1}
                        onChange={onCheckboxChange} />
                </PanelConclusion>
            ))}
        </>
    );
};

const mapStateToProps = state => ({
    selectedIds: state.healthAssessment.checkedConclusions
});
export default connect(mapStateToProps)(CheckableConclusions);
