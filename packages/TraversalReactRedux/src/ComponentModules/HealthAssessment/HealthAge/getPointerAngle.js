export function getPointerAngle(age, healthAge, minHealthAge) {
    const healthAgeDiff = Math.abs(age - healthAge);
    const minimumAgeDiff = age - minHealthAge;
    const maxDiff = Math.max(minimumAgeDiff, healthAgeDiff);
    const range = maxDiff * 2;
    const min = age - maxDiff;
    const healthAgeRatio = (healthAge - min) / range;
    const positionInDegrees = healthAgeRatio * 180 - 90;
    return positionInDegrees;
}