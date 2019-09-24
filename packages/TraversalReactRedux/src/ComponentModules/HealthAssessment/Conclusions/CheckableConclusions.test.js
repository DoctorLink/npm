import React from "react";
import { fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { rootTraversalReducer } from "../../../Reducers";
import { renderWithRedux } from "../../../TestUtils";
import CheckableConclusions from "./CheckableConclusions";

describe("CheckableConclusions component", () => {

    const conclusions = [
        { assetId: 1000, displayText: "Lower BP to less than 140/90", explanation: "" },
        { assetId: 1001, displayText: "Eat more healthily", explanation: "" },
        { assetId: 1002, displayText: "Your Mediterranean Diet Rating is 50 out of 100", explanation: "" },
        { assetId: 1003, displayText: "Stop smoking", explanation: "" },
        { assetId: 1004, displayText: "Eat more vegetables", silent: true, explanation: "" },
    ]

    const props = {
        traversalId: "test",
        conclusions,
        checkableConclusions: [],
    }

    const initialState = {
        conclusion: { conclusions },
        healthAssessment: { checkedConclusions: [] }
    };

    const renderComponent = (props) => renderWithRedux(<CheckableConclusions {...props} />, rootTraversalReducer, initialState);

    const queryCheckboxByConclusionId = (result, assetId) => result.queryByLabelText(conclusions.find(c => c.assetId == assetId).displayText);

    test("Shows only non-silent checkable conclusions", () => {
        const checkableConclusions = [1001, 1003, 1004, 1005, 1234];
        const result = renderComponent({ ...props, checkableConclusions });

        expect(queryCheckboxByConclusionId(result, 1000)).toBeFalsy();
        expect(queryCheckboxByConclusionId(result, 1001)).toBeTruthy();
        expect(queryCheckboxByConclusionId(result, 1002)).toBeFalsy();
        expect(queryCheckboxByConclusionId(result, 1003)).toBeTruthy();
        expect(queryCheckboxByConclusionId(result, 1004)).toBeFalsy();
    })

    test("Checking a conclusion updates store", () => {
        const checkableConclusions = [1001, 1003];
        const result = renderComponent({ ...props, checkableConclusions });

        const conc1001 = queryCheckboxByConclusionId(result, 1001);
        const conc1003 = queryCheckboxByConclusionId(result, 1003);

        fireEvent.click(conc1001);
        expect(conc1001.checked).toBe(true);
        expect(conc1003.checked).toBe(false);
        expect(result.store.getState().healthAssessment.checkedConclusions).toEqual([1001]);

        fireEvent.click(conc1003);
        expect(conc1001.checked).toBe(true);
        expect(conc1003.checked).toBe(true);
        expect(result.store.getState().healthAssessment.checkedConclusions).toEqual([1001, 1003]);

        fireEvent.click(conc1001);
        expect(conc1001.checked).toBe(false);
        expect(conc1003.checked).toBe(true);
        expect(result.store.getState().healthAssessment.checkedConclusions).toEqual([1003]);
    })

    test("Renders nothing if there are no conclusions to display", () => {
        const checkableConclusions = [2000, 2001];
        const result = renderComponent({ ...props, checkableConclusions });

        expect(result.container.innerHTML).toBe("");
    })
});