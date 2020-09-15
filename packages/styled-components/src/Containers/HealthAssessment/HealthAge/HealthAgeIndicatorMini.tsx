import React from 'react';
import { HealthAgeDial } from './HealthAgeDial';
import { HealthAgeTile } from './HealthAgeTile';
import { HealthAgeIndicatorProps } from './HealthAgeIndicator';

export const HealthAgeIndicatorMini: React.FC<HealthAgeIndicatorProps> = ({
  healthAgeModel,
}) => {
  const { age, healthAge, minimumHealthAge } = healthAgeModel;
  return (
    <div title={`Your health age is ${healthAge}`}>
      <HealthAgeTile healthAge={healthAge} />
      <HealthAgeDial
        mini
        age={age}
        healthAge={healthAge}
        minimumHealthAge={minimumHealthAge}
      />
    </div>
  );
};
