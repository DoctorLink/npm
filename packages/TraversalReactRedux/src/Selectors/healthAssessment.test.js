import * as selectors from "./healthAssessment";

describe("health assessment selectors", () => {

    describe("healthAgeExplanationSelector", () => {
        test.each`
            healthAge | expected
            ${44}     | ${"Much better"}
            ${45}     | ${"Somewhat better"}
            ${48}     | ${"Somewhat better"}
            ${49}     | ${"Around average"}
            ${51}     | ${"Around average"}
            ${52}     | ${"Somewhat worse"}
            ${55}     | ${"Somewhat worse"}
            ${56}     | ${"Significantly worse"}
        `("returns $expected for health age $healthAge, real age 50", ({ healthAge, expected }) => {
            const xml = `
            <data name="Health Age Benefit" value="£££Benefit£££">
                <rule high="-5">Much better</rule>
                <rule low="-5" high="-1">Somewhat better</rule>
                <rule low="-1" high="1.1">Around average</rule>
                <rule low="1.1" high="5.1">Somewhat worse</rule>
                <rule low="5.1">Significantly worse</rule>
            </data>`;
            const state = {
                conclusion: {
                    conclusions: [
                        { category1: "Health Age", moreDetail: xml }
                    ]
                },
                healthAssessment: {
                    riskSummary: {
                        age: 50,
                        healthAge
                    }
                }
            };

            const result = selectors.healthAgeExplanationSelector(state);

            expect(result).toBe(expected);
        })
    })
})