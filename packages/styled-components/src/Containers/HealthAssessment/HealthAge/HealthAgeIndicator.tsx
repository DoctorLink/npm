import React from 'react';
import { UpdateWhenVisible, PanelBodyText } from '../../../Components';
import { HealthAgeDial } from './HealthAgeDial';
import { HealthAgeTile } from './HealthAgeTile';
import styled from 'styled-components';
import { useHealthAge } from '../../../Hooks';

const Centered = styled(PanelBodyText)`
  text-align: center;
  @media screen and (min-width: 800px) {
    margin-top: 20px;
  }
`;

const FullWidthDiv = styled.div`
  display: inline;
  @media screen and (min-width: 800px) {
    height: 252px;
    line-height: 1.5;
    margin-top: 20px;
  }
`;

const HealthAgeIndicator: React.FC<{
  traversalId: string;
}> = ({ traversalId }) => {
  const { age, healthAge, minimumHealthAge } = useHealthAge(traversalId);
  const ageReduction = healthAge - minimumHealthAge;
  const yourHealthAge = 'Your health age is';
  return (
    <FullWidthDiv title={`${yourHealthAge} ${healthAge}`}>
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
    </FullWidthDiv>
  );
};
export default HealthAgeIndicator;
