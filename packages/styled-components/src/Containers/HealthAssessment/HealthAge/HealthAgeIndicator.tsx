import React from 'react';
import {
  UpdateWhenVisible,
  PanelBodyText,
  PanelContent,
} from '../../../Components';
import { HealthAgeDial } from './HealthAgeDial';
import { HealthAgeTile } from './HealthAgeTile';
import styled from 'styled-components';
import { useHealthAge } from '../../../Hooks';
import { HealthAgeModel } from '@doctorlink/traversal-core';

const Centered = styled(PanelBodyText)`
  text-align: center;
`;

export interface HealthAgeIndicatorProps {
  healthAgeModel: HealthAgeModel;
}

export const HealthAgeIndicator: React.FC<HealthAgeIndicatorProps> = ({
  healthAgeModel,
}) => {
  const { age, healthAge, minimumHealthAge } = healthAgeModel;
  const ageReduction = healthAge - minimumHealthAge;
  const yourHealthAge = 'Your health age is';
  return (
    <PanelContent>
      <div title={`${yourHealthAge} ${healthAge}`}>
        <Centered>
          <strong>{yourHealthAge}</strong>
        </Centered>
        <UpdateWhenVisible>
          <HealthAgeTile healthAge={healthAge} />
        </UpdateWhenVisible>
        {ageReduction > 0 && (
          <Centered>
            <strong>
              But you could be up to {ageReduction} year
              {ageReduction > 1 ? 's' : ''} younger
            </strong>
          </Centered>
        )}
        {ageReduction === 0 && (
          <Centered>
            <strong>Which is the best it can be!</strong>
          </Centered>
        )}
        <UpdateWhenVisible offset={{ top: -20 }}>
          <HealthAgeDial
            age={age}
            healthAge={healthAge}
            minimumHealthAge={minimumHealthAge}
          />
        </UpdateWhenVisible>
      </div>
    </PanelContent>
  );
};

export const HealthAgeIndicatorConnected: React.FC<{
  traversalId: string;
}> = ({ traversalId }) => {
  const healthAge = useHealthAge(traversalId);
  return <HealthAgeIndicator healthAgeModel={healthAge} />;
};
