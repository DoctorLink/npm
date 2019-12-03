import React from "react";
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history';
import "@testing-library/jest-dom/extend-expect";
import { rootTraversalReducer } from "../../Reducers";
import { renderWithRedux } from "../../TestUtils";
import HealthAssessment from "./HealthAssessment";
import { healthRisksSet, healthAgeSet, hraWellnessSet } from "../../Actions";

describe("HealthAssessment root component", () => {

    const renderComponent = () => {
        const history = createMemoryHistory({ initialEntries: ["/traversal/abc"] });
        const result = renderWithRedux(<Router history={history}><HealthAssessment traversalId="abc" /></Router>, rootTraversalReducer);
        return { ...result, history };
    }

    test("Initial render: shows nothing", () => {
        const { store, history, ...component } = renderComponent();

        expect(history.location.pathname).toBe("/traversal/abc");
        expect(component.container.innerHTML).toBe("");
    });

    test("Zero health age loaded: still shows nothing", () => {
        const { store, history, ...component } = renderComponent();

        store.dispatch(healthAgeSet({ healthAge: 0 }));

        expect(history.location.pathname).toBe("/traversal/abc");
        expect(component.container.innerHTML).toBe("");
    });

    test("Positive health age loaded: redirects to health age page", () => {
        const { store, history, ...component } = renderComponent();

        store.dispatch(healthAgeSet({ healthAge: 40 }));

        expect(history.location.pathname).toBe("/traversal/abc/health-age");
        expect(component.getByText("Your health age report")).toBeInTheDocument();
    });

    test("Zero health age, non-empty risks loaded: redirects to risks page", () => {
        const { store, history, ...component } = renderComponent();

        store.dispatch(healthAgeSet({ healthAge: 0 }));
        store.dispatch(healthRisksSet({ risks: [{ time: 50, name: "Heart Disease" }] }));

        expect(history.location.pathname).toBe("/traversal/abc/risks");
        expect(component.getByText("Your risks before the age of")).toBeInTheDocument();
    });

    test("Non-empty risks loaded, waiting for health age: still shows nothing", () => {
        const { store, history, ...component } = renderComponent();

        store.dispatch(healthRisksSet({ risks: [{ time: 50, name: "Heart Disease" }] }));

        expect(history.location.pathname).toBe("/traversal/abc");
        expect(component.container.innerHTML).toBe("");
    });

    test("Zero health age, empty risks loaded, waiting for wellbeing: still shows nothing", () => {
        const { store, history, ...component } = renderComponent();

        store.dispatch(healthAgeSet({ healthAge: 0 }));
        store.dispatch(healthRisksSet({ risks: [] }));

        expect(history.location.pathname).toBe("/traversal/abc");
        expect(component.container.innerHTML).toBe("");
    });

    test("Zero health age, empty risks, non-empty wellbeing loaded: redirects to wellbeing", () => {
        const { store, history, ...component } = renderComponent();

        store.dispatch(healthAgeSet({ healthAge: 0 }));
        store.dispatch(healthRisksSet({ risks: [] }));
        store.dispatch(hraWellnessSet({ scores: [{ name: "Diet", score: 50 }] }));

        expect(history.location.pathname).toBe("/traversal/abc/wellbeing");
        expect(component.getByText("Your lifestyle and wellbeing scores")).toBeInTheDocument();
    });
})