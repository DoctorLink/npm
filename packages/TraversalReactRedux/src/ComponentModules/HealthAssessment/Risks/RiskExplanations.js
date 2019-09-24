import React, { useState } from 'react';
import { AccordionHeader, AccordionBody, HealthReportPanelHeader, PanelContent, PanelConclusion } from "../../../Components";
import { replaceLineBreaks } from "../../../Helpers";

const RiskExplanation = ({ conclusion }) => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    return (
        <PanelConclusion>
            <AccordionHeader open={open} toggleOpen={toggleOpen}>
                {conclusion.displayText}
            </AccordionHeader>
            <AccordionBody open={open}>
                <div dangerouslySetInnerHTML={{ __html: replaceLineBreaks(conclusion.explanation) }} />
            </AccordionBody>
        </PanelConclusion>
    );
}

const RiskExplanations = ({ conclusions }) => {
    const explanations = conclusions.filter(c => c.category1 === "Risk Models" && c.category2 === "2");
    return (
        <>
            <HealthReportPanelHeader>
                Your risks explained
            </HealthReportPanelHeader>
            <PanelContent>
                {explanations.map(conc => <RiskExplanation key={conc.assetId} conclusion={conc} />)}
            </PanelContent>
        </>
    )
}

export default RiskExplanations;