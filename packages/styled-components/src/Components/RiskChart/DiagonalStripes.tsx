import React, { FC } from 'react';

const DiagonalStripes: FC<{
  height: number;
  lineColor: string;
}> = ({ height, lineColor }) => {
  return (
    <pattern
      id="diagonalstripes"
      x="0"
      y="0"
      width=".6"
      height={height}
      patternUnits="userSpaceOnUse"
      patternTransform="rotate(45)"
    >
      <rect x="0" y="0" width=".2" height={height} fill={lineColor} />
    </pattern>
  );
};
export default DiagonalStripes;
