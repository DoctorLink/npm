export function getPointerPosition(
  age: number,
  healthAge: number,
  minHealthAge: number
): number {
  const middle = 50;
  const minSwing = minHealthAge - age;
  const maxSwing = age;
  const position = Math.max(
    Math.min(
      middle +
        Math.floor(
          Math.min(Math.max((healthAge - age) / minSwing, 0), 1) * middle
        ) -
        Math.floor(
          Math.min(Math.max((healthAge - age) / maxSwing, 0), 1) * middle
        ),
      98.3
    ),
    1.7
  );
  return position;
}
