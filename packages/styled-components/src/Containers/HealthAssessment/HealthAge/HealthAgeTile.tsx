import React, { FC } from 'react';
import styled from 'styled-components';

interface TileProps {
  heat: number;
}
const Tiles = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Age = styled.article<TileProps>`
  @media screen and (max-width: 355px) {
    font-size: clamp(
      ${(p) => 2 - p.heat / 2 + 0.4}rem,
      ${(p) => 2 - p.heat / 2 + 0.5}vw,
      ${(p) => 3 - p.heat / 2}rem
    );
  }
  @media screen and (min-width: 356px) {
    font-size: clamp(
      ${(p) => 3 - p.heat / 2}rem,
      ${(p) => 3 - p.heat / 2 + 0.5}vw,
      ${(p) => 4 - p.heat / 2}rem
    );
  }
  font-weight: 300;
`;

const FadedAge = styled(Age)`
  opacity: 0.2;
`;

const HealthAgeTile: FC<{ healthAge: number }> = ({ healthAge }) => {
  const ages = [];
  for (let i = healthAge - 2; i <= healthAge + 2; i++) {
    ages.push(i);
  }
  return (
    <Tiles>
      {ages.map((age) => {
        const heat = Math.abs(healthAge - age);
        return age === healthAge ? (
          <Age key={age} heat={heat}>
            {age}
          </Age>
        ) : (
          <FadedAge key={age} heat={heat}>
            {age}
          </FadedAge>
        );
      })}
    </Tiles>
  );
};

export { HealthAgeTile };
