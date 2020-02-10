import React from 'react';
import { getPointerAngle } from './getPointerAngle';
import { DialArc } from './DialArc';
import { DialPointer } from './DialPointer';

const width = 100;
const height = 53;
const centre = { x: 50, y: 50 };
const arcStrokeWidth = 3;
const arcRadius = 48;
const pointerWidth = 4.5;
const pointerHeight = 3;
const pointerRadius = arcRadius - arcStrokeWidth / 2 - pointerHeight - 0.5;

const HealthAgeDial: React.FC<{
  age: any;
  healthAge: any;
  minimumHealthAge: any;
}> = ({ age, healthAge, minimumHealthAge }) => {
  const angle = getPointerAngle(age, healthAge, minimumHealthAge);
  return (
    <svg viewBox={[0, 0, width, height].toString()}>
      <DialArc
        cx={centre.x}
        cy={centre.y}
        radius={arcRadius}
        startAngle={-90}
        endAngle={90}
        strokeWidth={arcStrokeWidth}
      />
      <DialPointer
        cx={centre.x}
        cy={centre.y}
        radius={pointerRadius}
        width={pointerWidth}
        height={pointerHeight}
        angle={angle}
      />
      <text x={centre.x} y={centre.y * 0.75} textAnchor="middle">
        {healthAge}
      </text>
    </svg>
  );
};

export { HealthAgeDial };
