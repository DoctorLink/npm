import { getPointerAngle } from "./getPointerAngle";

describe("getPointerPosition", () => {
    test.each`
        age   | healthAge | minimumHealthAge | expected
        ${60} | ${60}     | ${30}            | ${0}      -- HA == A: pointer in middle
        ${60} | ${30}     | ${30}            | ${-90}    -- HA == MHA: pointer at far left
        ${60} | ${45}     | ${30}            | ${-45}    -- HA half way between MHA and A: pointer at -45deg
        ${60} | ${75}     | ${30}            | ${45}     -- HA > A, difference is half the difference between A and MHA: pointer at 45deg
        ${60} | ${90}     | ${30}            | ${90}     -- HA > A, difference equals the difference between A and MHA: pointer at far right
        ${60} | ${95}     | ${30}            | ${90}     -- HA > A, difference greater than the difference between A and MHA: pointer at far right
    `("Returns $expected for age $age, healthAge $healthAge, minimumHealthAge $minimumHealthAge", ({ age, healthAge, minimumHealthAge, expected }) => {
        const result = getPointerAngle(age, healthAge, minimumHealthAge);
        expect(result).toBe(expected);
    });
})