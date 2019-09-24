import React from "react";
import { connect } from "react-redux";
import { populateModal, checkConclusion, uncheckConclusion } from '../../../Actions';
import { PanelConclusion, Checkbox, Label, InfoIcon, Answer } from "../../../Components";

const CheckableConclusion = ({ conclusion, checked, onChange, showExplanation }) => (
    <Answer>
        <Label answer={conclusion}>
            <Checkbox type="checkbox" checked={checked} onChange={e => onChange(conclusion.assetId, e.target.checked)} />
        </Label>
        <InfoIcon onClick={showExplanation} explanation={conclusion.explanation} />
    </Answer>
)

const CheckableConclusions = ({ checkableConclusions, conclusions, selectedIds, dispatch }) => {
    const onCheckboxChange = (assetId, checked) => checked
        ? dispatch(checkConclusion(assetId))
        : dispatch(uncheckConclusion(assetId));

    const showExplanation = explanation => dispatch(populateModal(explanation));

    const conclusionsToDisplay = conclusions.filter(c => !c.silent && checkableConclusions.indexOf(c.assetId) > -1);

    if (conclusionsToDisplay.length === 0) {
        return null;
    }

    return (
        <>
            {conclusionsToDisplay.map(conc => (
                <PanelConclusion key={conc.assetId}>
                    <CheckableConclusion
                        conclusion={conc}
                        checked={selectedIds.indexOf(conc.assetId) > -1}
                        onChange={onCheckboxChange}
                        showExplanation={showExplanation} />
                </PanelConclusion>
            ))}
        </>
    );
};

const mapStateToProps = state => ({
    conclusions: state.conclusion && state.conclusion.conclusions || [],
    selectedIds: state.healthAssessment.checkedConclusions
});
export default connect(mapStateToProps)(CheckableConclusions);
