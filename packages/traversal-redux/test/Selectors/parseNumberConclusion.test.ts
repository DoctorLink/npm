import { Conclusion } from '@doctorlink/traversal-core';
import { parseNumberConclusion } from '../../src/Selectors/parseNumberConclusion';

describe('parseNumberConclusion', () => {
  test('extracts value from XML', () => {
    const conclusion = {
      displayText: 'BMI',
      category1: 'My Numbers',
      moreDetail: `
            <data name="BMI" value="26.1">
                <rule high="18.5">red</rule>
                <rule low="30">red</rule>
                <rule low="25.1" high="30">yellow</rule>
                <rule low="18.5" high="19">yellow</rule>
                <rule ideal="true" low="19" high="25.1">green</rule>
           </data>`,
    } as Conclusion;

    const parsed = parseNumberConclusion(conclusion);

    expect(parsed.displayText).toBe('BMI');
    expect(parsed.value).toBe('26.1');
  });

  test('Sets question mark for missing value', () => {
    const conclusion = {
      displayText: 'BMI',
      category1: 'My Numbers',
      moreDetail: `
            <data name="BMI" value="">
                <rule high="18.5">red</rule>
                <rule low="30">red</rule>
                <rule low="25.1" high="30">yellow</rule>
                <rule low="18.5" high="19">yellow</rule>
                <rule ideal="true" low="19" high="25.1">green</rule>
           </data>`,
    } as Conclusion;

    const parsed = parseNumberConclusion(conclusion);

    expect(parsed.value).toBe('?');
  });

  test.each`
    value   | color
    ${''}   | ${null}
    ${18.4} | ${'red'}
    ${18.5} | ${'yellow'}
    ${19}   | ${'green'}
    ${25}   | ${'green'}
    ${26}   | ${'yellow'}
    ${31}   | ${'red'}
  `('Returns correct color $color for value $value', ({ value, color }) => {
    const conclusion = {
      displayText: 'BMI',
      category1: 'My Numbers',
      moreDetail: `
            <data name="BMI" value="${value}">
                <rule high="18.5">red</rule>
                <rule low="30">red</rule>
                <rule low="25.1" high="30">yellow</rule>
                <rule low="18.5" high="19">yellow</rule>
                <rule ideal="true" low="19" high="25.1">green</rule>
           </data>`,
    } as Conclusion;

    const parsed = parseNumberConclusion(conclusion);

    expect(parsed.color).toBe(color);
  });
});
