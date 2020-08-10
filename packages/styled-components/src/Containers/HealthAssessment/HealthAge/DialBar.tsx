import React from 'react';
import styled from 'styled-components';
import colors from '../../../Theme/base/colors';

const Rectangle = styled.div`
  height: 24px;
  width: 100%;
  background: linear-gradient(
    270deg,
    ${colors.green100} 0%,
    ${colors.greenyellow} 25%,
    ${colors.orange200} 50%,
    ${colors.redgreen} 75%,
    ${colors.red300} 100%
  );
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (min-width: 800px) {
    border-radius: 0 0 8px 8px;
  }
`;

const Text = styled.div`
  font-size: 0.75rem;
  color: ${colors.white};
  align-self: center;
`;

const LeftText = styled(Text)`
  padding-left: 2%;
`;

const RightText = styled(Text)`
  padding-right: 2%;
`;

const DialBar: React.FC = () => {
  return (
    <Rectangle>
      <LeftText>Unhealthy</LeftText>
      <RightText>Healthy</RightText>
    </Rectangle>
  );
};

export { DialBar };
