import { getPointerAngle } from '../src/Containers/HealthAssessment/HealthAge/getPointerAngle';

describe('getPointerPosition', () => {
  test.each`
    age   | healthAge | minimumHealthAge | expected
    ${60} | ${60}     | ${30}            | ${0}
    ${60} | ${30}     | ${30}            | ${-90}
    ${60} | ${45}     | ${30}            | ${-45}
    ${60} | ${75}     | ${30}            | ${45}
    ${60} | ${90}     | ${30}            | ${90}
    ${60} | ${95}     | ${30}            | ${90}
  `(
    'Returns $expected for age $age, healthAge $healthAge, minimumHealthAge $minimumHealthAge',
    ({ age, healthAge, minimumHealthAge, expected }) => {
      const result = getPointerAngle(age, healthAge, minimumHealthAge);
      expect(result).toBe(expected);
    }
  );
});
