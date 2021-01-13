import { TraversalRootState } from '@doctorlink/traversal-core';
import * as selectors from '../../src/Selectors/healthAssessment';

describe('health assessment selectors', () => {
  describe('healthAgeExplanationSelector', () => {
    test.each`
      healthAge | expected
      ${44}     | ${'Much better'}
      ${45}     | ${'Somewhat better'}
      ${48}     | ${'Somewhat better'}
      ${49}     | ${'Around average'}
      ${50}     | ${'Around average'}
      ${51}     | ${'Around average'}
      ${52}     | ${'Somewhat worse'}
      ${55}     | ${'Somewhat worse'}
      ${56}     | ${'Significantly worse'}
    `(
      'returns $expected for health age $healthAge, real age 50',
      ({ healthAge, expected }) => {
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
            conclusions: [{ category1: 'Health Age', moreDetail: xml }],
          },
          healthAssessment: {
            healthAge: {
              age: 50,
              healthAge,
            },
          },
        } as TraversalRootState;

        const result = selectors.healthAgeExplanationSelector(state);

        expect(result).toBe(expected);
      }
    );
  });

  describe('actionsNowDueSelector', () => {
    const state = {
      conclusion: {
        conclusions: [
          {
            assetId: 1000,
            category1: 'Learning module',
            subCategory: 'BMI',
            clinicalText:
              'Congratulations on maintaining an ideal BMI. {qp343|785|[His/Your] BMI is presently {qv343}.}',
          },
          {
            assetId: 1001,
            category1: 'Learning module',
            subCategory: 'Actions Now Due',
            clinicalText:
              '[He should have his/Have your] blood pressure checked |BP check',
          },
          {
            assetId: 1002,
            category1: 'Learning module',
            subCategory: 'Actions Now Due',
            clinicalText:
              'Talk to a doctor about heart disease risk and cholesterol testing |Heart risk assessment',
          },
          {
            assetId: 1003,
            category1: 'Test',
            subCategory: 'Test',
            clinicalText: 'Test |Bla bla',
          },
        ],
      },
    } as TraversalRootState;

    test('finds action conclusions and parses clinicalText', () => {
      const result = selectors.actionsNowDueSelector(state);

      expect(result).toHaveLength(2);
      expect(result[0].assetId).toBe(1001);
      expect(result[0].displayText).toBe('BP check');
      expect(result[1].assetId).toBe(1002);
      expect(result[1].displayText).toBe('Heart risk assessment');
    });
  });
});
