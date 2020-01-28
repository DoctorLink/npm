import React from "react";
import { PanelConclusion } from "../../../Components";
import InfoButton from '../../InfoIcon';
import { Conclusion, ConclusionContent, NumberConclusionContent } from "./Conclusion";

const NumberConclusion = ({ conclusion }) => (
    <Conclusion>
        <NumberConclusionContent>
            <ConclusionContent>{conclusion.displayText}</ConclusionContent>
            <ConclusionContent><strong>{conclusion.value}</strong></ConclusionContent>
        </NumberConclusionContent>
        <InfoButton explanation={conclusion.explanation} />
    </Conclusion>
)

const NumberConclusions = ({ conclusions }) => {
    return (
        <>
            {conclusions.map(conc => (
                <PanelConclusion key={conc.assetId}>
                    <NumberConclusion conclusion={conc} />
                </PanelConclusion>
            ))}
        </>
    );
};

export default NumberConclusions;
