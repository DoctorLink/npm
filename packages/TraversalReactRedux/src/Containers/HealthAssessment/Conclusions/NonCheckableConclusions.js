import React from "react";
import { PanelConclusion } from "../../../Components";
import InfoButton from '../../InfoIcon';
import {Conclusion, ConclusionContent } from "./Conclusion";

const NonCheckableConclusion = ({ conclusion }) => (
    <Conclusion>
        <ConclusionContent style={{padding: 0}}>{conclusion.displayText}</ConclusionContent>
        <InfoButton explanation={conclusion.explanation} />
    </Conclusion>
)

const NonCheckableConclusions = ({ conclusions }) => {
    if (conclusions.length === 0) {
        return null;
    }
    
    return (
        <>
            {conclusions.map(conc => (
                <PanelConclusion key={conc.assetId}>
                    <NonCheckableConclusion conclusion={conc} />
                </PanelConclusion>
            ))}
        </>
    );
};

export default NonCheckableConclusions;
