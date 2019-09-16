import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CheckableConclusions from "./CheckableConclusions";

describe("CheckableConclusions component", () => {
    
    const conclusions = [
        { assetId: 1000, displayText: "Lower BP to less than 140/90", explanation: "" },
        { assetId: 1001, displayText: "Eat more healthily", explanation: "" },
        { assetId: 1002, displayText: "Your Mediterranean Diet Rating is 50 out of 100", explanation: "" },
        { assetId: 1003, displayText: "Stop smoking", explanation: "" },
        { assetId: 1004, displayText: "Eat more vegetables", silent: true, explanation: "" },
    ]

    const onChange = jest.fn();

    let result;

    const queryCheckboxByConclusionId = (assetId) => result.queryByLabelText(conclusions.find(c => c.assetId == assetId).displayText);

    test("Shows only non-silent checkable conclusions", () => {
        const checkableConclusions = [ 1001, 1003, 1004, 1005, 1234 ];
        result = render(<CheckableConclusions conclusions={conclusions} checkableConclusions={checkableConclusions} onChange={onChange} />);

        expect(queryCheckboxByConclusionId(1000)).toBeFalsy();
        expect(queryCheckboxByConclusionId(1001)).toBeTruthy();
        expect(queryCheckboxByConclusionId(1002)).toBeFalsy();
        expect(queryCheckboxByConclusionId(1003)).toBeTruthy();
        expect(queryCheckboxByConclusionId(1004)).toBeFalsy();
    })

    test("Checking a conclusion calls onChange with checked IDs", () => {
        const checkableConclusions = [ 1001, 1003 ];
        result = render(<CheckableConclusions conclusions={conclusions} checkableConclusions={checkableConclusions} onChange={onChange} />);

        const conc1001 = queryCheckboxByConclusionId(1001);
        const conc1003 = queryCheckboxByConclusionId(1003);

        fireEvent.click(conc1001);
        expect(onChange).lastCalledWith([1001]);

        fireEvent.click(conc1003);
        expect(onChange).lastCalledWith([1001, 1003]);

        fireEvent.click(conc1001);
        expect(onChange).lastCalledWith([1003]);
    })

    test("Renders null if there are no conclusions to display", () => {
        const checkableConclusions = [ 2000, 2001 ];
        result = render(<CheckableConclusions conclusions={conclusions} checkableConclusions={checkableConclusions} onChange={onChange} />);

        expect(result.container.innerHTML).toBe("");
    })
});