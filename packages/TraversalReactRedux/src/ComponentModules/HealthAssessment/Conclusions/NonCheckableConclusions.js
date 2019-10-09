import React from "react";
import { PanelConclusion, InfoButton } from "../../../Components";
import {Conclusion, ConclusionContent } from "./Conclusion";

const NonCheckableConclusion = ({ conclusion }) => (
    <Conclusion>
        <ConclusionContent>{conclusion.displayText}</ConclusionContent>
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
